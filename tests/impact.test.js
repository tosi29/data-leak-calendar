import test from 'node:test';
import assert from 'node:assert/strict';
import { impactSeries } from '../public/impact.js';
const item = (id, date, impact, leak_status = 'suspected') => ({id, published_on: date, impact, leak_status});
const records = count => ({count, unit:'records', qualifier:count === null ? 'unknown' : 'maximum'});
const options = {start:'2026-06-01', end:'2026-08-25', unit:'records', mode:'cumulative'};
test('stacked scale keeps units separate, omits unknown and overlapping breakdowns, and counts an incident once', () => {
  const a = item('a','2026-06-03',[records(10)]);
  const data = [a,a,item('b','2026-08-01',[records(20),{count:5,unit:'people'}]),item('c','2026-07-01',[records(100),records(40)]),item('d','2026-06-02',[records(null)]),item('e','2026-06-02',[records(999)],'ruled_out'),item('f','2026-05-01',[records(500)])];
  const result = impactSeries(data, options);
  assert.deepEqual(result.totals,[10,10,30]);
  assert.deepEqual(result.omitted,{unknown:1,multiple:1,ruledOut:1});
  assert.deepEqual(impactSeries(data,{...options,mode:'monthly'}).totals,[10,0,20]);
  assert.deepEqual(impactSeries(data,{...options,unit:'people'}).totals,[0,0,5]);
});
test('empty, zero, partial month and year boundary are preserved', () => {
  const range = {...options,start:'2026-12-01',end:'2027-02-05'};
  assert.deepEqual(impactSeries([],range).months,['2026-12','2027-01','2027-02']);
  const result = impactSeries([item('zero','2027-02-01',[records(0)]),item('future','2027-02-06',[records(9)])],range);
  assert.equal(result.series.length,1);
  assert.deepEqual(result.totals,[0,0,0]);
});
