import { formatImpact, unitLabels } from './model.js';

// A single comparable amount per incident. Totals and overlapping breakdowns
// cannot be distinguished in the current schema, so never sum multiple entries.
export function impactSeries(items, {unit = 'records', mode = 'cumulative', start, end}) {
  const months = [];
  for (let date = start.slice(0, 7); date <= end.slice(0, 7);) {
    months.push(date);
    const [y, m] = date.split('-').map(Number);
    date = `${m === 12 ? y + 1 : y}-${String(m === 12 ? 1 : m + 1).padStart(2, '0')}`;
  }
  const omitted = {unknown: 0, multiple: 0, ruledOut: 0};
  const seen = new Set();
  const series = [];
  for (const item of [...items].sort((a,b) => a.published_on.localeCompare(b.published_on) || a.id.localeCompare(b.id))) {
    if (seen.has(item.id) || item.published_on < start || item.published_on > end) continue;
    seen.add(item.id);
    if (item.leak_status === 'ruled_out') { omitted.ruledOut++; continue; }
    const amounts = item.impact.filter(v => v.unit === unit);
    if (amounts.length > 1) { omitted.multiple++; continue; }
    if (amounts.length !== 1 || amounts[0].count === null) { omitted.unknown++; continue; }
    const amount = amounts[0];
    series.push({item, amount, values: months.map(month =>
      (mode === 'cumulative' ? month >= item.published_on.slice(0,7) : month === item.published_on.slice(0,7)) ? amount.count : 0)});
  }
  return {months, series, omitted, totals: months.map((_, i) => series.reduce((sum, row) => sum + row.values[i], 0))};
}
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function color(id) {
  let hash = 0;
  for (const c of id) hash = (hash * 31 + c.charCodeAt(0)) >>> 0;
  return `hsl(${hash % 360} 48% ${35 + (hash % 20)}%)`;
}
export function renderImpactChart(root, items, options) {
  const {months, series, totals, omitted} = impactSeries(items, options);
  const unit = unitLabels[options.unit];
  const width = Math.max(680, months.length * 100 + 100), height = 330;
  const left = 90, top = 30, bottom = 285, plotHeight = bottom - top;
  const max = Math.max(1, ...totals), step = (width - left - 20) / Math.max(1, months.length);
  let svg = `<svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="公表された対象規模の${options.mode === 'cumulative' ? '累積' : '月別'}積み上げグラフ。詳細は下の内訳表。">`;
  for (let i = 0; i <= 4; i++) {
    const y = bottom - plotHeight * i / 4;
    svg += `<line x1="${left}" x2="${width-20}" y1="${y}" y2="${y}" stroke="#e3e5dd"/><text x="${left-8}" y="${y+4}" text-anchor="end">${new Intl.NumberFormat('ja-JP', {notation:'compact', maximumFractionDigits:1}).format(max*i/4)}</text>`;
  }
  months.forEach((month, i) => {
    let sum = 0;
    for (const row of series) {
      const value = row.values[i];
      if (!value) continue;
      const h = value / max * plotHeight, y = bottom - (sum + value) / max * plotHeight;
      svg += `<a href="#${esc(row.item.id)}"><rect x="${left+i*step+step*.18}" y="${y}" width="${step*.64}" height="${h}" fill="${color(row.item.id)}"><title>${esc(row.item.organization.name)}：${esc(formatImpact(row.amount))}（公表 ${row.item.published_on}）</title></rect></a>`;
      sum += value;
    }
    svg += `<text x="${left+(i+.5)*step}" y="310" text-anchor="middle">${month}</text>`;
  });
  svg += '</svg>';
  root.querySelector('.impact-plot').innerHTML = series.length ? svg : '<p class="empty">この単位・条件で集計できる対象規模はありません。</p>';
  root.querySelector('.impact-summary').textContent = `${series.length}案件を集計 · 単位：${unit} · 除外：数値なし／別単位 ${omitted.unknown}件、同単位の内訳が複数 ${omitted.multiple}件、漏えい否定 ${omitted.ruledOut}件`;
  root.querySelector('.impact-totals').innerHTML = `<table><caption>${options.mode === 'cumulative' ? '月末までの累積' : '月ごと'}の参考合計（${unit}）</caption><thead><tr><th scope="col">公表月</th><th scope="col">対象規模の合計</th></tr></thead><tbody>${months.map((month,i)=>`<tr><th scope="row">${month}${month === options.end.slice(0,7) ? `（${options.end.slice(8)}日まで）` : ''}</th><td>${totals[i].toLocaleString('ja-JP')}${unit}</td></tr>`).join('')}</tbody></table>`;
  root.querySelector('.impact-rows').innerHTML = series.map(row=>`<tr><td>${row.item.published_on}</td><th scope="row"><span class="impact-key" style="background:${color(row.item.id)}"></span><a href="#${esc(row.item.id)}">${esc(row.item.organization.name)}</a></th><td>${esc(formatImpact(row.amount))}</td><td>${esc(row.amount.description)}</td></tr>`).join('');
}
