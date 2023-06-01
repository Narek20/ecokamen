import { Box } from '@mui/material';
import SidBarComponent from '@/components/features/SidBarComponent';
import StoneInformation from '@/components/features/StoneInformation';
import { categories } from '@/utils/constants/sidebar';

import styles from './styles.module.scss';

const StonePage = () => {
  return (
    <Box className={styles.stonePage}>
      <SidBarComponent categories={categories} />
      <StoneInformation />
    </Box>
  );
};

export default StonePage;
