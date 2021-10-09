// Next
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
// React
import uuid from 'react-uuid';
// Data
import { arrayNavigateLinksInfo } from 'data/navigate';
// Styles__Tailwind
import Icon from '@material-tailwind/react/Icon';
// Styles__My
import styles from './header.module.scss';
import React from 'react';

export const Header: React.FC = () => {
	const router = useRouter();
	return (
		<header className={`${styles.Header} bg-primary`}>
			<div className="main-container">
				<ul className={`${styles['Header-List']}`}>
					{arrayNavigateLinksInfo.map((linkInfo) => {
						return (
							<li key={uuid()}>
								<Link href={linkInfo.link} passHref>
									<a
										className={`
											${linkInfo.link === router.pathname ? 'text-warning' : ''}
											${styles['Header-Link']}
										`}
									>
										<Icon name={linkInfo.logoName} size="xl" />
										{linkInfo.text}
									</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</header>
	);
};
