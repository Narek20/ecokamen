import { Box } from '@mui/material';
import CategoriesSidBar from '@/components/features/CategoriesSidebar';
import StoneInformation from '@/components/features/StoneInformation';

import styles from './styles.module.scss';

const StonePage = () => {
  return (
    <Box className={styles.stonePage}>
      <CategoriesSidBar />
      <StoneInformation />
    </Box>
  );
};

export default StonePage;
