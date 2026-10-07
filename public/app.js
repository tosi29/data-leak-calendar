import { leakLabels, causeLabels, incidentTypeLabels, formatImpact, filterIncidents, dailyCounts, yearCells } from './model.js';
const $ = id => document.getElementById(id);
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dateLabel = date => date ? date.replaceAll('-', '.') : '不明・未公表';
const kindLabel = {initial:'初報',followup:'期間内の続報',unknown:'初報日未確認'};
const shortStatus = {confirmed:'漏えい・取得を確認',suspected:'漏えいの可能性',exposed:'外部から閲覧可能',lost:'紛失',ruled_out:'漏えいを否定',improper_sharing:'同意のない第三者提供'};
const fields = ['query','incident_type','month','status','cause','vendor'];
let data, candidates = [], selectedDate = '';
function options(id, entries) {
  for (const [value, label] of entries) { const option = document.createElement('option'); option.value = value; option.textContent = label; $(id).append(option); }
}
function filters() { return Object.fromEntries(fields.map(id => [id,$(id).value])); }
function sourceLink(source) {
  return `<a class="source-link" href="${escape(source.url)}" target="_blank" rel="noopener noreferrer">${escape(source.title)} ↗</a><span class="source-meta">${source.type === 'official' ? '公式発表' : '参考・報道'} · 公表 ${dateLabel(source.published_on)} · 確認 ${dateLabel(source.checked_on)}</span>`;
}
function incidentHTML(item) {
  const impact = item.impact.map(v => `<p><strong>${formatImpact(v)}</strong> — ${escape(v.description)}</p>`).join('');
  return `<details class="incident" id="${escape(item.id)}"><summary><span class="date">${dateLabel(item.published_on)}${item.publication_kind !== 'initial' ? `<small>${kindLabel[item.publication_kind]}</small>` : ''}</span><span class="identity"><span class="org">${escape(item.organization.name)}</span><span class="title">${escape(item.title)}</span><span class="incident-type">${escape(incidentTypeLabels[item.incident_type])}</span></span><span class="impact-number">${formatImpact(item.impact[0])}${item.impact.length > 1 ? `<span class="impact-more">ほか ${item.impact.length-1} 区分・内訳あり</span>` : ''}</span><span class="status-cell"><span class="badge ${item.leak_status}">${shortStatus[item.leak_status]}</span></span><span class="chevron" aria-hidden="true">›</span></summary><div class="detail"><p>${escape(item.summary)}</p><dl class="detail-grid"><div><dt>事案の種別</dt><dd>${escape(incidentTypeLabels[item.incident_type])}<p class="source-meta">漏えいの確認状況とは別の分類です。</p></dd></div><div><dt>対象規模（合算しません）</dt><dd>${impact}</dd></div><div><dt>情報の種類</dt><dd>${escape(item.data_types.join('、') || '公表資料に記載なし')}</dd></div><div><dt>原因 · ${escape(causeLabels[item.cause.category])}</dt><dd>${escape(item.cause.detail)}<p class="source-meta">原因の詳細：${{confirmed:'公表資料で確認',suspected:'可能性として公表',unknown:'不明・調査中'}[item.cause.certainty]}</p></dd></div><div><dt>関連ベンダー・サービス</dt><dd>${escape(item.related_vendor || '関連の記載なし')}<p class="source-meta">業種：${escape(item.organization.sector)}</p></dd></div><div><dt>初報日 / 掲載公表日</dt><dd>${dateLabel(item.first_published_on)} / ${dateLabel(item.published_on)}</dd></div><div><dt>発生日 / 発覚日</dt><dd>${dateLabel(item.occurred_on)} / ${dateLabel(item.detected_on)}</dd></div></dl>${item.notes ? `<p class="detail-note">${escape(item.notes)}</p>` : ''}<h3>出典 <span class="source-meta">${item.verification === 'official' ? '公式資料の本文を確認' : '報道・二次資料を確認'}</span></h3><ul>${item.sources.map(s => `<li>${sourceLink(s)}</li>`).join('')}</ul>${item.updates.length ? `<h3>続報・更新</h3><ul>${item.updates.map(u => `<li>${dateLabel(u.date)} — ${escape(u.summary)} <a href="${escape(item.sources[u.source_index].url)}" target="_blank" rel="noopener noreferrer">出典 ↗</a></li>`).join('')}</ul>` : ''}<p class="source-meta">データ更新：${dateLabel(item.updated_on)}</p><a class="permalink" href="#${escape(item.id)}">この事案へのリンク ↗</a></div></details>`;
}
function renderCalendar(items) {
  const year = Number($('year').value);
  const cells = yearCells(year, data.meta.coverage_start, data.meta.as_of, dailyCounts(items));
  const weeks = cells.length / 7;
  const labels = cells.map((cell, index) => cell.inYear && cell.date.endsWith('-01') ? `<span style="grid-column:${Math.floor(index/7)+1}">${Number(cell.date.slice(5,7))}月</span>` : '').join('');
  $('heatmap').innerHTML = `<div class="heatmap-layout" style="--weeks:${weeks}"><div class="weekdays" aria-hidden="true"><span></span><span></span><span>月</span><span></span><span>水</span><span></span><span>金</span><span></span></div><div><div class="months" aria-hidden="true">${labels}</div><div class="grid" role="group" aria-label="${year}年の日別掲載事案数">${cells.map(cell => {
    const level = cell.count === 0 ? 0 : cell.count === 1 ? 1 : cell.count === 2 ? 2 : cell.count < 5 ? 3 : 4;
    const label = `${cell.date}：${cell.active ? cell.count + '件掲載' : '収集対象期間外'}`;
    return `<button type="button" class="day ${!cell.inYear ? 'invisible' : cell.active ? 'level-'+level : 'outside'}" ${cell.active ? `data-date="${cell.date}" aria-pressed="${cell.date === selectedDate}"` : 'disabled'} aria-label="${label}" title="${label}"></button>`;
  }).join('')}</div></div></div>`;
  const count = items.filter(i => i.published_on.startsWith(String(year))).length;
  $('activity-caption').textContent = `${year}年 · 条件に一致する ${count} 事案 · 公表日ベース`;
  // Arrow keys move by weekday (up/down) or week (left/right), including in narrow screens.
  $('heatmap').querySelector('.grid').addEventListener('keydown', event => {
    const offsets = {ArrowUp:-1,ArrowDown:1,ArrowLeft:-7,ArrowRight:7};
    if (!(event.key in offsets) || !event.target.matches('button')) return;
    event.preventDefault();
    const buttons = [...$('heatmap').querySelectorAll('.day')];
    const next = buttons[buttons.indexOf(event.target) + offsets[event.key]];
    if (next && !next.disabled) next.focus();
  });
}
function render() {
  const base = filterIncidents(data.incidents,filters());
  const results = selectedDate ? base.filter(i => i.published_on === selectedDate) : base;
  renderCalendar(base);
  $('type-breakdown').textContent = '表示中の内訳：' + Object.entries(incidentTypeLabels).map(([key, label]) => `${label} ${results.filter(i => i.incident_type === key).length}件`).join(' ／ ');
  $('incident-list').innerHTML = results.map(incidentHTML).join('');
  $('result-count').textContent = `${results.length} / ${data.incidents.length}`;
  $('filter-summary').textContent = `${selectedDate ? dateLabel(selectedDate)+' の公表 · ' : ''}${results.length}件を表示 · 公表日の新しい順`;
  $('empty').hidden = results.length > 0;
  const params = new URLSearchParams();
  for(const [key,value] of Object.entries(filters())) if(value) params.set(key,value);
  if(selectedDate) params.set('date',selectedDate);
  if($('year').value !== data.meta.as_of.slice(0,4)) params.set('year',$('year').value);
  history.replaceState(null,'',`${location.pathname}${params.size ? '?'+params : ''}${location.hash}`);
}
function openHash() {
  const id = decodeURIComponent(location.hash.slice(1));
  const item = data.incidents.find(i => i.id === id);
  if(!item) return;
  if(!$(id)){for(const field of fields) $(field).value='';selectedDate='';render();}
  $(id).open=true;
  $(id).scrollIntoView({block:'start'});
}
try {
  const response = await fetch('./data/incidents.json');
  if(!response.ok) throw new Error('データを取得できませんでした');
  data = await response.json();
  $('as-of').textContent = `最終確認 ${dateLabel(data.meta.as_of)}`;
  $('total').textContent = data.incidents.length;
  $('confirmed').textContent = data.incidents.filter(i=>i.leak_status === 'confirmed').length;
  $('suspected').textContent = data.incidents.filter(i=>i.leak_status !== 'confirmed').length;
  $('official').textContent = data.incidents.filter(i=>i.verification === 'official').length;
  options('year', Array.from({length:Number(data.meta.as_of.slice(0,4))-Number(data.meta.coverage_start.slice(0,4))+1},(_,i)=>{const y=Number(data.meta.coverage_start.slice(0,4))+i;return [String(y),`${y}年`];}));
  $('year').value = data.meta.as_of.slice(0,4);
  options('month',[...new Set(data.incidents.map(i=>i.published_on.slice(0,7)))].sort().reverse().map(m=>[m,m.replace('-','年')+'月']));
  options('incident_type',Object.entries(incidentTypeLabels));
  options('status',Object.entries(leakLabels).filter(([key])=>data.incidents.some(i=>i.leak_status===key)));
  options('cause',Object.entries(causeLabels).filter(([key])=>data.incidents.some(i=>i.cause.category===key)));
  options('vendor',[...new Set(data.incidents.map(i=>i.related_vendor).filter(Boolean))].sort().map(v=>[v,v]));
  const params = new URLSearchParams(location.search);
  for(const field of [...fields,'year']) if(params.has(field)) {const value=params.get(field);if(field==='query'||[...$(field).options].some(o=>o.value===value)) $(field).value=value;}
  const date = params.get('date');
  if(date && yearCells(Number(date.slice(0,4)),data.meta.coverage_start,data.meta.as_of).some(c=>c.active&&c.date===date)){selectedDate=date;$('year').value=date.slice(0,4);}
  $('filters').addEventListener('submit',event=>event.preventDefault());
  for(const field of fields) $(field).addEventListener(field==='query'?'input':'change',()=>{selectedDate='';render();});
  $('year').addEventListener('change',()=>{selectedDate='';render();});
  $('reset').addEventListener('click',()=>{for(const field of fields) $(field).value='';selectedDate='';render();});
  $('heatmap').addEventListener('click',event=>{const button=event.target.closest('[data-date]');if(!button)return;const date=button.dataset.date;selectedDate=selectedDate===date?'':date;render();$('heatmap').querySelector(`[data-date="${date}"]`)?.focus();});
  window.addEventListener('hashchange',openHash);
  render(); openHash();
  // Start narrow viewports at the collection period rather than January.
  const firstActive = $('heatmap').querySelector('button:not(:disabled)');
  const scroller = document.querySelector('.heatmap-scroll');
  if (firstActive && scroller.scrollWidth > scroller.clientWidth) {
    scroller.scrollLeft = firstActive.getBoundingClientRect().left - scroller.getBoundingClientRect().left - 38;
  }
  try {
    const response = await fetch('./data/candidates.json');
    if(!response.ok) throw new Error();
    candidates = await response.json();
    $('candidate-count').textContent = `${candidates.length}件`;
    $('candidate-list').innerHTML = candidates.map(c=>`<div class="candidate"><span>${dateLabel(c.reported_on)}</span><span>${escape(c.organization)}</span><span>${escape(c.note)}</span><a href="${escape(c.reference_url)}" target="_blank" rel="noopener noreferrer">参照 ↗</a></div>`).join('');
    if (!candidates.length) $('candidate-list').textContent = '現在、出典の確認待ちはありません。';
  } catch { $('candidate-list').textContent='候補の読み込みに失敗しました。再読み込みしてください。'; }
} catch(error) {
  $('error').hidden=false;
  $('error').textContent='データを読み込めませんでした。ページを再読み込みするか、GitHubのデータをご覧ください。';
  console.error(error);
}
