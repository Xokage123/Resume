// Next
import Image from 'next/image';
// React
import uuid from 'react-uuid';
import { Carousel } from 'react-bootstrap';
// Styles__Me
import styles from './myswiper.module.scss';

interface ISwiperProps<T> {
	photos: Array<T>;
	classSwiper: string;
	classImage: string;
}

export const MySwiper: React.FC<ISwiperProps<StaticImageData>> = (props) => {
	const { photos, classSwiper, classImage } = props;
	return (
		<Carousel
			className={classSwiper}
			indicators={false}
			controls={false}
			touch={false}
			interval={6000}
		>
			{photos.map((photo) => {
				return (
					<Carousel.Item key={uuid()}>
						<Image className={classImage} src={photo} alt="First slide" />
					</Carousel.Item>
				);
			})}
		</Carousel>
	);
};
