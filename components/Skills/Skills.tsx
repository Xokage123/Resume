// React
import uuid from 'react-uuid';
// Data
import { categoriesAll } from 'data/skills';
// Components
import { ProgressSkill } from './ProgressSkill';
// Styles__Material
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// Styles__Tailwind
import H3 from '@material-tailwind/react/Heading3';
// Styles__My
import styles from './skills.module.scss';

export const SkillsContent: React.FC = () => {
	return (
		<div className="main-container pt bg-info">
			<H3>Мои навыки</H3>
			{categoriesAll.map((category) => {
				return (
					<Accordion
						sx={{
							marginBottom: '10px',
							borderRadius: '15px',
							'&:last-child': {
								marginBottom: 0,
							},
						}}
						className="bg-info"
						key={uuid()}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls="content"
						>
							<Typography
								sx={{
									fontWeight: 'bold',
								}}
							>
								{category.name}
							</Typography>
						</AccordionSummary>
						<AccordionDetails
							sx={{
								display: 'grid',
								gridTemplateColumns: 'repeat(4, 1fr)',
								gap: '15px',
							}}
						>
							{category.elements.map((skill) => {
								return (
									<ProgressSkill
										key={uuid()}
										сategory={skill.сategory}
										name={skill.name}
										value={skill.value}
										image={skill.image}
									/>
								);
							})}
						</AccordionDetails>
					</Accordion>
				);
			})}
		</div>
	);
};
