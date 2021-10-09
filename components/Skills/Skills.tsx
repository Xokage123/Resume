// React
import uuid from 'react-uuid';
// Enum and Intarface
import { ICategoryInfo, IProgressSkillProps } from 'interfaces';
import { nameCategorySkill } from 'interfaces/enum';
// Data
import { categoriesAll } from 'data/skills';
// Components
import { ProgressSkill } from './ProgressSkill';
// Styles__Tailwind
import H3 from '@material-tailwind/react/Heading3';
import H4 from '@material-tailwind/react/Heading4';
// Styles__My
import styles from './skills.module.scss';

export function SkillsContent() {
	return (
		<div className="main-container bg-info">
			<H3>Мои навыки</H3>
			{categoriesAll.map((category) => {
				return (
					<section key={uuid()}>
						<H4>{category.name}</H4>
						<ul className={styles['Skills-List']}>
							{category.elements.map((skill) => {
								return (
									<li className={styles['Skills-Item']} key={uuid()}>
										<ProgressSkill
											сategory={skill.сategory}
											name={skill.name}
											value={skill.value}
											image={skill.image}
										/>
									</li>
								);
							})}
						</ul>
					</section>
				);
			})}
		</div>
	);
}
