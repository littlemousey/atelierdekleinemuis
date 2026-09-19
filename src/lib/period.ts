/** Dutch formatting for a mouse's life period. Dates come in as 'YYYY-MM' or
 *  'YYYY-MM-DD'; most are only known to the month. */

const MAANDEN = [
  'januari', 'februari', 'maart', 'april', 'mei', 'juni',
  'juli', 'augustus', 'september', 'oktober', 'november', 'december',
];

function parts(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m) throw new Error(`period.ts: ongeldige datum "${iso}"`);
  return { y, m, d };
}

/** "juni 2024", or "11 oktober 2023" when the day is known. */
export function formatDate(iso: string): string {
  const { y, m, d } = parts(iso);
  return `${d ? `${d} ` : ''}${MAANDEN[m - 1]} ${y}`;
}

/** Compact form for the wall: "jun 2024". The day is left out on purpose. */
export function shortDate(iso: string): string {
  const { y, m } = parts(iso);
  return `${MAANDEN[m - 1].slice(0, 3)} ${y}`;
}
