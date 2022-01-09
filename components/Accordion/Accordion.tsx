import React, { FC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import styles from './accordion.scss';

interface Items {
	content: JSX.Element;
}

interface AccordionComonent {
	title: string;
	items: Array<Items>;
}

export const AccordionComonent: FC<AccordionComonent> = (props) => {
	const { items, title } = props;

	return (
		<Accordion>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				aria-controls="panel1a-content"
			>
				<Typography>{title}</Typography>
			</AccordionSummary>
			{items.map((item) => {
				return (
					<AccordionDetails key={item.content.key}>
						{item.content}
					</AccordionDetails>
				);
			})}
		</Accordion>
	);
};
