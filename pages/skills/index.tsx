// Next
import type { NextPage } from 'next';
// Components
import { SkillsContent } from '@/components/Skills';

const Skills: NextPage = () => {
	return (
		<div className="main-container bg-info">
			<SkillsContent />
		</div>
	);
};

export default Skills;
