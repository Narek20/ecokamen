import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import CategoriesSidBar from '@/components/features/CategoriesSidebar';

import styles from './styles.module.scss';
import { categories } from '@/utils/constants/sidebar';

const StonePage = () => {
  const router = useRouter()


  return (
    <Box className={styles.content}>
      <Box>
        <Typography>{router.query.stone}</Typography>
        <CategoriesSidBar />
      </Box>
      <Box className={styles.lists}></Box>
    </Box>
  );
};

export default StonePage;
