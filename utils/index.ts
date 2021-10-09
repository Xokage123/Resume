// Interfaces and Enums
import type {
  IListElements,
  IListElementProps,
  IObjectAnyProperties,
} from '../interfaces';
import { NameDay, NameMonth } from '../interfaces/enum';

export const dateFormater: Function = (dateValue?: string): string => {
  let date: Date = dateValue ? new Date(dateValue) : new Date();
  const year = date.getFullYear();
  const day: number = date.getDate();
  const dayOfWeekNumber: number = date.getDay();
  let dayOfWeekString: string = '';
  switch (dayOfWeekNumber) {
    case 0:
      dayOfWeekString = NameDay.SUN;
      break;
    case 1:
      dayOfWeekString = NameDay.MON;
      break;
    case 2:
      dayOfWeekString = NameDay.TUE;
      break;
    case 3:
      dayOfWeekString = NameDay.WED;
      break;
    case 4:
      dayOfWeekString = NameDay.THU;
      break;
    case 5:
      dayOfWeekString = NameDay.FRI;
      break;
    case 6:
      dayOfWeekString = NameDay.SAT;
      break;
  }
  const monthNumber: number = date.getMonth();
  let monthString: string = '';
  switch (monthNumber) {
    case 0:
      monthString = NameMonth.January;
      break;
    case 1:
      monthString = NameMonth.February;
      break;
    case 2:
      monthString = NameMonth.March;
      break;
    case 3:
      monthString = NameMonth.April;
      break;
    case 4:
      monthString = NameMonth.May;
      break;
    case 5:
      monthString = NameMonth.June;
      break;
    case 6:
      monthString = NameMonth.July;
      break;
    case 7:
      monthString = NameMonth.August;
      break;
    case 8:
      monthString = NameMonth.September;
      break;
    case 9:
      monthString = NameMonth.October;
      break;
    case 10:
      monthString = NameMonth.November;
      break;
    case 11:
      monthString = NameMonth.December;
      break;
  }
  return `${monthString} ${year} год(а) (${dayOfWeekString})`;
};

// Преобразование массива элементов в нужному формату листа
export const transformationListProps = ({
  nameText,
  element,
  nameUrl,
}: IListElementProps): Array<IListElements> => {
  return element.map((element: IObjectAnyProperties) => {
    if (nameUrl) {
      return {
        ...element,
        text: element[nameText],
        url: element[nameUrl],
      };
    }
    return {
      ...element,
      text: element[nameText],
    };
  });
};
