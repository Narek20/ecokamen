import { FC } from 'react';
import { Box } from '@material-ui/core';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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
