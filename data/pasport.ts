import { links } from './links';
// Interface and Enums
import type { IMyPasportInformation, IListElements } from '../interfaces';
import { nameDegree } from '../interfaces/enum';

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
    'На данный момент я являюсь выпускником университета МИИГАиК со стпенеью бакалавра. Учился я на специализации "Картография и геоинформатика" и научился за 4 года учебы работать с интерактивными и бумажными картами. Так-же около года изучаю такие языки программирования, как: JavaScript, TypeScript, Java и Kotlin. Умею верстать адаптивные и кросбаузерные сайты и приложения, которые соответсвуют всем современным требованиям. Умею использовать современные инструменты и программы, для написания хорошего и качественного кода. На данный момент у меня много сил и амбиций продолжать развивать свои навыки в сфере web-разработки. Я только начинающий специалист, но уже успел многое понять и многому научиться. Но я не останавливаюсь на достигнутом, и каждый день пытаюсь изучать что то новое. Так же умею хорошие комуникативные навыки, которые позволяют мне находить общий язык со всеми новыми людьми. Это позволяет мне хорошо влиться в команду и выполнять свою работу быстро и качествено.',
  programmingLanguages,
  country: 'Россия',
  city: 'Москва',
};
