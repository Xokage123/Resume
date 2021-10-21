// Next
import Image from 'next/image';
// GSAP
import { gsap } from 'gsap';
// React
import uuid from 'react-uuid';
import { useEffect, useRef } from 'react';
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
	useEffect(() => {
		gsap.to(`.${classSwiper}`, { opacity: '1', duration: '3' });
	}, [classSwiper]);
	return (
		<Carousel
			className={classSwiper}
			indicators={false}
			controls={false}
			touch={false}
			interval={4000}
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
