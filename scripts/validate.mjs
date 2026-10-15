import { vendorRoleLabels, vendorResearchLabels } from '../public/vendors.js';
import { readdir, readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { leakLabels, causeLabels, unitLabels, qualifierLabels, incidentTypeLabels } from '../public/model.js';
export const root = fileURLToPath(new URL('../', import.meta.url));
export function validDate(value) {
  return typeof value === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
}
export function validate(items, meta) {
  const fail = message => { throw new Error(message); };
  if (!validDate(meta.coverage_start) || !validDate(meta.as_of) || meta.as_of < meta.coverage_start) fail('Invalid coverage dates');
  const ids = new Set();
  for (const item of items) {
    const check = (condition, message) => { if (!condition) fail(`${item.id}: ${message}`); };
    check(/^[a-z0-9-]+$/.test(item.id) && !ids.has(item.id), 'Invalid or duplicate ID'); ids.add(item.id);
    for (const key of ['published_on', 'updated_on']) check(validDate(item[key]), `Invalid ${key}`);
    for (const key of ['occurred_on', 'detected_on', 'first_published_on']) check(item[key] == null || validDate(item[key]), `Invalid ${key}`);
    check(item.published_on >= meta.coverage_start && item.published_on <= meta.as_of, 'Publication outside coverage');
    check(item.updated_on >= item.published_on && item.updated_on <= meta.as_of, 'Invalid update date');
    check(!item.first_published_on || item.first_published_on <= item.published_on, 'First publication after selected publication');
    check(item.organization?.name && item.organization?.sector && item.title && item.summary, 'Required text missing');
    check(Object.hasOwn(leakLabels, item.leak_status), 'Invalid leak status');
    check(Object.hasOwn(incidentTypeLabels, item.incident_type), 'Invalid incident type');
    check(Object.hasOwn(causeLabels, item.cause?.category) && item.cause.detail, 'Invalid cause');
    check(['confirmed', 'suspected', 'unknown'].includes(item.cause.certainty), 'Invalid cause certainty');
    check(['initial', 'followup', 'unknown'].includes(item.publication_kind), 'Invalid publication kind');
    check(['official', 'secondary'].includes(item.verification), 'Invalid verification');
    check(Array.isArray(item.data_types), 'Invalid data types');
    check(Array.isArray(item.impact) && item.impact.length > 0, 'Impact missing');
    for (const impact of item.impact) {
      check(impact.count === null || (Number.isSafeInteger(impact.count) && impact.count >= 0), 'Invalid count');
      check(Object.hasOwn(unitLabels, impact.unit) && Object.hasOwn(qualifierLabels, impact.qualifier), 'Invalid impact unit or qualifier');
      check((impact.count === null) === (impact.qualifier === 'unknown'), 'Unknown count must be null');
      check(Boolean(impact.description), 'Impact description missing');
    }
    check(Array.isArray(item.sources) && item.sources.length > 0, 'Source required');
    for (const source of item.sources) {
      check(['official', 'news', 'reference'].includes(source.type), 'Invalid source type');
      check(/^https?:\/\//.test(source.url) && Boolean(source.title), 'Invalid source URL or title');
      check(validDate(source.published_on) && validDate(source.checked_on) && source.published_on <= source.checked_on && source.checked_on <= meta.as_of, 'Invalid source dates');
    }
    if (Object.hasOwn(item, 'vendors')) {
      check(Array.isArray(item.vendors), 'Invalid vendors');
      const seenVendors = new Set();
      for (const vendor of item.vendors) {
        check(vendor && typeof vendor.name === 'string' && vendor.name.trim() &&
          typeof vendor.detail === 'string' && vendor.detail.trim(), 'Invalid vendor text');
        check(Object.hasOwn(vendorRoleLabels, vendor.role), 'Invalid vendor role');
        check(Number.isInteger(vendor.source_index) && vendor.source_index >= 0 &&
          Boolean(item.sources[vendor.source_index]), 'Invalid vendor source');
        const key = JSON.stringify([vendor.name, vendor.role]);
        check(!seenVendors.has(key), 'Duplicate vendor role');
        seenVendors.add(key);
      }
    }
    if (Object.hasOwn(item, 'vendor_research')) {
      const research = item.vendor_research;
      check(research && validDate(research.checked_on) && research.checked_on >= item.published_on &&
        research.checked_on <= item.updated_on, 'Invalid vendor research date');
      check(Object.hasOwn(vendorResearchLabels, research.result) &&
        typeof research.note === 'string' && research.note.trim(), 'Invalid vendor research result');
      check((research.result === 'identified') === Boolean(item.vendors?.length), 'Vendor research attribution mismatch');
      check(Array.isArray(research.source_checks) && research.source_checks.length === item.sources.length, 'Missing vendor source checks');
      const checkedSources = new Set();
      for (const entry of research.source_checks) {
        check(entry && Number.isInteger(entry.source_index) && entry.source_index >= 0 &&
          item.sources[entry.source_index] && !checkedSources.has(entry.source_index) &&
          ['reviewed', 'partial', 'unavailable'].includes(entry.status), 'Invalid vendor source check');
        checkedSources.add(entry.source_index);
      }
      check((research.result === 'unavailable') === research.source_checks.every(c => c.status === 'unavailable'), 'Vendor source availability mismatch');
      for (const vendor of item.vendors || []) {
        check(research.source_checks.some(c => c.source_index === vendor.source_index && c.status !== 'unavailable'), 'Vendor evidence unavailable');
      }
    }
    check(item.verification !== 'official' || item.sources.some(s => s.type === 'official'), 'Official verification needs official source');
    for (const update of item.updates) check(validDate(update.date) && update.date >= item.published_on && update.date <= meta.as_of && item.sources[update.source_index] && update.summary, 'Invalid update');
  }
  return items;
}
export async function loadData() {
  const meta = JSON.parse(await readFile(`${root}data/meta.json`, 'utf8'));
  const files = (await readdir(`${root}data/incidents`)).filter(f => f.endsWith('.json')).sort();
  const incidents = await Promise.all(files.map(async file => {
    const item = JSON.parse(await readFile(`${root}data/incidents/${file}`, 'utf8'));
    if (file !== `${item.id}.json`) throw new Error(`Filename mismatch: ${file}`);
    return item;
  }));
  validate(incidents, meta);
  return { meta, incidents: incidents.sort((a, b) => b.published_on.localeCompare(a.published_on) || a.id.localeCompare(b.id)) };
}
export function validateCandidates(candidates, incidents, meta) {
  const ids = new Set(incidents.map(item => item.id));
  if (!Array.isArray(candidates)) throw new Error('Candidates must be an array');
  for (const candidate of candidates) {
    if (!/^[a-z0-9-]+$/.test(candidate.id) || ids.has(candidate.id)) throw new Error(`Duplicate or invalid candidate: ${candidate.id}`);
    ids.add(candidate.id);
    if (!validDate(candidate.reported_on) || candidate.reported_on < meta.coverage_start || candidate.reported_on > meta.as_of) throw new Error(`Invalid candidate date: ${candidate.id}`);
    if (candidate.verification !== 'pending' || !candidate.organization || !candidate.note || !/^https?:\/\//.test(candidate.reference_url)) throw new Error(`Invalid candidate: ${candidate.id}`);
  }
}
export function validateReviewLog(reviews, candidates, incidents, meta) {
  if (!Array.isArray(reviews)) throw new Error('Review log must be an array');
  const seen = new Set();
  const pending = new Set(candidates.map(item => item.id));
  const published = new Set(incidents.map(item => item.id));
  for (const review of reviews) {
    const id = review.candidate?.id;
    if (!id || seen.has(id) || pending.has(id)) throw new Error(`Duplicate or still pending review: ${id}`);
    seen.add(id);
    if (!validDate(review.reviewed_on) || review.reviewed_on > meta.as_of || !review.reason) throw new Error(`Invalid review: ${id}`);
    if (review.resolution !== 'published' || !review.incident_ids?.length || review.incident_ids.some(id => !published.has(id))) throw new Error(`Missing reviewed incident: ${id}`);
    if (!review.source_urls?.length || review.source_urls.some(url => !/^https?:\/\//.test(url))) throw new Error(`Missing review sources: ${id}`);
  }
}
if (process.argv[1] === fileURLToPath(import.meta.url)) console.log(`Validated ${(await loadData()).incidents.length} incidents.`);
