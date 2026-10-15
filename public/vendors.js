export const vendorRoleLabels = {
  development: '開発',
  operations: '運用・保守',
  service: 'サービス提供',
  infrastructure: 'クラウド基盤',
};

export const vendorResearchLabels = {
  identified: '会社名・役割を確認（一部）',
  not_identified: '調査済み・会社名／役割を特定できず',
  unavailable: '資料本文を取得できず・未特定',
};

export function vendorNames(item) {
  return [...new Set([item.related_vendor, ...(item.vendors || []).map(v => v.name)].filter(Boolean))];
}

const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function vendorHTML(item) {
  const vendors = item.vendors || [];
  const rows = Object.entries(vendorRoleLabels).map(([role, label]) => {
    const matches = vendors.filter(v => v.role === role);
    const content = matches.length ? matches.map(v => {
      const source = item.sources[v.source_index];
      return `<p><strong>${escape(v.name)}</strong> — ${escape(v.detail)} <a href="${escape(source.url)}" target="_blank" rel="noopener noreferrer">根拠 ↗</a><span class="source-meta">確認日：${escape(source.checked_on)}</span></p>`;
    }).join('') : '<span class="source-meta">情報なし</span>';
    return `<div><dt>${label}</dt><dd>${content}</dd></div>`;
  }).join('');
  const legacy = item.related_vendor && !vendors.some(v => v.name === item.related_vendor)
    ? `<p>その他の関連先・サービス名：${escape(item.related_vendor)}<span class="source-meta">役割未特定</span></p>` : '';
  const research = item.vendor_research;
  const limitations = research?.source_checks.filter(c => c.status !== 'reviewed').map(c => {
    const source = item.sources[c.source_index];
    return `<a href="${escape(source.url)}" target="_blank" rel="noopener noreferrer">出典${c.source_index + 1}</a>：${c.status === 'partial' ? '一部のみ確認' : '本文取得不可'}`;
  }).join('、');
  const review = research
    ? `<p class="source-meta">調査日：${escape(research.checked_on)} · ${escape(vendorResearchLabels[research.result])}</p><p>${escape(research.note)}</p>${limitations ? `<p class="source-meta">資料確認の制約：${limitations}</p>` : ''}`
    : '<p class="source-meta">ベンダー情報の全役割調査は未実施です。</p>';
  return `<section class="vendor-info" aria-label="開発・運用などのベンダー情報"><h3>開発・運用などのベンダー情報</h3>${review}<dl class="detail-grid">${rows}</dl>${legacy}</section>`;
}
