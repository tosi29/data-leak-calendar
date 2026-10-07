import test from 'node:test';
import assert from 'node:assert/strict';
import { dailyCounts, yearCells, filterIncidents, formatImpact } from '../public/model.js';
import { loadData, validate, validateCandidates } from '../scripts/validate.mjs';
const data = await loadData();
test('calendar respects weekdays, leap days and collection boundaries', () => {
  const cells = yearCells(2026, '2026-09-01', '2026-10-07');
  assert.equal(cells.length % 7, 0);
  assert.equal(cells.findIndex(c => c.date === '2026-09-01') % 7, 2);
  assert.equal(cells.filter(c => c.active).length, 37);
  assert.equal(cells.find(c => c.date === '2026-10-08').active, false);
  assert.ok(yearCells(2028, '2028-01-01', '2028-12-31').some(c => c.date === '2028-02-29'));
});
test('follow-up sources do not inflate the incident count', () => {
  const counts = dailyCounts(data.incidents);
  assert.equal([...counts.values()].reduce((a,b) => a+b,0), data.incidents.length);
  const gyazo = data.incidents.find(i => i.id === 'helpfeel-gyazo-20260916');
  assert.equal(dailyCounts([gyazo]).get('2026-09-25'), undefined);
});
test('filters compose and normalize full-width search', () => {
  assert.equal(filterIncidents(data.incidents, {query:'Ｇｙａｚｏ', status:'confirmed'}).length, 1);
  assert.equal(filterIncidents(data.incidents, {query:'Gyazo', month:'2026-10'}).length, 0);
  assert.ok(filterIncidents(data.incidents, {date:'2026-09-29'}).every(i => i.published_on === '2026-09-29'));
});
test('unknown counts are not displayed as zero and units survive', () => {
  assert.equal(formatImpact({count:null,unit:'records',qualifier:'unknown'}), '規模未公表');
  assert.equal(formatImpact({count:1600000,unit:'accounts',qualifier:'approximate'}), '約1,600,000アカウント');
});
test('rejects malformed dates, duplicate IDs, missing sources, and unsupported certainty', () => {
  for (const edit of [i=>i.published_on='2026-09-31', i=>i.sources=[], i=>i.impact[0].count=-1, i=>i.cause.certainty='probably']) {
    const copy = structuredClone(data.incidents); edit(copy[0]); assert.throws(() => validate(copy,data.meta));
  }
  assert.throws(() => validate([...data.incidents,data.incidents[0]],data.meta));
});
test('pending research cannot duplicate published records', () => {
  const candidate = { id: data.incidents[0].id, reported_on:'2026-10-06', organization:'候補', note:'未検証', reference_url:'https://example.com', verification:'pending' };
  assert.throws(() => validateCandidates([candidate], data.incidents, data.meta));
  candidate.id = 'new-candidate';
  assert.doesNotThrow(() => validateCandidates([candidate], data.incidents, data.meta));
  candidate.reference_url = 'javascript:alert(1)';
  assert.throws(() => validateCandidates([candidate], data.incidents, data.meta));
});
