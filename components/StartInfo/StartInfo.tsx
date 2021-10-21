// Elements
import { MySwiper } from 'components/MySwiper';
import { MyPasport } from 'components/MyPasport';

// Data
import { arrayMyPhoto } from 'data/swiper';
// Style__Me
import styles from './startinfo.module.scss';

export const StartInfo: React.FC = () => {
	return (
		<div className="main-container d-flex flex-wrap justify-content-around">
			<MySwiper
				classSwiper={styles['StartInfo-Swiper']}
				classImage={styles['StartInfo-Image']}
				photos={arrayMyPhoto}
			></MySwiper>
			<MyPasport color={'blueGray'} />
		</div>
	);
};
