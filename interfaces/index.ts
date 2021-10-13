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

// Pasport
export interface IUniversityInformation {
  name: string;
  link: string;
  direction: string;
  startDate: number;
  endDate: number;
  degree: string;
}
export interface IMyPasportInformation {
  initial: string;
  years: number;
  education: Array<IUniversityInformation>;
  inforamtionAboutMy: string;
  programmingLanguages: Array<IListElements>;
  country: string;
  city: string;
}
export interface IStartInfoProps {
  userRepositories: Array<object>;
}
export interface IMyPasportProps {
  color?: TColorTailwind;
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
