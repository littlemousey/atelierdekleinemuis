export interface Project {
  kicker: string;
  title: string;
  repo: string;
  description: string;
  tags: string[];
  demo?: string;
  /** Screenshot in /public/img/projects; omitted where none exists yet. */
  image?: string;
}

const GH = 'https://github.com/';

export const PROJECTS: Project[] = [
  {
    kicker: 'Kaart · Verhalen',
    title: 'Mijn reisherinneringen',
    repo: 'littlemousey/travels',
    description:
      'Een interactieve kaart met mijn reizen van 1991 tot 2026: verhalen naast een kaart die meevliegt, een 3D-globe met alle locaties, en een overzicht per decennium.',
    tags: ['React', 'TypeScript', 'MapLibre', 'Vite'],
    demo: 'https://littlemousey.github.io/travels/',
    image: '/img/projects/travels.png',
  },
  {
    kicker: 'Galerij · Muizen',
    title: 'Pet Mice Gallery',
    repo: 'littlemousey/petmice-remix',
    description:
      'De liefste muizen van r/PetMice in een galerij met vijf thema’s — regenboog, kerst, sterrennacht, blauwe lucht en hartjes — je voorkeur wordt onthouden.',
    tags: ['React 19', 'TypeScript', 'Tailwind', 'Vite'],
    demo: 'https://littlemousey.github.io/petmice-remix/',
    image: '/img/projects/petmice.png',
  },
  {
    kicker: 'Vanilla · API',
    title: 'Pokédex',
    repo: 'littlemousey/pokedex',
    description:
      'Een pokédex zonder framework: gewoon HTML, CSS en JavaScript, met een detailpagina per pokémon.',
    tags: ['JavaScript', 'CSS', 'HTML'],
    image: '/img/projects/pokedex.png',
  },
  {
    kicker: 'Feest · Collectie',
    title: 'Fortune cookie app',
    repo: 'littlemousey/fortunecookie',
    description:
      'Vier het Chinees nieuwjaar door gelukskoekjesboodschappen te verzamelen. Met geluidjes en illustraties.',
    tags: ['JavaScript', 'CSS', 'API'],
  },
  {
    kicker: 'PWA · Giphy',
    title: 'Pikachu Giphy',
    repo: 'littlemousey/pikachuGiphy',
    description:
      'Swipe door Pikachu-gifjes via de Giphy-API. Werkt offline als progressive web app.',
    tags: ['JavaScript', 'Giphy API', 'PWA'],
  },
  {
    kicker: 'Website',
    title: 'Deze site',
    repo: 'littlemousey/atelierdekleinemuis',
    description:
      'Het atelier zelf: alle verhalen gratis te lezen, de wall of fame en de projecten.',
    tags: ['Astro', 'TypeScript'],
  },
];

export const repoUrl = (repo: string) => `${GH}${repo}`;
