// Next
import Link from 'next/link';
// React
import uuid from 'react-uuid';
// Interface(TS)
import type { IListProps, IListElements } from '../../interfaces';
// Styles__React-Bootstrap
import { ListGroup } from 'react-bootstrap';
// Style__Tailwind
import H6 from '@material-tailwind/react/Heading6';
// Styles__My
import styles from './basislist.module.scss';

export const BasisList: React.FC<IListProps> = (props) => {
	const { elements, title, classList, classItem, color = 'blueGray' } = props;
	return (
		<>
			{title ? <H6 color={color}>{title}</H6> : null}
			<ListGroup color={color} className={classList}>
				{elements.map((element: IListElements) => {
					return (
						<ListGroup.Item className={classItem} key={uuid()}>
							{element.url ? (
								<Link href={element.url}>{element.text}</Link>
							) : (
								element.text
							)}
						</ListGroup.Item>
					);
				})}
			</ListGroup>
		</>
	);
};
