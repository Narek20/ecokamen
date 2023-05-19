import { FC } from 'react';
import Image from 'next/image';
import { Box } from '@material-ui/core';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import styles from './styles.module.scss';

interface IProps {
  images: string[];
}

const ImageCarousel: FC<IProps> = ({ images }) => {
  return (
    <Carousel className={styles.carousel}>
      {images.map((image) => (
        <Box key={image}>
          <img src={image} alt={image} />
        </Box>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
