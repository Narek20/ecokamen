import { FC } from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  imageHref: string;
  link: string;
}

const CategoryCard: FC<IProps> = ({ title, imageHref, link }) => {
  return (
    <Link className={styles.card} href={link}>
      <img className={styles.img} src={imageHref} alt="category" />
      <Typography className={styles.title}>{title}</Typography>
    </Link>
  );
};

export default CategoryCard;
