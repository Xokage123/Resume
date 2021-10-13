// Next
import type { NextPage } from 'next';
// Components
import { Works } from '@/components/Works';
// Styles__Material
import Box from '@mui/material/Box';

const WorksPage: NextPage = () => {
	return (
		<Box className="main-container">
			<Works />
		</Box>
	);
};

export default Works;
