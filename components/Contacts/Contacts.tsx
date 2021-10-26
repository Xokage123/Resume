// Next
import Link from 'next/link';
// Components
import { FormMail } from './FormMail';
import { ListSample } from './List';
// Data
import { myPhoneList, myMailList } from 'data/contacts';
// Styles__Material
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// Styles__My
import * as Styles from './styles';

export const Contacts: React.FC = () => (
	<Box sx={Styles.Container} className={['main-container'].join(' ')}>
		<Typography sx={Styles.Title} variant="h4" gutterBottom component="h4">
			Мои контакты
		</Typography>
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				gap: '20px',
			}}
		>
			{/* Лист с телефонами */}
			<ListSample
				type="phone"
				components={myPhoneList}
				title={'Мои телефоны'}
			/>
			{/* Лист с почтами */}
			<ListSample type="mail" components={myMailList} title={'Мои почты'} />
		</Box>
		{/* Форма для связи со мной */}
		<FormMail />
	</Box>
);
