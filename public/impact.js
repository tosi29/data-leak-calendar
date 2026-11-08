import { formatImpact, unitLabels } from './model.js';

// A single comparable amount per incident. Totals and overlapping breakdowns
// cannot be distinguished in the current schema, so never sum multiple entries.
export function impactSeries(items, {unit = 'records', start, end}) {
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
      (month === item.published_on.slice(0,7)) ? amount.count : 0)});
  }
  return {months, series, omitted, totals: months.map((_, i) => series.reduce((sum, row) => sum + row.values[i], 0))};
}
const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Same order as the category cards; segments are grouped by type within a month.
const typeOrder = ['accident', 'attack', 'improper_handling', 'unknown'];
const compact = value => new Intl.NumberFormat('ja-JP', {notation:'compact', maximumFractionDigits:1}).format(value);
function bindTooltip(root) {
  if (root.dataset.tooltip) return;
  root.dataset.tooltip = 'bound';
  const plot = root.querySelector('.impact-plot'), tip = root.querySelector('.impact-tooltip');
  const show = target => {
    const segment = target?.closest?.('[data-tip]');
    if (!segment) { tip.hidden = true; return; }
    const [org, amount, date] = JSON.parse(segment.dataset.tip);
    tip.innerHTML = `<strong>${esc(org)}</strong><span>${esc(amount)}</span><small>公表 ${esc(date)}</small>`;
    tip.hidden = false;
    const box = segment.getBoundingClientRect(), frame = root.getBoundingClientRect();
    const x = Math.min(Math.max(box.left + box.width / 2 - frame.left, 90), frame.width - 90);
    tip.style.left = `${x}px`;
    tip.style.top = `${box.top - frame.top}px`;
  };
  plot.addEventListener('pointerover', event => show(event.target));
  plot.addEventListener('pointerleave', () => { tip.hidden = true; });
  plot.addEventListener('focusin', event => show(event.target));
  plot.addEventListener('focusout', () => { tip.hidden = true; });
  plot.addEventListener('scroll', () => { tip.hidden = true; });
}
export function renderImpactChart(root, items, options) {
  const {months, series, totals, omitted} = impactSeries(items, options);
  const unit = unitLabels[options.unit];
  const width = Math.max(680, months.length * 100 + 100), height = 340;
  const left = 70, top = 40, bottom = 295, plotHeight = bottom - top;
  const max = Math.max(1, ...totals), step = (width - left - 20) / Math.max(1, months.length);
  let svg = `<svg viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" role="img" aria-label="公表された対象規模の月別積み上げグラフ。案件の詳細は下の事案一覧。"><defs><pattern id="impact-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="6" height="6" class="hatch-base"/><line x1="0" y1="0" x2="0" y2="6" class="hatch-line"/></pattern></defs>`;
  for (let i = 0; i <= 4; i++) {
    const y = bottom - plotHeight * i / 4;
    svg += `<line class="grid-line" x1="${left}" x2="${width-20}" y1="${y}" y2="${y}"/><text x="${left-10}" y="${y+4}" text-anchor="end">${compact(max*i/4)}</text>`;
  }
  const ordered = [...series].sort((a, b) => typeOrder.indexOf(a.item.incident_type) - typeOrder.indexOf(b.item.incident_type));
  months.forEach((month, i) => {
    let sum = 0;
    const x = left + i * step + step * .2, w = step * .6;
    for (const row of ordered) {
      const value = row.values[i];
      if (!value) continue;
      const h = value / max * plotHeight, y = bottom - (sum + value) / max * plotHeight;
      const tip = JSON.stringify([row.item.organization.name, formatImpact(row.amount), row.item.published_on.replaceAll('-', '.')]);
      svg += `<a href="#${esc(row.item.id)}" data-tip="${esc(tip)}" aria-label="${esc(row.item.organization.name)}：${esc(formatImpact(row.amount))}"><rect class="segment type-${esc(row.item.incident_type)}${h < 4 ? ' thin' : ''}" x="${x}" y="${y}" width="${w}" height="${Math.max(h, 1)}"/></a>`;
      sum += value;
    }
    if (totals[i]) svg += `<text class="bar-total" x="${x + w / 2}" y="${bottom - totals[i] / max * plotHeight - 8}" text-anchor="middle">${compact(totals[i])}</text>`;
    svg += `<text x="${left+(i+.5)*step}" y="${bottom + 24}" text-anchor="middle"><title>${month}：参考合計 ${totals[i].toLocaleString('ja-JP')}${unit}${month === options.end.slice(0,7) ? `（${options.end.slice(8)}日まで）` : ''}</title>${Number(month.slice(5))}月</text>`;
  });
  svg += '</svg>';
  root.querySelector('.impact-tooltip').hidden = true;
  root.querySelector('.impact-plot').innerHTML = series.length ? svg : '<p class="empty">この単位・条件で集計できる対象規模はありません。</p>';
  root.querySelector('.impact-summary').textContent = `${series.length}案件を集計 · 単位：${unit} · 除外：数値なし／別単位 ${omitted.unknown}件、同単位の内訳が複数 ${omitted.multiple}件、漏えい否定 ${omitted.ruledOut}件`;
  bindTooltip(root);
}
