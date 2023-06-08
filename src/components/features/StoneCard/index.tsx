import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@material-ui/core';
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { IStone } from '@/types/stone.types';

import styles from './styles.module.scss';

const StoneCard: FC<IStone> = ({ title, imageHrefs, link, price }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Link className={styles.card} href={link}>
      <Box className={styles.titleAndImgContainer}>
        <Image
          width={isMobile ? 200 : 100}
          height={isMobile ? 200 : 100}
          src={imageHrefs[0]}
          alt="category"
        />
        <Typography className={styles.title}>{title}</Typography>
      </Box>
      <Typography className={styles.price}>{price} руб./тн</Typography>
      <Box className={styles.purchaseContainer}>
        <TextField className={styles.qtyInput} type="number" />
        <Button className={styles.purchaseBtn}>Заказать</Button>
      </Box>
    </Link>
  );
};

export default StoneCard;
