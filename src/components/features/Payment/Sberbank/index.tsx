import { FC } from 'react';
import Image from 'next/image';
import { Box, Typography, Button } from '@mui/material';
import { imageUrls } from '@/utils/constants/imageUrls';

import styles from './styles.module.scss';

interface IProps {
  price: number;
}

const SberbankPayment: FC<IProps> = ({ price }) => {
  return (
    <Box className={styles.sberbankPayment}>
      <Box className={styles.paymentVariant}>
        <Image
          src={imageUrls.sberbank}
          width={160}
          height={40}
          alt="sberbank"
        />
        <Typography className={styles.variantTitle}>Сбербанк</Typography>
      </Box>
      <Typography className={styles.totalPrice}>
        Сумма к оплате: {price}
      </Typography>
      <Button className={styles.payBtn}>Оплатить</Button>
    </Box>
  );
};

export default SberbankPayment;
