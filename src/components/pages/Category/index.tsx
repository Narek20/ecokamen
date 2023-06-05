import { Box } from '@mui/material';
import StonesList from '@/components/features/StonesList';
import SidBarComponent from '@/components/features/SidbarComponent';
import { categories } from '@/utils/constants/sidebar';

import styles from './styles.module.scss';

const CategoryComponent = () => {
  return (
    <Box className={styles.content}>
      <SidBarComponent categories={categories}/>
      <Box className={styles.lists}>
        <StonesList />
      </Box>
    </Box>
  );
};

export default CategoryComponent;
