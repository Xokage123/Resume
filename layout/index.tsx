import { StrictMode } from 'react';
import { useRouter } from 'next/router';

import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import styles from './main.module.scss';

interface ILauoutProps {
	children?: React.ReactNode;
}

const MainLayout: React.FC<ILauoutProps> = (props) => {
	const router = useRouter();

	const { children } = props;

	return (
		<StrictMode>
			<Header />
			<main className={styles.Main}>{children}</main>
			<Footer />
		</StrictMode>
	);
};

export default MainLayout;
