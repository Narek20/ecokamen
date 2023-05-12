import { Box } from '@mui/material';

import styles from './styles.module.scss';
import Link from 'next/link';

const CategoriesSidBar = () => {
  return (
    <Box className={styles.categories}>
      <Link href="/category/plitnyak" className={styles.category}>Плитняк</Link>
      <Link href="/category/galka" className={styles.category}>Галька</Link>
    </Box>
  );
};

export default CategoriesSidBar;
