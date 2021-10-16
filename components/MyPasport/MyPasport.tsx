// Next
import Link from 'next/link';
// Interfaces
import type { TColorTailwind } from '../../interfaces/type/colors';
import type { IMyPasportProps } from '../../interfaces';
// Data
import { myPasportInformation } from '../../data/pasport';
// Components
import { DropdownEducation } from './DropdownEducation';
import { BasisList } from '../BasisList';
// Styles__Tailwind
import H3 from '@material-tailwind/react/Heading3';
import H4 from '@material-tailwind/react/Heading4';
import H5 from '@material-tailwind/react/Heading5';
import Paragraph from '@material-tailwind/react/Paragraph';
// Styles__Bootstrap
import { ListGroup } from 'react-bootstrap';
// Styles__My
import styles from './mypasport.module.scss';

export const MyPasport: React.FC<IMyPasportProps> = ({
	// eslint-disable-next-line react/prop-types
	color,
}) => {
	return (
		<>
			<section>
				<H3 color={color}>{myPasportInformation.initial}</H3>
				<H4 color={color}>Возраст: {myPasportInformation.years}</H4>
				<H4 color={color}>Страна проживания: {myPasportInformation.country}</H4>
				<H4 color={color}>Город проживания: {myPasportInformation.city}</H4>
				<BasisList
					title="Владею следующими языками программирования:"
					elements={myPasportInformation.programmingLanguages}
					classList={styles['MyPasport-List_content_programmingLanguages']}
					classItem={styles['MyPasport-Item_content_programmingLanguages']}
				/>
				<DropdownEducation universities={myPasportInformation.education} />
			</section>
			<section>
				<H4 color={color}>Информация обо мне:</H4>
				<Paragraph color={color}>
					{myPasportInformation.inforamtionAboutMy}
				</Paragraph>
				<H4 color={color}>Хранилище моих работ:</H4>
				<ListGroup>
					<ListGroup.Item>
						<H5>
							<Link
								href={String(process.env.NEXT_PUBLIC_URL_MY_GITHUB)}
								passHref
							>
								Github
							</Link>
						</H5>
					</ListGroup.Item>
					<ListGroup.Item>
						<H5>
							<Link
								href={'https://gitlab.skillbox.ru/artemov_maksim_2'}
								passHref
							>
								GitLab
							</Link>
						</H5>
					</ListGroup.Item>
				</ListGroup>
			</section>
		</>
	);
};
