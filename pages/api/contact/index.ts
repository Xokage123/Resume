// Next
import { NextApiRequest, NextApiResponse } from 'next';
// Interface
import type { IMailInfo } from 'api/contacts';
// Mandrill
const mandrill = require('node-mandrill')(
  '388f354530ee83a8208b3b48183d1876-us5'
);

const myMail = 'maxartem0419@gmail.com';

const sendEmail = async (
  _firstName: string,
  _lastName: string,
  _email: string,
  _subject: string,
  _message: string
) => {
  mandrill(
    '/messages/send',
    {
      message: {
        to: [{ email: myMail, name: `${_lastName} ${_lastName}` }],
        from_email: _email,
        subject: _subject,
        text: _message,
      },
    },
    (error: string, response: any) => {
      if (error) {
        console.log(error);
      }
      console.log(response);
    }
  );
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  // Имя человека
  const _firstName = req.body.firstName;
  // Фамилия человека
  const _lastName = req.body.lastName;
  // Почта
  const _email = req.body.mail;
  // Название организации
  const _subject = req.body.nameCompany;
  // Текст сообщения
  const _message = req.body.text;
  try {
    sendEmail(_firstName, _lastName, _email, _subject, _message);
    res.status(200).json({
      text: 'Данные успещно загрузились',
    });
  } catch (er: any) {
    if (er) {
      res.status(404).json({
        text: er.message,
      });
    }
  }
};

export default handler;
