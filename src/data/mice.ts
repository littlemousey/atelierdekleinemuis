export interface Mouse {
  name: string;
  /** Ex-laboratory mouse. Rendered with a text label so it is not emoji-only. */
  exLab: boolean;
  imgUrl: string;
  traits: string;
  collageImgUrl: string;
}

export const MICE: Mouse[] = [
  { name: 'Haley',   exLab: true,  imgUrl: '/img/avatars/haley.jpg',   traits: 'lief en dapper',                                   collageImgUrl: '/img/collages/haley.jpg' },
  { name: 'Lizzy',   exLab: true,  imgUrl: '/img/avatars/lizzy.jpg',   traits: 'grote en sterke zus',                              collageImgUrl: '/img/collages/lizzy.jpg' },
  { name: 'Amy',     exLab: true,  imgUrl: '/img/avatars/amy.jpg',     traits: 'klein, loyaal en sterk tot het bittere eind',      collageImgUrl: '/img/collages/amy.jpg' },
  { name: 'Aloy',    exLab: true,  imgUrl: '/img/avatars/aloy.jpg',    traits: 'stoer en nieuwsgierig',                            collageImgUrl: '/img/collages/aloy-chell-lara.jpg' },
  { name: 'Lara',    exLab: true,  imgUrl: '/img/avatars/lara.jpg',    traits: 'voorzichtig en ondeugend',                         collageImgUrl: '/img/collages/aloy-chell-lara.jpg' },
  { name: 'Chell',   exLab: true,  imgUrl: '/img/avatars/chell.jpg',   traits: 'energiek en uitdagend',                            collageImgUrl: '/img/collages/aloy-chell-lara.jpg' },
  { name: 'Lily',    exLab: true,  imgUrl: '/img/avatars/lily.jpg',    traits: 'zorgzaam maatje',                                  collageImgUrl: '/img/collages/lily.jpg' },
  { name: 'Daisy',   exLab: true,  imgUrl: '/img/avatars/daisy.jpg',   traits: 'sterke alfa, stevige tante met flair',             collageImgUrl: '/img/collages/daisy.jpg' },
  { name: 'Poppy',   exLab: true,  imgUrl: '/img/avatars/poppy.jpg',   traits: 'kleine free runner, ronddraaiende circus tante',   collageImgUrl: '/img/collages/poppy.jpg' },
  { name: 'Jenny',   exLab: false, imgUrl: '/img/avatars/jenny.jpg',   traits: 'lieve, toegewijde en zorgzame moeder',             collageImgUrl: '/img/collages/jenny.jpg' },
  { name: 'Joy',     exLab: false, imgUrl: '/img/avatars/joy.jpg',     traits: 'tante knorrepot, zonnetje in huis en kleine snurker', collageImgUrl: '/img/collages/joy.jpg' },
  { name: 'Clair',   exLab: false, imgUrl: '/img/avatars/clair.jpg',   traits: 'voorzichtige onderzoeker. Dochter van Jenny',      collageImgUrl: '/img/collages/fallback.jpg' },
  { name: 'Misty',   exLab: false, imgUrl: '/img/avatars/misty.jpg',   traits: 'alleen wanneer het haar uitkomt. Dochter van Jenny', collageImgUrl: '/img/collages/fallback.jpg' },
  { name: 'Erika',   exLab: false, imgUrl: '/img/avatars/erika.jpg',   traits: 'verlegen muis. Dochter van Jenny',                 collageImgUrl: '/img/collages/fallback.jpg' },
  { name: 'Sabrina', exLab: false, imgUrl: '/img/avatars/sabrina.jpg', traits: 'wil graag stoer zijn, maar is ook weer zo weg. Dochter van Jenny', collageImgUrl: '/img/collages/fallback.jpg' },
];
