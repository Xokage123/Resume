// Next
import type { NextPage } from 'next';
// Components
import { Contacts } from '@/components/Contacts';
// Styles__Material
import Box from '@mui/material/Box';

const ContactsPage: NextPage = () => {
	return (
		<Box className="main-container">
			<Contacts />
		</Box>
	);
};

export default Contacts;
