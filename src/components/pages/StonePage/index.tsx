import { Box } from '@mui/material';
import SidebarComponent from '@/components/features/SidebarComponent';
import StoneInformation from '@/components/features/StoneInformation';
import { categories } from '@/utils/constants/sidebar';

import styles from './styles.module.scss';

const StonePage = () => {
  return (
    <Box className={styles.stonePage}>
      <SidebarComponent categories={categories} />
      <StoneInformation />
    </Box>
  );
};

export default StonePage;
