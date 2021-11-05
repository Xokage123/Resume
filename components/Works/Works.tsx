// React
import uuid from 'react-uuid';
// Components
import { WorksList } from './WorksList';
// Data
import { colorsForStatus } from 'data/works';
// Styles__Material
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

export const Works: React.FC = () => {
	return (
		<Box className="main-container">
			<Typography
				sx={{
					marginBottom: 0,
					fontWeight: 700,
				}}
				variant="h5"
				gutterBottom
				component="h5"
			>
				Описание проектов:
			</Typography>
			<List
				sx={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
				}}
			>
				{colorsForStatus.map((colorInfo) => {
					return (
						<ListItem key={uuid()}>
							<Box
								sx={{
									marginRight: '5px',
									width: '50px',
									height: '50px',
									backgroundColor: colorInfo.color,
								}}
							></Box>
							<Typography variant="body1" gutterBottom>
								{colorInfo.information}
							</Typography>
						</ListItem>
					);
				})}
			</List>
			<WorksList />
		</Box>
	);
};
