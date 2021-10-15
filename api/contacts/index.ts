import axios from 'axios';
export interface IMailInfo {
  firstName: string;
  lastName: string;
  mail: string;
  text: string;
  nameCompany: string;
}

// Отправляет данные на мой сервер
export const sendInfoMail = async (information: IMailInfo) => {
  const answer = await axios({
    method: 'POST',
    url: String(process.env.NEXT_PUBLIC_URL_MY_MAIL_API),
    data: information,
  });
  console.log(answer);
};
