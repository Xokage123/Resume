import React, { FC } from 'react';

import { AccordionComonent } from '../../Accordion';

import { Literature } from './components/Literature';

import { literatures } from '../../../data/pasport';

import { Box } from '@mui/material/node_modules/@mui/system';

import styles from './myliterature.scss';

export const MyLiterature: FC = () => {
	return (
		<Box
			sx={{
				padding: '20px 0',
			}}
		>
			<AccordionComonent
				title="Моя прочитанная литература"
				items={literatures.map((literature) => ({
					content: <Literature key={literature.name} content={literature} />,
				}))}
			/>
		</Box>
	);
};
