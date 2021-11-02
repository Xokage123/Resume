// Next
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
// React
import uuid from 'react-uuid';
// Interfaces
import type { INavigateItemsProps } from 'interfaces';
// Styles__Tailwind
import Icon from '@material-tailwind/react/Icon';
import List from '@mui/material/List';
import Styles from './style.module.scss';

interface INavigateListProps {
	contacts: Array<INavigateItemsProps>;
}

export const NavigateList: React.FC<INavigateListProps> = (props) => {
	const { contacts } = props;
	const router = useRouter();
	return (
		<List className={Styles.List}>
			{contacts.map((contact) => {
				return (
					<li key={uuid()}>
						<Link href={contact.link} passHref>
							<a
								className={`
											${contact.link === router.pathname ? 'text-warning' : ''}
											${Styles.Link}
										`}
							>
								<Icon name={contact.logoName} size="xl" />
								{contact.text}
							</a>
						</Link>
					</li>
				);
			})}
		</List>
	);
};
