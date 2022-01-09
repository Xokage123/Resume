import { FC } from 'react';
import Link from 'next/link';

import { Literatures } from '../../../../../data/pasport';

import { Box } from '@mui/material/node_modules/@mui/system';
import Paragraph from '@material-tailwind/react/Paragraph';

interface Literature {
	content: Literatures;
}

export const Literature: FC<Literature> = (props) => {
	const { content } = props;
	const { name, link, status } = content;
	return (
		<Box
			sx={{
				display: 'flex',
				alignItems: 'center',
				padding: '10px',
				gap: '10px',
				borderRadius: '10px',
				background: status.color,
			}}
		>
			<Link href={link}>{name}</Link>
			<span>({status.name})</span>
		</Box>
	);
};
