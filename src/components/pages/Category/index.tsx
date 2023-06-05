import { Box } from '@mui/material';
import StonesList from '@/components/features/StonesList';
import SidebarComponent from '@/components/features/SidebarComponent';
import { categories } from '@/utils/constants/sidebar';

import styles from './styles.module.scss';

const CategoryComponent = () => {
  return (
    <Box className={styles.content}>
      <SidebarComponent categories={categories}/>
      <Box className={styles.lists}>
        <StonesList />
      </Box>
    </Box>
  );
};

export default CategoryComponent;
