import { FC } from 'react';
import { Box, Typography, Button } from '@mui/material';
import Image from 'next/image';
import BankCardsImg from '@/assets/Images/bankcards.png';

import styles from './styles.module.scss';

interface IProps {
  price: number;
}

const YandexPayment: FC<IProps> = ({ price }) => {
  return (
    <Box className={styles.yandexPayment}>
      <Box className={styles.paymentVariant}>
        <Image src={BankCardsImg} width={100} height={80} alt="sberbank" />
        <Typography className={styles.variantTitle}>
          Банковской картой
        </Typography>
      </Box>
      <Typography className={styles.totalPrice}>
        Сумма к оплате: {price}
      </Typography>
      <Button className={styles.payBtn}>Оплатить</Button>
    </Box>
  );
};

export default YandexPayment;
