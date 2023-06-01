import { FC } from 'react';
import Link from 'next/link';
import { Box } from '@mui/material';

import styles from './styles.module.scss';

interface IProps {
  categories: { title: string; imageHref: string; link: string }[];
}

const SidBarComponent: FC<IProps> = ({ categories }) => {
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

export default SidBarComponent;
