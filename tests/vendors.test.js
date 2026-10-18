import test from 'node:test';
import assert from 'node:assert/strict';
import { vendorHTML, vendorNames } from '../public/vendors.js';
import { filterIncidents } from '../public/model.js';
import { loadData, validate } from '../scripts/validate.mjs';
import { readFile } from 'node:fs/promises';
const { incidents, meta } = await loadData();
const base = incidents.find(i => i.id === 'citizen-20261006');

test('unclassified related companies are never presented as developers', () => {
  const item = { ...base, vendors: [], related_vendor: '既存委託先' };
  const html = vendorHTML(item);
  assert.equal((html.match(/<span class="source-meta">情報なし<\/span>/g) || []).length, 4);
  assert.match(html, /その他の関連先・サービス名：既存委託先/);
  assert.match(html, /役割未特定/);
  delete item.vendors;
  assert.equal(vendorHTML(item), html);
  assert.doesNotMatch(vendorHTML({...item, related_vendor:null}), /その他の関連先/);
});

test('roles link to their own evidence and render names safely', () => {
  const item = structuredClone(base);
  item.vendors[0].name = '<script>company</script>';
  item.vendors[0].detail = '提供元 & 運営元';
  const html = vendorHTML(item);
  assert.match(html, /&lt;script&gt;company&lt;\/script&gt;/);
  assert.ok(html.includes(item.sources[item.vendors[0].source_index].url));
  assert.match(html, /<dt>開発<\/dt><dd><span class="source-meta">情報なし/);
  assert.match(html, /<dt>サービス提供<\/dt><dd><p><strong>/);
});

test('all vendor names are searchable and filterable without duplicate options', () => {
  const item = structuredClone(base);
  item.vendors.push({...item.vendors[0], name:'ＡＢＣ開発', role:'development'});
  assert.equal(vendorNames(item).filter(v => v === item.related_vendor).length, 1);
  assert.equal(filterIncidents([item], {query:'abc開発'}).length, 1);
  assert.equal(filterIncidents([item], {vendor:'ＡＢＣ開発'}).length, 1);
  assert.equal(filterIncidents([item], {vendor:item.related_vendor}).length, 1);
  assert.equal(filterIncidents([item], {vendor:'ＡＢＣ開発', status:'ruled_out'}).length, 0);
});

test('keyword search includes vendor descriptions and normalizes fullwidth text', () => {
  const item = incidents.find(i => i.id === 'tokyoshusui-20261009');
  assert.equal(filterIncidents([item], {query:'ｆｕｔｕｒｅ 技術協力'}).length, 1);
});

test('vendor attribution requires a known role, text and a valid source index', () => {
  for (const edit of [
    x => x.vendors = null,
    x => x.vendors = [null],
    x => x.vendors[0].role = 'guessed',
    x => x.vendors[0].name = ' ',
    x => x.vendors[0].detail = '',
    x => x.vendors[0].source_index = -1,
    x => x.vendors[0].source_index = 999,
    x => x.vendors[0].source_index = '0',
    x => x.vendors.push({...x.vendors[0]}),
  ]) {
    const item = structuredClone(base); edit(item);
    assert.throws(() => validate([item], meta));
  }
  const item = structuredClone(base);
  item.vendors.push({...item.vendors[0], role:'development'});
  assert.doesNotThrow(() => validate([item], meta));
});

test('research distinguishes unavailable sources, unidentified roles and unreviewed incidents', () => {
  const unavailable = incidents.find(i => i.vendor_research?.result === 'unavailable');
  assert.match(vendorHTML(unavailable), /資料本文を取得できず・未特定/);
  assert.match(vendorHTML(unavailable), /資料確認の制約/);
  const unidentified = incidents.find(i => i.id === 'burgerking-20261015');
  assert.match(vendorHTML(unidentified), /調査済み・会社名／役割を特定できず/);
  const unreviewed = {...base}; delete unreviewed.vendor_research;
  assert.match(vendorHTML(unreviewed), /全役割調査は未実施/);
  const escaped = structuredClone(base);
  escaped.vendor_research.note = '<img onerror="bad">';
  assert.match(vendorHTML(escaped), /&lt;img/);
});

test('vendor research validates dates, complete source coverage and evidence consistency', () => {
  for (const edit of [
    x => x.vendor_research = null,
    x => x.vendor_research.checked_on = '2099-01-01',
    x => x.vendor_research.result = 'guessed',
    x => x.vendor_research.note = ' ',
    x => x.vendor_research.source_checks = [],
    x => x.vendor_research.source_checks[0].source_index = -1,
    x => x.vendor_research.source_checks[0].source_index = '0',
    x => x.vendor_research.source_checks[0].status = 'unknown',
    x => x.vendor_research.source_checks[0].status = 'unavailable',
    x => x.vendors = [],
  ]) {
    const item = structuredClone(base); edit(item);
    assert.throws(() => validate([item], meta));
  }
});

test('the full vendor research audit covers every researched incident once', async () => {
  const audit = JSON.parse(await readFile(new URL('../data/research-audit.json', import.meta.url), 'utf8'));
  const latest = new Map();
  for (const run of audit.subsequent_runs) {
    if (run.incident_reviews) {
      const counts = {};
      const ids = new Set();
      for (const review of run.incident_reviews) {
        assert.ok(!ids.has(review.incident_id));
        ids.add(review.incident_id);
        counts[review.result] = (counts[review.result] || 0) + 1;
        latest.set(review.incident_id, review);
      }
      assert.deepEqual(run.counts, counts);
    }
    for (const review of run.vendor_review_updates || []) {
      assert.ok(latest.has(review.incident_id), 'An update must reference an earlier review');
      latest.set(review.incident_id, review);
    }
  }
  const researched = incidents.filter(i => i.vendor_research);
  assert.deepEqual([...latest.keys()].sort(), researched.map(i => i.id).sort());
  for (const review of latest.values()) {
    const item = incidents.find(i => i.id === review.incident_id);
    assert.equal(review.result, item.vendor_research.result);
    assert.ok(review.queries.length > 0);
  }
});

test('product development evidence is scoped separately from incident responsibility', () => {
  for (const id of ['futureshop-mail-20261008', 'tokyoshusui-20261009']) {
    const item = incidents.find(i => i.id === id);
    const developer = item.vendors.find(v => v.role === 'development');
    assert.equal(developer.name, 'イー・エージェンシー');
    assert.match(item.sources[developer.source_index].url, /2026\/01\/21/);
    assert.match(developer.detail, /技術協力/);
    assert.match(developer.detail, /責任や侵入原因を示すものではない/);
  }
  for (const id of ['burgerking-20261015', 'sourcenext-20261015', 'yakiniku-king-20261005']) {
    assert.ok(!incidents.find(i => i.id === id).vendors?.some(v => v.role === 'development'));
  }
});
