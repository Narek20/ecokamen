import {
  FC,
  cloneElement,
} from 'react';
import { Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import styles from './styles.module.scss';

interface IProps {
  images: string[];
}

const ImageCarousel: FC<IProps> = ({ images }) => {
  return (
    <Carousel
      autoPlay
      className={styles.carousel}
      renderThumbs={(children) =>
        children.map(
          (
            item: any,
            index
          ) => cloneElement(item, { className: 'thumb' })
        )
      }
    >
      {images.map((image) => (
        <Box className={styles.carousel} key={image}>
          <img className={styles.image} src={image} alt={image} />
        </Box>
      ))}
    </Carousel>
  );
};

export default ImageCarousel;
