// Next
import Link from 'next/link';
// Components
import { FormMail } from './FormMail';
// Styles__Material
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

export const Contacts: React.FC = () => (
	<Box className="main-container">
		<Typography variant="h4" gutterBottom component="h4">
			Мои контакты
		</Typography>
		<List>
			<ListItem disablePadding>
				<Link passHref href={'tel:79035630905'}>
					<ListItemButton>
						<ListItemIcon>
							<LocalPhoneIcon />
						</ListItemIcon>
						<ListItemText primary="8 (903) 563 09 05 (основной телефон)" />
					</ListItemButton>
				</Link>
			</ListItem>
		</List>
		{/* Форма для связи со мной */}
		<FormMail />
	</Box>
);
