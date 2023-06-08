import { FC } from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import styles from './styles.module.scss';

interface IProps {
  type: string;
}

const EmptyPage: FC<IProps> = ({ type }) => {
  if (type === 'basket') {
    return (
      <Box className={styles.EmptyPage}>
        <ShoppingCartOutlinedIcon
          sx={{ width: 200, height: 200, color: 'black' }}
        />
        <Typography className={styles.emptyText}>Корзина пуста</Typography>
        <Typography className={styles.hintText}>
          <Link className={styles.link} href="/">
            Нажмите здесь
          </Link>{' '}
          чтобы продолжить покупки
        </Typography>
      </Box>
    );
  }

  if (type === 'currentOrders') {
    return (
      <Box className={styles.EmptyPage}>
        <ReceiptLongIcon sx={{ width: 200, height: 200, color: 'black' }} />
        <Typography className={styles.basketEmptyText}>
          У вас пока нету текущих заказов
        </Typography>
        <Typography className={styles.hintText}>
          <Link className={styles.link} href="/basket">
            Нажмите здесь
          </Link>{' '}
          чтобы посмотреть вашу корзину
        </Typography>
      </Box>
    );
  }

  return (
    <Box className={styles.EmptyPage}>
      <HistoryIcon sx={{ width: 200, height: 200, color: 'black' }} />
      <Typography className={styles.basketEmptyText}>
        У вас пока нету завершенных покупок
      </Typography>
      <Typography className={styles.hintText}>
        <Link className={styles.link} href="/current-orders">
          Нажмите здесь
        </Link>{' '}
        чтобы посмотреть текущие заказы
      </Typography>
    </Box>
  );
};

export default EmptyPage;
