// Intrefaces__Type
import type { TColorTailwind } from './type/colors';
import type { TWorksStatus } from 'interfaces/type/works';
// Intrefaces__Enum
import { nameCategorySkill } from './enum';

// Navigate
export interface INavigateItemsProps {
  link: string;
  logoName: string;
  text: string;
}

// List
export interface IListProps {
  elements: Array<IListElements>;
  title?: string;
  color?: TColorTailwind;
  classList: string;
  classItem: string;
}
export interface IObjectAnyProperties {
  [key: string]: string;
}
export interface IListElements {
  [key: string]: string | undefined;
  text: string;
  url?: string;
}
export interface IListElementProps {
  nameText: string;
  element: Array<IObjectAnyProperties>;
  nameUrl?: string;
}
// Информация об университете
export interface IUniversityInformation {
  name: string;
  link: string;
  direction: string;
  startDate: number;
  endDate: number;
  degree: string;
}
// Информация о резюме
export interface IResumeInformation {
  // Название ссайта
  name: string;
  // Название позиции
  position: string;
  // Ссылка
  link: string;
}
// Информация о репозиториях
export interface IRepositoriesInfo {
  // Название репозитория
  name: string;
  // Ссылка на репозитории
  link: string;
}
// Общая информация
export interface IMyPasportInformation {
  // Мои инициалы
  initial: string;
  // Год рождения
  years: number;
  // Образование
  education: Array<IUniversityInformation>;
  // Информация обо мне
  inforamtionAboutMy: string;
  // Языки программирования, которыми я владею
  programmingLanguages: Array<IListElements>;
  // Страна проживания на данный момент
  country: string;
  // Город проживания на данный момент
  city: string;
  // Ссылки на мои резюме
  resume: Array<IResumeInformation>;
  // Ссылки на репозитории
  repositories: Array<IRepositoriesInfo>;
}
export interface IStartInfoProps {
  userRepositories: Array<object>;
}
// Цветовая тема
export interface IMyPasportProps {
  color: TColorTailwind;
}
export interface IDropdownEducationProps {
  universities: Array<IUniversityInformation>;
}

// Tooltip
export interface ITooltipProps {
  textTooltip: string;
  component: JSX.Element;
}

// Skills
export interface ICategoryInfo {
  name: string;
  elements: Array<IProgressSkillProps>;
}
export interface IProgressSkillProps {
  сategory: nameCategorySkill;
  colorText?: string;
  colorProgress?: string;
  name: string;
  value: string;
  image: StaticImageData;
}

// Works
export interface IWorksItemProps {
  // Заголовок
  title: string;
  photo: StaticImageData;
  // Ссылка
  url: string;
  // Описание
  description: string;
  // Статус
  status: TWorksStatus;
}
export interface IWorksItem {
  item: IWorksItemProps;
}
export interface IColorProps {
  name: TWorksStatus;
  information: string;
  color: string;
}

// Contacts

export interface IInputProps {
  type: string;
  register: any;
  placeholder: string;
  text: string;
  error: any;
}
export interface IInputsName {
  firstName: string;
  lastName: string;
  mail: string;
  nameCompany: string;
  text: string;
}
