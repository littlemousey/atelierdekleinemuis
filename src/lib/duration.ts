/** Dutch duration formatting, plus ISO 8601 for schema.org. */

const UUR = 60;

/** "5 minuten", "8 uur", "1 uur 30 minuten" */
export function formatMinutes(min: number): string {
  const h = Math.floor(min / UUR);
  const m = min % UUR;
  const parts: string[] = [];
  if (h) parts.push(h === 1 ? '1 uur' : `${h} uur`);
  if (m) parts.push(m === 1 ? '1 minuut' : `${m} minuten`);
  return parts.join(' ') || '0 minuten';
}

/** Compact form for lists: "5 min", "8 u", "1 u 30" */
export function shortMinutes(min: number): string {
  const h = Math.floor(min / UUR);
  const m = min % UUR;
  if (!h) return `${m} min`;
  return m ? `${h} u ${m}` : `${h} u`;
}

/** ISO 8601 duration, e.g. 485 -> "PT8H5M". schema.org wants this shape. */
export function isoDuration(min: number): string {
  const h = Math.floor(min / UUR);
  const m = min % UUR;
  return `PT${h ? `${h}H` : ''}${m || !h ? `${m}M` : ''}`;
}
