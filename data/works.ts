// Intrefaces__Interface
import type { IWorksItemProps, IColorProps } from 'interfaces';
// Intrefaces__Type
import { TWorksStatus } from 'interfaces/type/works';
// Styles__Material
import { deepPurple, green, lime } from '@mui/material/colors';
// Photo
import BLANCHARD__PHOTO from 'public/photo/Works/blanchard.png';
import CULTURAL_MAP__PHOTO from 'public/photo/Works/cultural_map.png';
import TEXNOZAVR__PHOTO from 'public/photo/Works/texnozavr.png';
import MY_INSTAGRAM__PHOTO from 'public/photo/Works/my-instargam.png';

const myWorksArray: Array<IWorksItemProps> = [
  //Blanchard
  {
    title: 'Дизайнерский сайт "Blanchard"',
    url: 'https://blanchard-kappa.vercel.app',
    photo: BLANCHARD__PHOTO,
    description:
      'Пример дизайнерского сайта по искусству, где представлены фотографии и проекты. На сайте представлены слайдеры с работами, каталог товаров в виде табов, события и контакты. Данный сайт является адаптивным, и корректно отображается на всех устройствах.',
    status: 'graduated',
  },
  // Культурная карта
  {
    title: 'Культурная карта',
    url: 'https://cultural-map.vercel.app',
    photo: CULTURAL_MAP__PHOTO,
    description:
      'Данный сайт содержит в себе информацию о выдающихся личностях и их жазненном пути, который показан на карте. Так же на сайте представлены страницы с информацией о выдающихся личностях различных направлений. Данный проект позволит любителям искусства узнать больше о скоих кумирах и знаменитых людях',
    status: 'doing',
  },
  // Аналог магазина
  {
    title: 'Пример сайта магазина на Vue',
    url: 'https://vue-create-online-shop.vercel.app',
    photo: TEXNOZAVR__PHOTO,
    description:
      'Мой пример сайта магазина. Сайт является многостраничным и адаптивным. На проекте настроенна маршрутизация и хранилище, которые позволяет писать всю логику сайта в одном месте. Реализованы различные этапы покупки товара, от добавление его в корзину, до заказа.',
    status: 'doing',
  },
  // Аналог Instagram
  {
    title: 'Аналог Instagram',
    url: '  https://photo-maks.vercel.app',
    photo: MY_INSTAGRAM__PHOTO,
    description:
      'Сайт написан на React и является аналогом месссенджера Instagram. Реализована авторизация пользователя и просмотр фотографий. Так же есть возможность ставить лайки на фотографии, но для этого пользователя нужно аторизироваться',
    status: 'graduated',
  },
];

export const colorsForStatus: Array<IColorProps> = [
  {
    name: 'doing',
    information: 'Актуальные проекты',
    color: green[200],
  },
  {
    name: 'graduated',
    information: 'Завершенные проекты',
    color: deepPurple[100],
  },
  {
    name: 'plans',
    information: 'Проекты, которые пларируются',
    color: lime[200],
  },
];

export default myWorksArray;
