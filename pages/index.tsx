import { StartInfo } from '../components/StartInfo';
import axios from 'axios';

// Types
import type { InferGetStaticPropsType } from 'next';
// Styles__My
import styles from '../styles/Home.module.css';

const Home = ({
	userRepositories,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	return <StartInfo userRepositories={userRepositories} />;
};

export const getStaticProps = async () => {
	console.log(process.env.NEXT_PUBLIC_URL_GITHUB_REPOSITORIES);
	const userRepositories = await axios.get(
		String(process.env.NEXT_PUBLIC_URL_GITHUB_REPOSITORIES)
	);
	if (userRepositories.status === 200) {
		return {
			props: {
				userRepositories: userRepositories.data,
			},
		};
	}
	return {
		props: {
			userRepositories: {},
		},
	};
};

export default Home;
