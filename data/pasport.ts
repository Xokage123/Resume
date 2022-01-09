import { links } from './links';

import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru');

import type { IMyPasportInformation, IListElements } from '../interfaces';
import { nameDegree } from '../interfaces/enum';

import { lime, green, lightBlue } from '@mui/material/colors';

export const programmingLanguages: Array<IListElements> = [
  {
    text: 'JavaScript',
  },
  {
    text: 'TypeScript',
  },
  {
    text: 'Java',
  },
  {
    text: 'Kotlin',
  },
];

export const myPasportInformation: IMyPasportInformation = {
  initial: 'Артемов Максим Алексеевич',
  years: new Date().getFullYear() - 1999,
  education: [
    {
      name: 'МИИГАиК(Московский инженерный институт геодезии и картографии',
      link: links.university.MIIGAIK,
      direction: 'Картография и геоинформатика',
      startDate: 2017,
      endDate: 2021,
      degree: nameDegree.Undergraduate,
    },
  ],
  inforamtionAboutMy:
    'На данный момент я являюсь выпускником университета МИИГАиК со степенью бакалавра. Учился я на специализации "Картография и геоинформатика" и научился за 4 года учебы работать с интерактивными и бумажными картами. Также около года изучаю такие языки программирования, как: JavaScript, TypeScript, Java и Kotlin. Умею верстать адаптивные и краснозерные сайты и приложения, которые соответствуют всем современным требованиям. Умею использовать современные инструменты и программы, для написания хорошего и качественного кода. На данный момент у меня много сил и амбиций продолжать развивать свои навыки в сфере web-разработки. Я только начинающий специалист, но уже успел многое понять и многому научиться. Но я не останавливаюсь на достигнутом, и каждый день пытаюсь изучать что-то новое. Так же умею хорошие коммуникативные навыки, которые позволяют мне находить общий язык со всеми новыми людьми. Это позволяет мне хорошо влиться в команду и выполнять свою работу быстро и качественно.',
  programmingLanguages,
  country: 'Россия',
  city: 'Москва',
  resume: [
    {
      name: 'HeadHunter',
      position: 'Frontend-разработчик',
      link: 'https://hh.ru/resume/7380bd78ff0931b3db0039ed1f316a7871514c',
    },
    {
      name: 'Хабр Карьера',
      position: 'Frontend-разработчик',
      link: 'https://career.habr.com/artemidasian',
    },
  ],
  repositories: [
    {
      name: 'Github',
      link: String(process.env.NEXT_PUBLIC_URL_MY_GITHUB),
    },
    {
      name: 'GitLab',
      link: String(process.env.NEXT_PUBLIC_URL_MY_GITLAB),
    },
  ],
};

export enum StatusName {
  PREV = 'Прочитал',
  ACTUAL = 'Читаю',
  NEXT = 'Планирую',
}

const statusPrev: Status = {
  name: StatusName.PREV,
  color: lightBlue[200],
};

const statusActual: Status = {
  name: StatusName.ACTUAL,
  color: green[200],
};

const statusNext: Status = {
  name: StatusName.NEXT,
  color: lime[200],
};

export interface Status {
  name: StatusName;
  color: string;
}

export interface Literatures {
  name: string;
  link: string;
  status: Status;
}

export const literatures: Array<Literatures> = [
  {
    name: 'Чистый код: создание, анализ и рефакторинг',
    link: 'https://coollib.net/b.usr/Robert_Sesil_Martin_Chistyiy_kod._Sozdanie_analiz_i_refaktoring.pdf',
    status: statusActual,
  },
  {
    name: 'Современный JavaScript для нетерпеливых [2021]',
    link: 'https://vk.com/wall-51126445_76983',
    status: statusActual,
  },
  {
    name: 'JavaScript. карманный справочник',
    link: 'https://www.ozon.ru/product/javascript-karmannyy-spravochnik-151531692/?partner=proglib&sh=V3v_3-yi&utm_content=link',
    status: statusNext,
  },
  {
    name: 'Программист-прагматик. Путь от подмастерья к мастеру',
    link: 'https://vk.com/wall-54530371_10086',
    status: statusNext,
  },
  {
    name: 'Секреты Javascript Ninja',
    link: 'http://www.habucenter.ru/upload/iblock/76a/76a7f6a0d1fda54f72505775f5b9d864.pdf',
    status: statusPrev,
  },
  {
    name: 'Выразительный Javascript',
    link: 'https://www.ozon.ru/product/vyrazitelnyy-javascript-sovremennoe-veb-programmirovanie-154840384/?partner=proglib&sh=vqC2Ixx2&utm_content=link',
    status: statusPrev,
  },
  {
    name: 'Э. Браун – Изучаем JavaScript. Руководство по созданию современных веб-сайтов',
    link: 'https://www.ozon.ru/product/izuchaem-javascript-rukovodstvo-po-sozdaniyu-sovremennyh-veb-saytov-140372302/?partner=proglib&sh=wqtsdpHa&utm_content=link',
    status: statusPrev,
  },
];
