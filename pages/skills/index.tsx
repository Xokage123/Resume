// Next
import type { NextPage } from 'next';
// Components
import { SkillsContent } from '@/components/Skills';
// Styles__Material
import Box from '@mui/material/Box';

const Skills: NextPage = () => {
	return (
		<Box className="main-container bg-info">
			<SkillsContent />
		</Box>
	);
};

export default Skills;
