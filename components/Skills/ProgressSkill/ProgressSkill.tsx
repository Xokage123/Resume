// Next
import Image from 'next/image';
// Interface
import type { IProgressSkillProps } from '../../../interfaces';
// Styles__Tailwind
import Progress from '@material-tailwind/react/Progress';
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import H6 from '@material-tailwind/react/Heading6';
import Small from '@material-tailwind/react/Small';
// Styles__My
import styles from './progressskill.module.scss';

export const ProgressSkill: React.FC<IProgressSkillProps> = (props) => {
	const {
		colorProgress = 'lightBlue',
		colorText = 'gray',
		value,
		image,
		name,
	} = props;
	return (
		<Card className={styles.ProgressItem}>
			<CardBody className={styles['ProgressItem-Body']}>
				<H6 className={styles['ProgressItem-Title']} color={colorText}>
					{name}
				</H6>
				<Image
					className={styles['ProgressItem-Image']}
					src={image}
					width={50}
					height={50}
					alt="Card Image"
				/>
				<Progress
					className={styles['ProgressItem-Progress']}
					color={colorProgress}
					value={value}
					percentage={false}
				/>
				<Small>Владение: {value}%</Small>
			</CardBody>
		</Card>
	);
};
