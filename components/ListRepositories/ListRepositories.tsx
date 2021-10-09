// Utils
import { dateFormater } from '../../utils/index';

import { Colors } from '../../data/colors';

import { DropdownButton, Dropdown } from 'react-bootstrap';
// Styles_My
import styles from './listrepositories.module.scss';

interface IListRepositoriesProps {
	userRepositories: Array<object>;
}

export const ListRepositories: React.FC<IListRepositoriesProps> = (props) => {
	const { userRepositories } = props;
	return (
		<DropdownButton title="Ссылки на мои репозитории">
			{userRepositories.map((element: any) => {
				return (
					<li
						key={element.id}
						className={`${styles['Repositories-item']} border-botom-${Colors.GrayDark}`}
					>
						<Dropdown.Item className="" target="_post" href={element.html_url}>
							<h6 className="">Название</h6>
							<p className="">
								{
									element.html_url.split(
										`${process.env.NEXT_PUBLIC_GITHUB_ACCOUNT_NAME}/`
									)[1]
								}
							</p>
							<h6 className="">Дата создания</h6>
							<p className="">{dateFormater(element.created_at)}</p>
							<h6 className="">Дата последнего обновления</h6>
							<p className="">{dateFormater(element.updated_at)}</p>
						</Dropdown.Item>
					</li>
				);
			})}
		</DropdownButton>
	);
};
