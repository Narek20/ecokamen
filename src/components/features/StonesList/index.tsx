import { Box } from '@mui/material';

import styles from './styles.module.scss';
import CategoryCard from '../CategoryCard';
import StoneCard from '../StoneCard';

const categories = [
  {
    title: 'asdsad',
    link: '/category/asdas',
    imageHref:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
    price: 4000,
  },
  {
    title: 'asdsdfsad',
    link: '/category/asdfssdas',
    imageHref:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
    price: 4000,
  },
  {
    title: 'asdsdfsad',
    link: '/category/adfsdas',
    imageHref:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
    price: 4000,
  },
  {
    title: 'asdsdfsad',
    link: '/category/adfsdas',
    imageHref:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
    price: 4000,
  },
  {
    title: 'asdsdfsad',
    link: '/category/adfsdas',
    imageHref:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
    price: 4000,
  },
  {
    title: 'asdsdfsad',
    link: '/category/adfsdas',
    imageHref:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
    price: 4000,
  },
  {
    title: 'asdsdfsad',
    link: '/category/adfsdas',
    imageHref:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
    price: 4000,
  },
];

const StonesList = () => {
  return (
    <Box className={styles.stones}>
      {categories.map((category) => (
        <StoneCard key={category.title} {...category} />
      ))}
    </Box>
  );
};

export default StonesList;
