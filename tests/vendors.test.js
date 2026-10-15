import test from 'node:test';
import assert from 'node:assert/strict';
import { vendorHTML, vendorNames } from '../public/vendors.js';
import { filterIncidents } from '../public/model.js';
import { loadData, validate } from '../scripts/validate.mjs';
const { incidents, meta } = await loadData();
const base = incidents.find(i => i.id === 'citizen-20261006');

test('unclassified related companies are never presented as developers', () => {
  const item = { ...base, vendors: [], related_vendor: '既存委託先' };
  const html = vendorHTML(item);
  assert.equal((html.match(/<span class="source-meta">情報なし<\/span>/g) || []).length, 4);
  assert.match(html, /その他の関連先：既存委託先/);
  assert.match(html, /未確認・未公表/);
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
