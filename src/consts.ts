import cover from './assets/kunst/cover.png';

export const SITE_TITLE = 'Atelier de kleine muis';
export const SITE_DESCRIPTION =
  'Muizenverhalen en creaties van A.N.S. de Nijs. Een levend boek met korte verhalen over muizen en andere dieren — gratis online te lezen.';
export const AUTHOR = 'A.N.S. de Nijs';
export const LOCALE = 'nl_NL';
export const LANG = 'nl';
// The book cover doubles as the gallery's `verhalen-van-de-muis` plate, so it
// lives with the other artwork and goes through the asset pipeline: one file,
// one hashed URL, cacheable forever.
export const DEFAULT_OG_IMAGE = cover.src;

export const NAV_LINKS = [
  // Rendered as a house icon; the label stays as its accessible name.
  { label: 'Startpagina', href: '/', icon: 'home' },
  { label: 'Verhalen', href: '/verhalen/' },
  { label: 'Atelier', href: '/atelier/' },
  { label: 'Projecten', href: '/projecten/' },
  { label: 'Wall of fame', href: '/wall-of-fame/' },
  { label: 'Over de auteur', href: '/over-de-auteur/' },
] as const;
