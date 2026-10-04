import type { ImageMetadata } from 'astro';

/* Thirty-four portraits and collages, all named after the mouse. Listing them
   as thirty-four import lines would bury the table below, so they come in as a
   glob — eager, so each one is a real build-time asset exactly like a written
   import, not a runtime fetch. `avatar()`/`collage()` fail loudly at build time
   if a name has no file, which a plain lookup would not. */
const AVATARS = import.meta.glob<{ default: ImageMetadata }>('../assets/avatars/*.jpg', { eager: true });
const COLLAGES = import.meta.glob<{ default: ImageMetadata }>('../assets/collages/*.jpg', { eager: true });

const pick = (
  set: Record<string, { default: ImageMetadata }>,
  dir: string,
  file: string,
): ImageMetadata => {
  const hit = set[`../assets/${dir}/${file}`];
  if (!hit) throw new Error(`mice.ts: geen afbeelding ../assets/${dir}/${file}`);
  return hit.default;
};

const avatar = (file: string) => pick(AVATARS, 'avatars', file);
const collage = (file: string) => pick(COLLAGES, 'collages', file);

export interface Era {
  id: string;
  label: string;
  note: string;
}

export interface Mouse {
  id: string;
  name: string;
  era: Era['id'];
  /** Ex-laboratory mouse, adopted from a lab. */
  exLab: boolean;
  /** Short characterisation. Empty for the mice not yet described. */
  epithet: string;
  /** Portrait, resolved through the asset pipeline. */
  img: ImageMetadata;
  /** Collage page; falls back to the shared fallback collage. */
  collage: ImageMetadata;
  /** Life period as ISO dates: 'YYYY-MM', or 'YYYY-MM-DD' where the exact day
   *  is known. Formatted in Dutch by `lib/period.ts`. The tribute text itself
   *  lives in `content/muizen/<id>.md`. */
  from: string;
  to: string;
}

export const ERAS: Era[] = [
  { id: 'rock', label: 'Rocksterren', note: 'De eerste drie, vernoemd naar vrouwelijke rocksterren.' },
  { id: 'game', label: 'Game-heldinnen', note: 'Vernoemd naar vrouwelijke hoofdpersonen uit videogames.' },
  { id: 'flower', label: 'Bloemen', note: 'De bloemetjes in mijn leven' },
  { id: 'pokemon', label: 'Pokémon personages', note: 'Vrouwelijke personages uit de Pokémon serie. Het begon met Jenny en Joy en vervolgens Jenny’s onverwachte nest met Erika, Sabrina, Misty en Clair.' },
  { id: 'at', label: 'Adventure Time-prinsessen', note: 'Vernoemd naar de prinsessen uit Adventure Time.' },
];

// const FALLBACK = collage('fallback.jpg');

export const MICE: Mouse[] = [
  { id: 'haley',   name: 'Haley',   era: 'rock',    exLab: true,  epithet: 'lief en dapper',                                  img: avatar('haley.jpg'),   collage: collage('haley.jpg'), from: '2020-02', to: '2020-12' },
  { id: 'lizzy',   name: 'Lizzy',   era: 'rock',    exLab: true,  epithet: 'grote en sterke zus',                             img: avatar('lizzy.jpg'),   collage: collage('lizzy.jpg'), from: '2020-02', to: '2021-08' },
  { id: 'amy',     name: 'Amy',     era: 'rock',    exLab: true,  epithet: 'klein, loyaal en sterk tot het eind',             img: avatar('amy.jpg'),     collage: collage('amy.jpg'), from: '2020-02', to: '2021-07' },

  { id: 'aloy',    name: 'Aloy',    era: 'game',    exLab: true,  epithet: 'stoer en nieuwsgierig',                           img: avatar('aloy.jpg'),    collage: collage('aloy-chell-lara.jpg'), from: '2021-02', to: '2022-06' },
  { id: 'lara',    name: 'Lara',    era: 'game',    exLab: true,  epithet: 'voorzichtig en ondeugend',                        img: avatar('lara.jpg'),    collage: collage('aloy-chell-lara.jpg'), from: '2021-02', to: '2022-08' },
  { id: 'chell',   name: 'Chell',   era: 'game',    exLab: true,  epithet: 'energiek en uitdagend',                           img: avatar('chell.jpg'),   collage: collage('aloy-chell-lara.jpg'), from: '2021-02', to: '2022-11' },

  { id: 'poppy',   name: 'Poppy',   era: 'flower',  exLab: true,  epithet: 'kleine free runner, ronddraaiende circustante',   img: avatar('poppy.jpg'),   collage: collage('poppy.jpg'), from: '2021-08', to: '2023-10-11' },
  { id: 'lily',    name: 'Lily',    era: 'flower',  exLab: true,  epithet: 'zorgzaam maatje',                                 img: avatar('lily.jpg'),    collage: collage('lily.jpg'), from: '2021-08', to: '2022-12-23' },
  { id: 'daisy',   name: 'Daisy',   era: 'flower',  exLab: true,  epithet: 'sterke alfa, stevige tante met flair',            img: avatar('daisy.jpg'),   collage: collage('daisy.jpg'), from: '2021-08', to: '2023-09-26' },

  { id: 'jenny',   name: 'Jenny',   era: 'pokemon', exLab: false, epithet: 'lieve, toegewijde en zorgzame moeder',            img: avatar('jenny.jpg'),   collage: collage('jenny.jpg'), from: '2021-12', to: '2023-02' },
  { id: 'joy',     name: 'Joy',     era: 'pokemon', exLab: false, epithet: 'tante knorrepot, zonnetje in huis',               img: avatar('joy.jpg'),     collage: collage('joy.jpg'), from: '2021-12', to: '2024-03' },
  { id: 'erika',   name: 'Erika',   era: 'pokemon', exLab: false, epithet: 'verlegen muis · dochter van Jenny',               img: avatar('erika.jpg'),   collage: collage('erika.jpg'), from: '2023-01', to: '2024-05' },
  { id: 'sabrina', name: 'Sabrina', era: 'pokemon', exLab: false, epithet: 'wil graag stoer zijn · dochter van Jenny',        img: avatar('sabrina.jpg'), collage: collage('sabrina.jpg'), from: '2023-01', to: '2025-03' },
  { id: 'misty',   name: 'Misty',   era: 'pokemon', exLab: false, epithet: 'alleen wanneer het haar uitkomt · dochter van Jenny', img: avatar('misty.jpg'), collage: collage('misty.jpg'), from: '2023-01', to: '2024-10' },
  { id: 'clair',   name: 'Clair',   era: 'pokemon', exLab: false, epithet: 'voorzichtige onderzoeker · dochter van Jenny',    img: avatar('clair.jpg'),   collage: collage('clair.jpg'), from: '2023-01', to: '2025-02' },

  { id: 'marcy',   name: 'Marcy',   era: 'at',      exLab: true, epithet: 'kleine avonturier',                               img: avatar('marcy.jpg'),   collage: collage('marcy.jpg'), from: '2024-06', to: '2026-05' },
  { id: 'phoebe',  name: 'Phoebe',  era: 'at',      exLab: true, epithet: 'levensgenieter',                                  img: avatar('phoebe.jpg'),  collage: collage('phoebe.jpg'), from: '2024-06', to: '2026-08' },
  { id: 'bonnie',  name: 'Bonnie',  era: 'at',      exLab: true, epithet: 'kieskeurige bedelaar voor snacks',                img: avatar('bonnie.jpg'),  collage: collage('bonnie.jpg'), from: '2024-06', to: '2026-09' },
];

/** Mice grouped by era, in era order. */
export const MICE_BY_ERA = ERAS.map((era) => ({
  era,
  mice: MICE.filter((m) => m.era === era.id),
}));
