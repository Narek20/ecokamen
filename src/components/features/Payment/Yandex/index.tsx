import { FC } from 'react';
import Image from 'next/image';
import { Box, Typography, Button } from '@mui/material';
import { imageUrls } from '@/utils/constants/imageUrls';

import styles from './styles.module.scss';

interface IProps {
  price: number;
}

const YandexPayment: FC<IProps> = ({ price }) => {
  return (
    <Box className={styles.yandexPayment}>
      <Box className={styles.paymentVariant}>
        <Image
          src={imageUrls.bankCards}
          width={100}
          height={80}
          alt="bankCards"
        />
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
