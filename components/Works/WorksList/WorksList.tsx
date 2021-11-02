// React
import uuid from 'react-uuid';
// Components
import { WorksItem } from '../WorksItem';
// Data
import myWorksArray from 'data/works';
// Styles__Material
import Box from '@mui/material/Box';
import List from '@mui/material/List';
// Styles__My
import Styles from './workslist.module.scss';

export const WorksList: React.FC = () => {
	return (
		<Box className="main-container">
			<List className={Styles.List}>
				{myWorksArray.map((work) => {
					return <WorksItem key={uuid()} item={work} />;
				})}
			</List>
		</Box>
	);
};
