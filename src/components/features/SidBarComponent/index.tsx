import { FC } from 'react';
import Link from 'next/link';
import { Box, MenuItem, Select, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import styles from './styles.module.scss';

interface IProps {
  categories: { title: string; imageHref: string; link: string }[];
}

const SidBarComponent: FC<IProps> = ({ categories }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  if (isMobile) {
    return (
      <Select className={styles.select}>
        {categories.map(({ link, title }) => (
          <Link key={title} className={styles.category} href={link}>
            <MenuItem>{title}</MenuItem>
          </Link>
        ))}
      </Select>
    );
  }

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
