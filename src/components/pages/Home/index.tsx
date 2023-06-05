import { Box } from '@mui/material';
import CategoriesList from '@/components/features/CategoriesList';
import SidebarComponent from '@/components/features/SidebarComponent';
import { categories } from '@/utils/constants/sidebar';

import styles from './styles.module.scss';

const HomeComponent = () => {
  return (
    <Box className={styles.content}>
      <SidebarComponent categories={categories} />
      <Box className={styles.lists}>
        <CategoriesList />
      </Box>
    </Box>
  );
};

export default HomeComponent;
