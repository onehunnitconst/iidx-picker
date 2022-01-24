import fs from 'fs';
import charts from './data.json';

export interface Attributes {
  id: number;
  version: string;
  title: string;
  chart: string;
  level: number;
  bpm: string;
  notes: number;
  genre: string;
  artist: string;
}

export enum Version {
  FIRST_SUBSTREAM = '1st/sub',
  SECOND = '2nd',
  THIRD = '3rd',
  FOURTH = '4th',
  FIFTH = '5th',
  SIXTH = '6th',
  SEVENTH = '7th',
  EIGHTH = '8th',
  NINTH = '9th',
  TENTH = '10th',
  RED = 'RED',
  HAPPY_SKY = 'SKY',
  DISTORTED = 'DD',
  GOLD = 'GOLD',
  DJ_TROOPERS = 'DJT',
  EMPRESS = 'EMP',
  SIRIUS = 'SIR',
  RESORT_ANTHEM = 'RA',
  LINCLE = 'LC',
  TRICORO = 'tri',
  SPADA = 'SPA',
  PENDUAL = 'PEN',
  COPULA = 'cop',
  SINOBUZ = 'SINO',
  CANNON_BALLERS = 'CB',
  ROOTAGE = 'Root',
  HEROIC_VERSE = 'HERO',
  BISTROVER = 'BIS',
  CASTHOUR = 'CAST',
}

export enum Chart {
  BEGINNER = 'BEGINNER',
  NORMAL = 'NORMAL',
  HYPER = 'HYPER',
  ANOTHER = 'ANOTHER',
  LEGGENDARIA = 'LEGGENDARIA'
}

export enum FirstLetter {
  ABCD = 'ABCD',
  EFGH = 'EFGH',
  IJKL = 'IJKL',
  MNOP = 'MNOP',
  QRST = 'QRST',
  UVWXYZ = 'UVWXYZ',
  OTHERS = 'OTHERS',
}

const chartData = charts as Attributes[];

export const findChartById = (id: number) => chartData.find(value => value.id == id);

export const findChartsByTitle = (title: string) => chartData.filter(value => value.title == title);

export const findChartsByLevel = (level: number) => chartData.filter(value => value.level == level);

export const searchChartsByTitle = (keyword: string) => {
  console.log(keyword);
  return chartData.filter(value => value.title.toLowerCase().includes(keyword.toLowerCase()));
};

export const searchChartsByArtist = (keyword: string) => chartData.filter(value => value.artist.includes(keyword));

export const findChartsByVersion = (version: Version) => chartData.filter(value => value.version == version);

export const findChartsByFirstLetter = (firstLetter: FirstLetter) => chartData.filter(value => {
  const firstCharacter = value.title[0];

  switch (firstLetter) {
    case FirstLetter.ABCD:
      return /[A-Da-d]/.test(firstCharacter);
    case FirstLetter.EFGH:
      return /[E-He-h]/.test(firstCharacter);
    case FirstLetter.IJKL:
      return /[I-Ki-k]/.test(firstCharacter);
    case FirstLetter.MNOP:
      return /[M-Pm-p]/.test(firstCharacter);
    case FirstLetter.QRST:
      return /[Q-Tq-t]/.test(firstCharacter);
    case FirstLetter.UVWXYZ:
      return /[U-Zu-z]/.test(firstCharacter);
    case FirstLetter.OTHERS:
      return !(/[A-Za-z]/.test(firstCharacter));
  }
});