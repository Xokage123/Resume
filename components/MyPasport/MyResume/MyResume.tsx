// Next
import Link from 'next/link';
// React
import uuid from 'react-uuid';
// Interface
import type { IRepositoriesInfo } from 'interfaces';
// Styles__Material
import H4 from '@material-tailwind/react/Heading4';
import H5 from '@material-tailwind/react/Heading5';
// Styles__Bootstrap
import { ListGroup } from 'react-bootstrap';
// Styles__My
import styles from './myresume.module.scss';

interface IResumeListProps {
	arrayResumeInformation: Array<IRepositoriesInfo>;
	title: string;
	color: string;
	classItem: string;
}

export const MyResume: React.FC<IResumeListProps> = ({
	arrayResumeInformation,
	title,
	color,
	classItem,
}) => (
	<ListGroup.Item className={classItem}>
		<H4 color={color}>{title}</H4>
		<ListGroup>
			{arrayResumeInformation.map((resume) => (
				<ListGroup.Item key={uuid()}>
					<H5>
						<Link href={resume.link} passHref>
							{resume.name}
						</Link>
					</H5>
				</ListGroup.Item>
			))}
		</ListGroup>
	</ListGroup.Item>
);
