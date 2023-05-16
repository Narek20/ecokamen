import { FC } from 'react';
import Link from 'next/link';
import { Box, Button, TextField, Typography } from '@mui/material';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  imageHref: string;
  link: string;
  price: number;
}

const StoneCard: FC<IProps> = ({ title, imageHref, link, price }) => {
  return (
    <Link className={styles.card} href={link}>
      <img className={styles.img} src={imageHref} alt="category" />
      <Typography className={styles.title}>{title}</Typography>
      <Typography className={styles.price}>{price} руб./тн</Typography>
      <Box className={styles.purchaseContainer}>
        <TextField className={styles.qtyInput} type="number" />
        <Button className={styles.purchaseBtn}>Заказать</Button>
      </Box>
    </Link>
  );
};

export default StoneCard;
