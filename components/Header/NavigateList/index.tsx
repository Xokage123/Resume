import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import uuid from 'react-uuid';
import toast, { Toaster } from 'react-hot-toast';

import type { INavigateItemsProps } from 'interfaces';

import Icon from '@material-tailwind/react/Icon';
import List from '@mui/material/List';

import Styles from './style.module.scss';

interface INavigateListProps {
	contacts: Array<INavigateItemsProps>;
}

export const NavigateList: React.FC<INavigateListProps> = (props) => {
	const { contacts } = props;

	const router = useRouter();

	const showToaster = () => {
		toast.loading('Происходит переход на следующую страницу, подождите');
	};

	return (
		<List className={Styles.List}>
			{contacts.map((contact) => (
				<li key={uuid()}>
					<Link href={contact.link} passHref>
						<a
							onClick={showToaster}
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
			))}
			<Toaster
				position="bottom-right"
				toastOptions={{
					duration: 3000,
				}}
			/>
		</List>
	);
};
