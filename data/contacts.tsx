// Next
import Image from 'next/image';
// Interface
import type {
	IMyPhoneList,
	IContactProps,
	IMyMailInformation,
} from 'interfaces';
// Images
import GmailIcon from 'public/photo/Contacts/gmail.png';
import GithublIcon from 'public/photo/Contacts/github.png';
import VKIcon from 'public/photo/Contacts/vk.png';
import TelegramIcon from 'public/photo/Contacts/telegram.png';

// Информация о моих контактах
export const contactsInfo: Array<IContactProps> = [
	// Gmail
	{
		href: `mailto:${process.env.NEXT_PUBLIC_MY_MAIL}`,
		textTooltip: 'Моя почта',
		image: <Image width={50} height={50} src={GmailIcon} alt="svg" />,
	},
	// Gitgub
	{
		href: process.env.NEXT_PUBLIC_URL_MY_GITHUB!,
		textTooltip: 'Мой github',
		image: <Image width={50} height={50} src={GithublIcon} alt="svg" />,
	},
	// Vk
	{
		href: process.env.NEXT_PUBLIC_URL_MY_VK!,
		textTooltip: 'Моя страница в VK',
		image: <Image width={50} height={50} src={VKIcon} alt="svg" />,
	},
	// Telegram
	{
		href: process.env.NEXT_PUBLIC_MY_TELEGRAM!,
		textTooltip: 'Моя ccылка на Telegram',
		image: <Image width={50} height={50} src={TelegramIcon} alt="svg" />,
	},
];
// Мои телефоны
export const myPhoneList: Array<IMyPhoneList> = [
	{
		type: 'Свободный',
		number: '79035630905',
	},
	{
		type: 'Рабочий',
		number: '79854335184',
	},
];
// Мои почты
export const myMailList: Array<IMyMailInformation> = [
	{
		name: 'artemov99@list.ru',
	},
	{
		name: 'maxartem0419@gmail.com',
	},
];
