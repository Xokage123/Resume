import type { IProgressSkillProps, ICategoryInfo } from 'interfaces';
import { nameCategorySkill } from 'interfaces/enum';

// Icons__ProgrammingLanguages
import JS_ICON from 'public/photo/Skills/js.jpg';
import TS_ICON from 'public/photo/Skills/ts.png';
import JAVA_ICON from 'public/photo/Skills/java.jpg';
import KOTLIN_ICON from 'public/photo/Skills/kotlin.jpg';
// Icons__ProjectBuilders
import WEBPACK_ICON from 'public/photo/Skills/webpack.jpg';
import GULP_ICON from 'public/photo/Skills/gulp.png';
import VITE_ICON from 'public/photo/Skills/vite.png';
import SNOWPACK_ICON from 'public/photo/Skills/snowpack.png';
// Icons__Test
import JEST_ICON from 'public/photo/Skills/jest.jpg';
import CYPRESS_ICON from 'public/photo/Skills/cypress.png';
// Icons__Preprocessors
import PUG_ICON from 'public/photo/Skills/pug.png';
import SASS_ICON from 'public/photo/Skills/sass.png';
// Icons__Frameworks
import REACT_ICON from 'public/photo/Skills/react.jpg';
import VUE_ICON from 'public/photo/Skills/vue.png';
// Icons__UIFrameworks
import UI_MATERIAL_ICON from 'public/photo/Skills/ui-material.png';
import UI_REACT_SEMANTIC_ICON from 'public/photo/Skills/semantic_react.png';
import UI_REACT_BOOTSTRAP_ICON from 'public/photo/Skills/react-bootstrap.png';
import UI_TAILWIND_ICON from 'public/photo/Skills/tailwind.png';
import UI_SUPABASE_ICON from 'public/photo/Skills/supabase.png';
import UI_STORYBOOK_ICON from 'public/photo/Skills/storybook.png';
import UI_ANT_DESIGN_ICON from 'public/photo/Skills/ant_design.png';
// Icons__SSRFrameworks
import NEXT_ICON from 'public/photo/Skills/next.png';

const generateCategory = (
	nameCategory: string,
	elements: Array<IProgressSkillProps>
) => {
	return {
		name: nameCategory,
		elements,
	};
};

// Мои языки программирования
export const arrayProgrammingLanguages: Array<IProgressSkillProps> = [
	{
		сategory: nameCategorySkill.programmingLanguages,
		name: 'JavaScript',
		value: '80',
		image: JS_ICON,
	},
	{
		сategory: nameCategorySkill.programmingLanguages,
		name: 'TypeScript',
		value: '60',
		image: TS_ICON,
	},
	{
		сategory: nameCategorySkill.programmingLanguages,
		name: 'Java',
		value: '30',
		image: JAVA_ICON,
	},
	{
		сategory: nameCategorySkill.programmingLanguages,
		name: 'Kotlin',
		value: '30',
		image: KOTLIN_ICON,
	},
];
// Сборщики
export const arrayProjectBuilders: Array<IProgressSkillProps> = [
	// Webpack
	{
		сategory: nameCategorySkill.projectBuilders,
		name: 'Webpack',
		value: '60',
		image: WEBPACK_ICON,
	},
	// Gulp
	{
		сategory: nameCategorySkill.projectBuilders,
		name: 'Gulp',
		value: '70',
		image: GULP_ICON,
	},
	// Vite
	{
		сategory: nameCategorySkill.projectBuilders,
		name: 'Vite',
		value: '40',
		image: VITE_ICON,
	},
	// Snowpack
	{
		сategory: nameCategorySkill.projectBuilders,
		name: 'Snowpack',
		value: '40',
		image: SNOWPACK_ICON,
	},
];
// Тесты
export const arrayTest: Array<IProgressSkillProps> = [
	// Jest
	{
		сategory: nameCategorySkill.tests,
		name: 'Jest',
		value: '60',
		image: JEST_ICON,
	},
	// Cypress
	{
		сategory: nameCategorySkill.tests,
		name: 'Cypress',
		value: '40',
		image: CYPRESS_ICON,
	},
];
// Препроцессоры
export const arrayPreprocessors: Array<IProgressSkillProps> = [
	// PUG
	{
		сategory: nameCategorySkill.preprocessors,
		name: 'PUG',
		value: '70',
		image: PUG_ICON,
	},
	// Sass/Scss
	{
		сategory: nameCategorySkill.preprocessors,
		name: 'Sass/Scss',
		value: '80',
		image: SASS_ICON,
	},
];
// Фреймворки
export const arrayFrameworks: Array<IProgressSkillProps> = [
	// React
	{
		сategory: nameCategorySkill.frameworks,
		name: 'React',
		value: '80',
		image: REACT_ICON,
	},
	// Vue 2
	{
		сategory: nameCategorySkill.frameworks,
		name: 'Vue 2',
		value: '80',
		image: VUE_ICON,
	},
	// Vue 3
	{
		сategory: nameCategorySkill.frameworks,
		name: 'Vue 3',
		value: '50',
		image: VUE_ICON,
	},
];
// UI фреймворки
export const arrayUIframeworks: Array<IProgressSkillProps> = [
	// Material.js
	{
		сategory: nameCategorySkill.UIframework,
		name: 'Material.js',
		value: '50',
		image: UI_MATERIAL_ICON,
	},
	// SemanticReact
	{
		сategory: nameCategorySkill.UIframework,
		name: 'SemanticReact',
		value: '60',
		image: UI_REACT_SEMANTIC_ICON,
	},
	// Tailwind
	{
		сategory: nameCategorySkill.UIframework,
		name: 'Tailwind UI',
		value: '80',
		image: UI_TAILWIND_ICON,
	},
	// Supabase
	{
		сategory: nameCategorySkill.UIframework,
		name: 'Supabase',
		value: '50',
		image: UI_SUPABASE_ICON,
	},
	// Storybook
	{
		сategory: nameCategorySkill.UIframework,
		name: 'Storybook',
		value: '40',
		image: UI_STORYBOOK_ICON,
	},
	// Ant Design
	{
		сategory: nameCategorySkill.UIframework,
		name: 'Ant Design',
		value: '50',
		image: UI_ANT_DESIGN_ICON,
	},
	// React Bootstrap
	{
		сategory: nameCategorySkill.UIframework,
		name: 'React Bootstrap',
		value: '80',
		image: UI_REACT_BOOTSTRAP_ICON,
	},
];
// SSR фрейморки
export const arraySSRframeworks: Array<IProgressSkillProps> = [
	// Next
	{
		сategory: nameCategorySkill.SSRframework,
		name: 'Next',
		value: '60',
		image: NEXT_ICON,
	},
];

export const categoriesAll: Array<ICategoryInfo> = [
	generateCategory(
		nameCategorySkill.programmingLanguages,
		arrayProgrammingLanguages
	),
	generateCategory(nameCategorySkill.projectBuilders, arrayProjectBuilders),
	generateCategory(nameCategorySkill.tests, arrayTest),
	generateCategory(nameCategorySkill.preprocessors, arrayPreprocessors),
	generateCategory(nameCategorySkill.frameworks, arrayFrameworks),
	generateCategory(nameCategorySkill.UIframework, arrayUIframeworks),
	generateCategory(nameCategorySkill.SSRframework, arraySSRframeworks),
];
