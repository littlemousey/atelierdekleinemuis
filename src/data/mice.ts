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
  /** Life period. Left empty until the real months/years are known — the
   *  period line simply does not render while these are blank. */
  from: string;
  to: string;
}

export const ERAS: Era[] = [
  { id: 'rock', label: 'Rocksterren', note: 'De eerste drie, vernoemd naar vrouwelijke rocksterren.' },
  { id: 'game', label: 'Game-heldinnen', note: 'Vernoemd naar vrouwelijke hoofdpersonen uit videogames.' },
  { id: 'flower', label: 'Bloemen', note: 'De bloemetjes in mijn leven' },
  { id: 'pokemon', label: 'Pokémon personages', note: 'Jenny en Joy — en Jenny’s onverwachte nest: Erika, Sabrina, Misty en Clair.' },
  { id: 'at', label: 'Adventure Time-prinsessen', note: 'Vernoemd naar de prinsessen uit Adventure Time.' },
];

const FALLBACK = collage('fallback.jpg');

export const MICE: Mouse[] = [
  { id: 'haley',   name: 'Haley',   era: 'rock',    exLab: true,  epithet: 'lief en dapper',                                  img: avatar('haley.jpg'),   collage: collage('haley.jpg'),            from: '', to: '' },
  { id: 'lizzy',   name: 'Lizzy',   era: 'rock',    exLab: true,  epithet: 'grote en sterke zus',                             img: avatar('lizzy.jpg'),   collage: collage('lizzy.jpg'),            from: '', to: '' },
  { id: 'amy',     name: 'Amy',     era: 'rock',    exLab: true,  epithet: 'klein, loyaal en sterk tot het eind',             img: avatar('amy.jpg'),     collage: collage('amy.jpg'),              from: '', to: '' },

  { id: 'aloy',    name: 'Aloy',    era: 'game',    exLab: true,  epithet: 'stoer en nieuwsgierig',                           img: avatar('aloy.jpg'),    collage: collage('aloy-chell-lara.jpg'),  from: '', to: '' },
  { id: 'lara',    name: 'Lara',    era: 'game',    exLab: true,  epithet: 'voorzichtig en ondeugend',                        img: avatar('lara.jpg'),    collage: collage('aloy-chell-lara.jpg'),  from: '', to: '' },
  { id: 'chell',   name: 'Chell',   era: 'game',    exLab: true,  epithet: 'energiek en uitdagend',                           img: avatar('chell.jpg'),   collage: collage('aloy-chell-lara.jpg'),  from: '', to: '' },

  { id: 'poppy',   name: 'Poppy',   era: 'flower',  exLab: true,  epithet: 'kleine free runner, ronddraaiende circustante',   img: avatar('poppy.jpg'),   collage: collage('poppy.jpg'),            from: '', to: '' },
  { id: 'lily',    name: 'Lily',    era: 'flower',  exLab: true,  epithet: 'zorgzaam maatje',                                 img: avatar('lily.jpg'),    collage: collage('lily.jpg'),             from: '', to: '' },
  { id: 'daisy',   name: 'Daisy',   era: 'flower',  exLab: true,  epithet: 'sterke alfa, stevige tante met flair',            img: avatar('daisy.jpg'),   collage: collage('daisy.jpg'),            from: '', to: '' },

  { id: 'jenny',   name: 'Jenny',   era: 'pokemon', exLab: false, epithet: 'lieve, toegewijde en zorgzame moeder',            img: avatar('jenny.jpg'),   collage: collage('jenny.jpg'),            from: '', to: '' },
  { id: 'joy',     name: 'Joy',     era: 'pokemon', exLab: false, epithet: 'tante knorrepot, zonnetje in huis',               img: avatar('joy.jpg'),     collage: collage('joy.jpg'),              from: '', to: '' },
  { id: 'erika',   name: 'Erika',   era: 'pokemon', exLab: false, epithet: 'verlegen muis · dochter van Jenny',               img: avatar('erika.jpg'),   collage: collage('erika.jpg'),                             from: '', to: '' },
  { id: 'sabrina', name: 'Sabrina', era: 'pokemon', exLab: false, epithet: 'wil graag stoer zijn · dochter van Jenny',        img: avatar('sabrina.jpg'), collage: collage('sabrina.jpg'),                             from: '', to: '' },
  { id: 'misty',   name: 'Misty',   era: 'pokemon', exLab: false, epithet: 'alleen wanneer het haar uitkomt · dochter van Jenny', img: avatar('misty.jpg'), collage: collage('misty.jpg'),                          from: '', to: '' },
  { id: 'clair',   name: 'Clair',   era: 'pokemon', exLab: false, epithet: 'voorzichtige onderzoeker · dochter van Jenny',    img: avatar('clair.jpg'),   collage: collage('clair.jpg'),                             from: '', to: '' },

  { id: 'marcy',   name: 'Marcy',   era: 'at',      exLab: true, epithet: 'kleine avonturier',                               img: avatar('marcy.jpg'),   collage: collage('marcy.jpg'),                             from: '', to: '' },
  { id: 'phoebe',  name: 'Phoebe',  era: 'at',      exLab: true, epithet: 'levensgenieter',                                  img: avatar('phoebe.jpg'),  collage: collage('phoebe.jpg'),                             from: '', to: '' },
  { id: 'bonnie',  name: 'Bonnie',  era: 'at',      exLab: true, epithet: 'kieskeurige bedelaar voor snacks',                img: avatar('bonnie.jpg'),  collage: FALLBACK,                             from: '', to: '' },
];

/** Mice grouped by era, in era order. */
export const MICE_BY_ERA = ERAS.map((era) => ({
  era,
  mice: MICE.filter((m) => m.era === era.id),
}));
