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

enum Chart {
  BEGINNER = 'BEGINNER',
  NORMAL = 'NORMAL',
  HYPER = 'HYPER',
  ANOTHER = 'ANOTHER',
  LEGGENDARIA = 'LEGGENDARIA'
}

const chartData = charts as Attributes[];

export const findChartById = (id: number) => chartData.find(value => value.id == id);

export const findChartsByTitle = (title: string) => chartData.filter(value => value.title == title);

export const findChartsByLevel = (level: number) => chartData.filter(value => value.level == level);

export const searchChartsByTitle = (keyword: string) => chartData.filter(value => value.title.includes(keyword));

export const searchChartsByArtist = (keyword: string) => chartData.filter(value => value.title.includes(keyword));

export const findChartsByVersion = (version: Version) => chartData.filter(value => value.version == version);