// Next
import Link from 'next/link';
// React
import uuid from 'react-uuid';
import { useCallback } from 'react';
// Interface
import type { IMyPhoneList, IMyMailInformation } from 'interfaces';
// Type
import type { TListContacts } from 'interfaces/type/contacts';
// Styles__Material
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

import { SxProps } from '@mui/material/node_modules/@mui/system';
// Styles__My
import * as Styles from './styles';

const styleList: SxProps = {
	maxWidth: '400px',
};

type ITypeComponents = IMyPhoneList | IMyMailInformation;

interface IListPhoneProps {
	type: TListContacts;
	title: string;
	components: Array<ITypeComponents>;
}

export const ListSample: React.FC<IListPhoneProps> = (props) => {
	const { components, title, type } = props;

	const generateFynctionItems = useCallback((element) => {
		switch (type) {
			case 'phone':
				const phoneInfo: IMyPhoneList = element;
				return (
					<ListItem key={uuid()} disablePadding>
						<Link passHref href={`tel:${phoneInfo.number}`}>
							<ListItemButton sx={Styles.ItemListPhone}>
								<ListItemIcon>
									<LocalPhoneIcon />
								</ListItemIcon>
								<ListItemText
									primary={`+${element.number} (${element.type} телефон)`}
								/>
							</ListItemButton>
						</Link>
					</ListItem>
				);
				break;
			case 'mail':
				const mailInfo: IMyMailInformation = element;
				return (
					<ListItem key={uuid()} disablePadding>
						<Link passHref href={`mailto:${mailInfo.name}`}>
							<ListItemButton sx={Styles.ItemListPhone}>
								<ListItemIcon>
									<MailIcon />
								</ListItemIcon>
								<ListItemText primary={mailInfo.name} />
							</ListItemButton>
						</Link>
					</ListItem>
				);
				break;
			default:
				return null;
		}
	}, []);
	return (
		<Box sx={Styles.Container}>
			<Typography variant="h5" gutterBottom component="h5">
				{title}
			</Typography>
			<List sx={Styles.ListPhone}>{components.map(generateFynctionItems)}</List>
		</Box>
	);
};
