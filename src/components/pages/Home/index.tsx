import { Box } from '@mui/material';
import CategoriesList from '@/components/features/CategoriesList';
import CategoriesSidBar from '@/components/features/CategoriesSidebar';

import styles from './styles.module.scss';

const HomeComponent = () => {
  return (
    <Box className={styles.content}>
      <CategoriesSidBar />
      <Box className={styles.lists}>
        <CategoriesList />
      </Box>
    </Box>
  );
};

export default HomeComponent;
