import { FC } from 'react';
import Link from 'next/link';
import { Box, Button, TextField, Typography } from '@mui/material';
import { IStone } from '@/types/stone.types';

import styles from './styles.module.scss';

const StoneCard: FC<IStone> = ({ title, imageHrefs, link, price }) => {
  return (
    <Link className={styles.card} href={link}>
      <img className={styles.img} src={imageHrefs[0]} alt="category" />
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

/*
import { FC } from 'react';
import Link from 'next/link';
import { Box, IconButton, Button, Typography } from '@mui/material';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import { IStone } from '@/types/stone.types';
import Logo from '@/assets/Icons/basket.svg';

import styles from './styles.module.scss';

const StoneCard: FC<IStone> = ({ title, imageHrefs, link, price }) => {
  return (
    <Link className={styles.card} href={link}>
      <Box className={styles.content}>
        <img className={styles.img} src={imageHrefs[0]} alt="category" />
        <Typography className={styles.title}>{title}</Typography>
      </Box>
      <Box className={styles.actions}>
         <Button className={styles.actionBtn}>
          <LocalShippingOutlinedIcon sx={{ color: 'black' }}/>
          <Typography className={styles.actionTitle}>Заказать</Typography>
        </Button>
        <Button className={styles.actionBtn}>
          <LocalMallOutlinedIcon sx={{ color: 'black' }} />
          <Typography className={styles.actionTitle}>
            Добавить в корзину
          </Typography>
        </Button> 
        <Box className={styles.actions}>
          <Button className={styles.addBasketBtn}>
            <LocalMallOutlinedIcon sx={{ color: 'white' }} />
          </Button>
          <Typography className={styles.price}>{price} руб./тн</Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default StoneCard;

*/
