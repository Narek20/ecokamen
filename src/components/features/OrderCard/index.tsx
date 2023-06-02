import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { dateFormatter } from '@/utils/functions/dateFormatter';
import { IOrder } from '@/types/order.types';

import styles from './styles.module.scss';

const OrderCard: FC<IOrder> = ({
  createdAt,
  stoneIds,
  price,
  deliveryPrice,
  paymentType,
}) => {
  return (
    <Box className={styles.card}>
      <Box className={styles.header}>
        <Typography className={styles.orderDetails}>
          Заказ от {dateFormatter(createdAt)}, товаров {stoneIds.length}. Общая
          сумма {+price + +deliveryPrice}
        </Typography>
      </Box>
      <Box className={styles.details}>
        <Typography className={styles.detailTitle}>Оплата</Typography>
        <Typography className={styles.purchasePrice}>
          Сумма к оплате {price}
        </Typography>
        <Typography className={styles.purchaseType}>
          Способ оплаты{' '}
          {paymentType === 'sberbank'
            ? 'Сбербанк'
            : paymentType === 'bank card'
            ? 'банковская карта'
            : 'Наличными'}
        </Typography>
      </Box>
      <Box className={styles.details}>
        <Typography className={styles.detailTitle}>Доставка</Typography>
        <Typography className={styles.purchasePrice}>
          Сумма доставки {deliveryPrice}
        </Typography>
        <Typography className={styles.purchaseType}>
          Способ доставки {deliveryPrice == 0 ? 'Самовызов' : 'Наша доставка'}
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderCard;
