// Next
import { useRouter } from 'next/dist/client/router';
// React
import uuid from 'react-uuid';
import type { IDropdownEducationProps } from '../../../interfaces';
// Styles__Tailwind
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownLink from '@material-tailwind/react/DropdownLink';
// Styles__My
import styles from './dropdowneducation.module.scss';
import React from 'react';

export const DropdownEducation: React.FC<IDropdownEducationProps> = ({
	universities,
}) => {
	const router = useRouter();
	return (
		<Dropdown
			color="blue"
			placement="bottom-start"
			buttonText="Образование"
			buttonType="filled"
			size="regular"
			rounded={false}
			block={false}
			ripple="light"
		>
			{universities.map((university) => {
				return (
					<DropdownLink
						key={uuid()}
						color="blue"
						ripple="light"
						onClick={(e: React.MouseEvent<HTMLLinkElement>) => {
							e.preventDefault();
							router.replace(university.link);
						}}
					>
						<ul>
							<li>{university.name}</li>
							<li>Начало обучения: {university.startDate}</li>
							<li>Конец обучения: {university.endDate} </li>
							<li>Степень: {university.degree}</li>
						</ul>
					</DropdownLink>
				);
			})}
		</Dropdown>
	);
};
