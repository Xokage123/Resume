// React
import uuid from 'react-uuid';
// Data
import { contactsInfo } from 'data/contacts';
// Components
import { FrameTooltip } from '../Tooltip';
// Styles__Tailwind
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
// Images
import GmailIcon from '../../public/photo/Contacts/gmail.png';
import GithublIcon from '../../public/photo/Contacts/github.png';
// Styles__My
import Styles from './footer.module.scss';

export const Footer = () => {
	return (
		<footer className={Styles.Footer}>
			<div className="main-container">
				<Nav className={Styles.FooterList}>
					{contactsInfo.map((element) => (
						<NavLink
							key={uuid()}
							href={element.href}
							className={Styles.FooterIcon}
							ripple="light"
						>
							<FrameTooltip
								textTooltip={element.textTooltip}
								component={element.image}
							/>
						</NavLink>
					))}
				</Nav>
			</div>
		</footer>
	);
};
