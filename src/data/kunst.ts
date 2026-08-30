import type { ImageMetadata } from 'astro';

import happyKingsday from '../assets/kunst/happy-kingsday.png';
import merle from '../assets/kunst/merle-de-magische-muis.jpg';
import merryChristmouse from '../assets/kunst/merry-christmouse.png';
import miceStories from '../assets/kunst/mice-stories.png';
import mouseAvatar from '../assets/kunst/mouse-avatar.png';
import mousePenguin from '../assets/kunst/mouse-penguin-christmas.png';
import mouse from '../assets/kunst/mouse.png';
import saveTheMice from '../assets/kunst/save-the-mice.png';
import thankYou from '../assets/kunst/thank-you-mouse.jpg';

export interface Collection {
  id: string;
  label: string;
}

export interface Artwork {
  id: string;
  title: string;
  /** Which rail group the drawing belongs to. */
  collection: Collection['id'];
  medium: string;
  /** Year of making. Left empty where the drawing carries no date — the meta
   *  line drops it and the year simply does not appear in the rail. */
  year: string;
  /** Describes the drawing itself: it is the artwork, not decoration. */
  alt: string;
  src: ImageMetadata;
}

export const COLLECTIONS: Collection[] = [
  { id: 'logos', label: 'Logo’s' },
  { id: 'wenskaarten', label: 'Wenskaarten' },
  { id: 'tekeningen', label: 'Tekeningen' },
];

export const ARTWORKS: Artwork[] = [
  {
    id: 'muis-tussen-de-sterren',
    title: 'Muis tussen de sterren',
    collection: 'logos',
    medium: 'digitaal',
    year: '',
    alt: 'Zwart silhouet van een rechtop zittende muis in een cirkel vol sterren, op een wolk van roze en paarse waterverf.',
    src: mouseAvatar,
  },
  {
    id: 'mice-stories',
    title: 'Mice stories',
    collection: 'logos',
    medium: 'digitaal',
    year: '',
    alt: 'Grijze muis die een opengeslagen rood boek leest met de titel “Mice stories”, in een gele cirkel op zwart.',
    src: miceStories,
  },
  {
    id: 'save-the-mice',
    title: 'Save the mice',
    collection: 'logos',
    medium: 'digitaal',
    year: '',
    alt: 'Een open hand met daarin een klein grijs muisje, op een lichtblauwe cirkel met de tekst “Save the mice”.',
    src: saveTheMice,
  },
  {
    id: 'thank-you-all',
    title: 'Thank you all',
    collection: 'wenskaarten',
    medium: 'digitaal',
    year: '',
    alt: 'Donkergrijze muis met gesloten ogen en een rood hartje bij haar snuit, voor een achtergrond van gekleurde vlakken, met de tekst “Thank you all”.',
    src: thankYou,
  },
  {
    id: 'happy-kingsday',
    title: 'Happy King’s day',
    collection: 'wenskaarten',
    medium: 'digitaal',
    year: '',
    alt: 'Muis met een gouden kroon en een Nederlands vlaggetje, tussen dwarrelende confetti, met de tekst “Happy King’s day”.',
    src: happyKingsday,
  },
  {
    id: 'merry-christmouse',
    title: 'Merry Christmouse',
    collection: 'wenskaarten',
    medium: 'digitaal',
    year: '2023',
    alt: 'Muis met kerstmuts in een dennenkrans met hulst, een rode strik, gele kerstballen en een rood hart.',
    src: merryChristmouse,
  },
  {
    id: 'merry-christmas',
    title: 'Merry Christmas',
    collection: 'wenskaarten',
    medium: 'digitaal',
    year: '2024',
    alt: 'Pinguïn met kerstmuts en een muis bij een lantaarn op een boomstronk, binnen een kerstkrans met ballen en een rode strik.',
    src: mousePenguin,
  },
  {
    id: 'merle-de-magische-muis',
    title: 'Merle, de magische muis',
    collection: 'tekeningen',
    medium: 'digitaal',
    year: '',
    alt: 'Grijze muis op haar achterpoten met een paarse tovenaarshoed met een gouden ster erop.',
    src: merle,
  },
  {
    id: 'muis',
    title: 'Muis',
    collection: 'tekeningen',
    medium: 'digitaal',
    year: '2023',
    alt: 'Bruine muis van opzij, met grote roze oren, snorharen en een lange staart, op een zandkleurige achtergrond.',
    src: mouse,
  },
];

/** Rail groups in COLLECTIONS order, with the works that belong to them. */
export const ARTWORKS_BY_COLLECTION = COLLECTIONS.map((collection) => ({
  collection,
  artworks: ARTWORKS.filter((a) => a.collection === collection.id),
}));

/** The years actually present, newest first. Undated works add nothing here,
 *  so the year rail grows on its own as dates are filled in. */
export const ART_YEARS = [...new Set(ARTWORKS.map((a) => a.year).filter(Boolean))].sort().reverse();
