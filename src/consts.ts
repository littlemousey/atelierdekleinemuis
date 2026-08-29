export const SITE_TITLE = 'Atelier de kleine muis';
export const SITE_DESCRIPTION =
  'Muizenverhalen en creaties van A.N.S. de Nijs. Een levend boek met korte verhalen over muizen, mollen en koolmezen — gratis online te lezen.';
export const AUTHOR = 'A.N.S. de Nijs';
export const LOCALE = 'nl_NL';
export const LANG = 'nl';
export const DEFAULT_OG_IMAGE = '/img/cover.PNG';

export const NAV_LINKS = [
  // Rendered as a house icon; the label stays as its accessible name.
  { label: 'Startpagina', href: '/', icon: 'home' },
  { label: 'Verhalen', href: '/verhalen/' },
  { label: 'Atelier', href: '/atelier/' },
  { label: 'Projecten', href: '/projecten/' },
  { label: 'Wall of fame', href: '/wall-of-fame/' },
  { label: 'Over de auteur', href: '/over-de-auteur/' },
] as const;
