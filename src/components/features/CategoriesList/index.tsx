import { Box } from '@mui/material';
import { categories } from '@/utils/constants/sidebar';
import CategoryCard from '../CategoryCard';

import styles from './styles.module.scss';


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
