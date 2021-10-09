import type { IProgressSkillProps, ICategoryInfo } from '../interfaces';
import { nameCategorySkill } from 'interfaces/enum';

// Icons__ProgrammingLanguages
import JS_ICON from '../public/photo/Skills/js.jpg';
import TS_ICON from '../public/photo/Skills/ts.png';
import JAVA_ICON from '../public/photo/Skills/java.jpg';
import KOTLIN_ICON from '../public/photo/Skills/kotlin.jpg';
// Icons__ProjectBuilders
import WEBPACK_ICON from '../public/photo/Skills/webpack.jpg';
import GULP_ICON from '../public/photo/Skills/gulp.png';
import VITE_ICON from '../public/photo/Skills/vite.png';
import SNOWPACK_ICON from '../public/photo/Skills/snowpack.png';
// Icons__Test
import JEST_ICON from '../public/photo/Skills/jest.jpg';

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
	// Chai
	// Prettier
	// Eslint
];

export const categoriesAll: Array<ICategoryInfo> = [
	generateCategory(
		nameCategorySkill.programmingLanguages,
		arrayProgrammingLanguages
	),
	generateCategory(nameCategorySkill.projectBuilders, arrayProjectBuilders),
	generateCategory(nameCategorySkill.tests, arrayTest),
];
