import Link from 'next/link';
import { Box } from '@mui/material';
import { categories } from '@/utils/constants/sidebar';

import styles from './styles.module.scss';

const CategoriesSidBar = () => {
  return (
    <Box className={styles.categories}>
      {categories.map(({ link, title }) => (
        <Link key={title} className={styles.category} href={link}>
          {title}
        </Link>
      ))}
    </Box>
  );
};

export default CategoriesSidBar;
