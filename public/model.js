export const leakLabels = { confirmed: '漏えい・第三者取得を確認', suspected: '漏えいの可能性', exposed: '外部から閲覧可能', lost: '紛失', ruled_out: '漏えいを否定', improper_sharing: '同意のない第三者提供' };
export const causeLabels = { vulnerability: '脆弱性の悪用', unauthorized_access: '不正アクセス（詳細不明）', credentials: '認証情報の不正利用', configuration: '設定・管理不備', misdelivery: '誤送信・誤送付', redaction_error: '黒塗り・公開処理の不備', loss: '紛失', improper_sharing: '不適切な第三者提供', unknown: '原因不明' };
export const unitLabels = { people: '人', records: '件', accounts: 'アカウント', organizations: '組織', bookings: '予約', documents: '通', images: '枚' };
export const qualifierLabels = { exact: '', approximate: '約', maximum: '最大', maximum_approximate: '最大約', unknown: '' };
export function formatImpact(item) {
  return item.count === null ? '規模未確認・未公表' : `${qualifierLabels[item.qualifier]}${item.count.toLocaleString('ja-JP')}${unitLabels[item.unit]}`;
}
export function filterIncidents(items, { query = '', month = '', cause = '', status = '', vendor = '', date = '' } = {}) {
  const words = query.trim().normalize('NFKC').toLowerCase().split(/\s+/).filter(Boolean);
  return items.filter(item => (!month || item.published_on.startsWith(month)) && (!date || item.published_on === date)
    && (!cause || item.cause.category === cause) && (!status || item.leak_status === status)
    && (!vendor || item.related_vendor === vendor)
    && words.every(word => [item.organization.name, item.title, item.summary, ...item.data_types, item.related_vendor || ''].join(' ').normalize('NFKC').toLowerCase().includes(word)));
}
export function dailyCounts(items) {
  const counts = new Map();
  for (const item of items) counts.set(item.published_on, (counts.get(item.published_on) || 0) + 1);
  return counts;
}
export function yearCells(year, start, end, counts = new Map()) {
  const first = new Date(Date.UTC(year, 0, 1));
  first.setUTCDate(first.getUTCDate() - first.getUTCDay());
  const last = new Date(Date.UTC(year, 11, 31));
  last.setUTCDate(last.getUTCDate() + 6 - last.getUTCDay());
  const cells = [];
  for (let day = new Date(first); day <= last; day.setUTCDate(day.getUTCDate() + 1)) {
    const date = day.toISOString().slice(0, 10);
    const inYear = day.getUTCFullYear() === year;
    cells.push({ date, inYear, active: inYear && date >= start && date <= end, count: counts.get(date) || 0 });
  }
  return cells;
}
