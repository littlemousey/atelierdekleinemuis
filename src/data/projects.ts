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
    kicker: 'Catalogus · Pokémon',
    title: 'Pokédex',
    repo: 'littlemousey/pokedex',
    description:
      'Een pokédex zonder framework: gewoon HTML, CSS en JavaScript, met een detailpagina per pokémon.',
    tags: ['JavaScript', 'CSS', 'HTML'],
    image: '/img/projects/pokedex.png',
  },
  {
    kicker: 'Horoscoop · Festival',
    title: 'Fortune cookie app',
    repo: 'littlemousey/fortunecookie',
    description:
      'Vier het Chinees nieuwjaar door gelukskoekjesboodschappen te verzamelen. Met geluidjes en illustraties.',
    tags: ['JavaScript', 'CSS', 'API'],
    image: '/img/projects/fortune-cookie.png',
  },
  {
    kicker: 'Gifjes · Giphy',
    title: 'Pikachu Giphy',
    repo: 'littlemousey/pikachuGiphy',
    description:
      'Swipe door Pikachu-gifjes via de Giphy-API. Werkt offline als progressive web app.',
    tags: ['JavaScript', 'Giphy API', 'PWA'],
    image: '/img/projects/pikachu-giphy.png',
  },
  {
    kicker: 'VR · Experience',
    title: 'VR escape',
    repo: 'littlemousey/WorldOfAFrame',
    description:
      'Een klein WebVR-project: je komt aan in een kamer die in de ruimte zweeft, kiest een van de vier deuropeningen en stapt de wereld erachter binnen.',
    tags: ['A-Frame', 'HTML', 'JavaScript'],
    demo: 'https://littlemousey.github.io/WorldOfAFrame/',
    image: '/img/projects/worldofaframe.png',
  },
  {
    kicker: 'Portfolio · Ervaringen',
    title: 'Mijn portfolio',
    repo: 'littlemousey/littlemousey.github.io',
    description:
      'Mijn persoonlijke portfolio. Werkervaringen, opleidingen, vaardigheden, bezochte conferenties en artikelen van of over mij.',
    tags: ['Astro', 'React 19', 'Tailwind', 'Framer Motion'],
    demo: 'https://littlemousey.github.io/',
    image: '/img/projects/portfolio.png',
  },
  {
    kicker: 'Interactive fiction · Verhaal',
    title: 'Avondgloren',
    repo: 'littlemousey/avondgloren-IF',
    description:
      'Een Nederlandstalig keuzespel: je erft de winkel van je oma tussen de wortels van een oude eik. Vijf herfstdagen lang zet je thee, luister je naar bezoekers en bepalen je keuzes het einde.',
    tags: ['JavaScript', 'HTML', 'CSS', 'Interactive fiction'],
    image: '/img/projects/avondgloren.png',
  },
  {
    kicker: 'Atelier · Verhalen',
    title: 'Code van deze site',
    repo: 'littlemousey/atelierdekleinemuis',
    description:
      'Broncode van deze website',
    tags: ['Astro', 'TypeScript'],
    image: '/img/projects/atelierdekleinemuis.png',
  },
];

export const repoUrl = (repo: string) => `${GH}${repo}`;
