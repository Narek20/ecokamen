import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, TextField, Typography } from '@mui/material';
import { IStone } from '@/types/stone.types';

import styles from './styles.module.scss';

const StoneCard: FC<IStone> = ({ title, imageHrefs, link, price }) => {
  return (
    <Link className={styles.card} href={link}>
      <Image width={100} height={100} src={imageHrefs[0]} alt="category" />
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
