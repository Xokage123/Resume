// Next
import Link from 'next/link';
// React
import uuid from 'react-uuid';
// Interfaces__Interface
import type { IRepositoriesInfo } from 'interfaces';
// Styles__Material
import H4 from '@material-tailwind/react/Heading4';
import H5 from '@material-tailwind/react/Heading5';
// Styles__Bootstrap
import { ListGroup } from 'react-bootstrap';
// Styles__My
import styles from './myrepositories.module.scss';

interface IRepositoriesListProps {
	title: string;
	color: string;
	repoInfo: Array<IRepositoriesInfo>;
	classItem: string;
}

export const MyRepositories: React.FC<IRepositoriesListProps> = ({
	repoInfo,
	title,
	color,
	classItem,
}) => (
	<ListGroup.Item className={classItem}>
		<H4 color={color}>{title}</H4>
		<ListGroup>
			{repoInfo.map((repo) => (
				<ListGroup.Item key={uuid()}>
					<H5>
						<Link href={repo.link} passHref>
							{repo.name}
						</Link>
					</H5>
				</ListGroup.Item>
			))}
		</ListGroup>
	</ListGroup.Item>
);
