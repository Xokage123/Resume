// Next
import Image from 'next/image';
import { useRouter } from 'next/dist/client/router';
// React
import { useCallback } from 'react';
// Data
import { colorsForStatus } from 'data/works';
// Interfaces__Interface
import type { IWorksItem } from 'interfaces';
// Interfaces__Type
import type { TWorksStatus } from 'interfaces/type/works';
// Styles__Material
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import Styles from './worksitem.module.scss';

export const WorksItem: React.FC<IWorksItem> = (props) => {
	const router = useRouter();
	const { item } = props;

	const addColorItem = useCallback((status: TWorksStatus) => {
		return colorsForStatus.find((element) => {
			return element.name === status;
		})?.color;
	}, []);

	return (
		<ListItem
			className={Styles.Item}
			sx={{
				backgroundColor: addColorItem(item.status),
			}}
			onClick={() => router.push(item.url)}
			disablePadding
		>
			<ListItemButton
				className={Styles.Item_Button}
				sx={{
					flexWrap: 'wrap',
					justifyContent: 'center',
				}}
			>
				<Typography
					sx={{
						textAlign: 'center',
					}}
					variant="h4"
					gutterBottom
					component="h4"
				>
					{item.title}
				</Typography>
				<Image src={item.photo} alt="photo" height={200} width={300}></Image>
				<Typography
					sx={{
						marginBottom: 0,
						fontWeight: 700,
					}}
					variant="h5"
					gutterBottom
					component="h5"
				>
					Описание
				</Typography>
				<Typography
					sx={{
						textAlign: 'center',
					}}
					variant="body1"
					gutterBottom
				>
					{item.description}
				</Typography>
			</ListItemButton>
		</ListItem>
	);
};
