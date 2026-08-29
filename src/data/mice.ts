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
  imgUrl: string;
  /** Collage page; falls back to the shared fallback collage. */
  collageImgUrl: string;
  /** Life period. Left empty until the real months/years are known — the
   *  period line simply does not render while these are blank. */
  from: string;
  to: string;
}

export const ERAS: Era[] = [
  { id: 'rock', label: 'Rocksterren', note: 'De eerste drie, vernoemd naar vrouwelijke rocksterren.' },
  { id: 'game', label: 'Game-heldinnen', note: 'Vernoemd naar vrouwelijke hoofdpersonen uit videogames.' },
  { id: 'flower', label: 'Bloemen', note: 'Het bloemennest.' },
  { id: 'pokemon', label: 'Pokémon', note: 'Jenny en Joy — en Jenny’s onverwachte nest: Erika, Sabrina, Misty en Clair.' },
  { id: 'at', label: 'Adventure Time-prinsessen', note: 'Vernoemd naar de prinsessen uit Adventure Time.' },
];

const FALLBACK = '/img/collages/fallback.jpg';

export const MICE: Mouse[] = [
  { id: 'haley',   name: 'Haley',   era: 'rock',    exLab: true,  epithet: 'lief en dapper',                                  imgUrl: '/img/avatars/haley.jpg',   collageImgUrl: '/img/collages/haley.jpg',            from: '', to: '' },
  { id: 'lizzy',   name: 'Lizzy',   era: 'rock',    exLab: true,  epithet: 'grote en sterke zus',                             imgUrl: '/img/avatars/lizzy.jpg',   collageImgUrl: '/img/collages/lizzy.jpg',            from: '', to: '' },
  { id: 'amy',     name: 'Amy',     era: 'rock',    exLab: true,  epithet: 'klein, loyaal en sterk tot het eind',             imgUrl: '/img/avatars/amy.jpg',     collageImgUrl: '/img/collages/amy.jpg',              from: '', to: '' },

  { id: 'aloy',    name: 'Aloy',    era: 'game',    exLab: true,  epithet: 'stoer en nieuwsgierig',                           imgUrl: '/img/avatars/aloy.jpg',    collageImgUrl: '/img/collages/aloy-chell-lara.jpg',  from: '', to: '' },
  { id: 'lara',    name: 'Lara',    era: 'game',    exLab: true,  epithet: 'voorzichtig en ondeugend',                        imgUrl: '/img/avatars/lara.jpg',    collageImgUrl: '/img/collages/aloy-chell-lara.jpg',  from: '', to: '' },
  { id: 'chell',   name: 'Chell',   era: 'game',    exLab: true,  epithet: 'energiek en uitdagend',                           imgUrl: '/img/avatars/chell.jpg',   collageImgUrl: '/img/collages/aloy-chell-lara.jpg',  from: '', to: '' },

  { id: 'poppy',   name: 'Poppy',   era: 'flower',  exLab: true,  epithet: 'kleine free runner, ronddraaiende circustante',   imgUrl: '/img/avatars/poppy.jpg',   collageImgUrl: '/img/collages/poppy.jpg',            from: '', to: '' },
  { id: 'lily',    name: 'Lily',    era: 'flower',  exLab: true,  epithet: 'zorgzaam maatje',                                 imgUrl: '/img/avatars/lily.jpg',    collageImgUrl: '/img/collages/lily.jpg',             from: '', to: '' },
  { id: 'daisy',   name: 'Daisy',   era: 'flower',  exLab: true,  epithet: 'sterke alfa, stevige tante met flair',            imgUrl: '/img/avatars/daisy.jpg',   collageImgUrl: '/img/collages/daisy.jpg',            from: '', to: '' },

  { id: 'jenny',   name: 'Jenny',   era: 'pokemon', exLab: false, epithet: 'lieve, toegewijde en zorgzame moeder',            imgUrl: '/img/avatars/jenny.jpg',   collageImgUrl: '/img/collages/jenny.jpg',            from: '', to: '' },
  { id: 'joy',     name: 'Joy',     era: 'pokemon', exLab: false, epithet: 'tante knorrepot, zonnetje in huis',               imgUrl: '/img/avatars/joy.jpg',     collageImgUrl: '/img/collages/joy.jpg',              from: '', to: '' },
  { id: 'erika',   name: 'Erika',   era: 'pokemon', exLab: false, epithet: 'verlegen muis · dochter van Jenny',               imgUrl: '/img/avatars/erika.jpg',   collageImgUrl: '/img/collages/erika.jpg',                             from: '', to: '' },
  { id: 'sabrina', name: 'Sabrina', era: 'pokemon', exLab: false, epithet: 'wil graag stoer zijn · dochter van Jenny',        imgUrl: '/img/avatars/sabrina.jpg', collageImgUrl: '/img/collages/sabrina.jpg',                             from: '', to: '' },
  { id: 'misty',   name: 'Misty',   era: 'pokemon', exLab: false, epithet: 'alleen wanneer het haar uitkomt · dochter van Jenny', imgUrl: '/img/avatars/misty.jpg', collageImgUrl: '/img/collages/misty.jpg',                          from: '', to: '' },
  { id: 'clair',   name: 'Clair',   era: 'pokemon', exLab: false, epithet: 'voorzichtige onderzoeker · dochter van Jenny',    imgUrl: '/img/avatars/clair.jpg',   collageImgUrl: '/img/collages/clair.jpg',                             from: '', to: '' },

  { id: 'marcy',   name: 'Marcy',   era: 'at',      exLab: true, epithet: 'kleine avonturier',                               imgUrl: '/img/avatars/marcy.jpg',   collageImgUrl: '/img/collages/marcy.jpg',                             from: '', to: '' },
  { id: 'phoebe',  name: 'Phoebe',  era: 'at',      exLab: true, epithet: 'levensgenieter',                                  imgUrl: '/img/avatars/phoebe.jpg',  collageImgUrl: '/img/collages/phoebe.jpg',                             from: '', to: '' },
  { id: 'bonnie',  name: 'Bonnie',  era: 'at',      exLab: true, epithet: 'kieskeurige bedelaar voor snacks',                imgUrl: '/img/avatars/bonnie.jpg',  collageImgUrl: FALLBACK,                             from: '', to: '' },
];

/** Mice grouped by era, in era order. */
export const MICE_BY_ERA = ERAS.map((era) => ({
  era,
  mice: MICE.filter((m) => m.era === era.id),
}));
