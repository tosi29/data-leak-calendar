export const vendorRoleLabels = {
  development: '開発',
  operations: '運用・保守',
  service: 'サービス提供',
  infrastructure: 'クラウド基盤',
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
    ? `<p>その他の関連先：${escape(item.related_vendor)}<span class="source-meta">役割は未整理。事案の出典を参照してください。</span></p>` : '';
  return `<section class="vendor-info" aria-label="開発・運用などのベンダー情報"><h3>開発・運用などのベンダー情報</h3><p class="source-meta">「情報なし」は、掲載資料から役割・会社名を確認できていない状態です（未確認・未公表を含む）。</p><dl class="detail-grid">${rows}</dl>${legacy}</section>`;
}
