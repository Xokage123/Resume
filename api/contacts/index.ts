interface IMailInfo {
  firstName: string;
  lastName: string;
  mail: string;
  text: string;
  nameCompany: string;
}

// Отправляет данные на мой сервер
export const sendInfoMail = async ({
  firstName,
  lastName,
  mail,
  text,
  nameCompany,
}: IMailInfo) => {};
