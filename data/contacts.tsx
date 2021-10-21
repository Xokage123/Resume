// Next
import Image from 'next/image';
// Images
import GmailIcon from 'public/photo/Contacts/gmail.png';
import GithublIcon from 'public/photo/Contacts/github.png';
import VKIcon from 'public/photo/Contacts/vk.png';

interface IContactProps {
	href: string | NodeJS.Process;
	textTooltip: string;
	image: JSX.Element;
}

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
];
