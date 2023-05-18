import { Box } from '@mui/material';
import StonesList from '@/components/features/StonesList';
import CategoriesSidBar from '@/components/features/CategoriesSidebar';

import styles from './styles.module.scss';

const CategoryComponent = () => {
  return (
    <Box className={styles.content}>
      <CategoriesSidBar />
      <Box className={styles.lists}>
        <StonesList />
      </Box>
    </Box>
  );
};

export default CategoryComponent;
