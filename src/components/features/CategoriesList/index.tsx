import { Box } from '@mui/material';

import styles from './styles.module.scss';
import CategoryCard from '../CategoryCard';

const categories = [
  {
    title: 'asdsad',
    link: '/category/asdas',
    imageHref:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
  },
  {
    title: 'asdsdfsad',
    link: '/category/asdfssdas',
    imageHref:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
  },
  {
    title: 'asdsdfsad',
    link: '/category/adfsdas',
    imageHref:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
  },
  {
    title: 'asdsdfsad',
    link: '/category/adfsdas',
    imageHref:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
  },
  {
    title: 'asdsdfsad',
    link: '/category/adfsdas',
    imageHref:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
  },
  {
    title: 'asdsdfsad',
    link: '/category/adfsdas',
    imageHref:
      'https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png',
  },
];

const CategoriesList = () => {
  return (
    <Box className={styles.categories}>
      {categories.map((category) => (
        <CategoryCard key={category.title} {...category} />
      ))}
    </Box>
  );
};

export default CategoriesList;
