import { FC } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { imageUrls } from '@/utils/constants/imageUrls';
import { OrderDetails, PaymentTypes } from '@/types/order.types';

import styles from './styles.module.scss';

interface IProps {
  paymentVariant: string;
  handleChange: (value: string, type: OrderDetails) => void;
}

const Payment: FC<IProps> = ({ paymentVariant, handleChange }) => {
  return (
    <Box className={styles.paymentDetails}>
      <Typography className={styles.title}>Варианты Оплаты</Typography>
      <Box className={styles.variantsContainer}>
        <Box
        key={1}
          className={styles.paymentVariant}
            // handleChange(PaymentTypes.BANK_CARD, OrderDetails.PAYMENT_DETAILS)
          sx={{opacity: 0.5}}
          // sx={
          //   paymentVariant === PaymentTypes.BANK_CARD
          //     ? {
          //         boxShadow: '0px 3px 10px 1px #2075de',
          //       }
          //     : {}
          // }
        >
          <CreditCardIcon sx={{ color: 'black', width: 60, height: 60 }} />
          <Typography className={styles.variantTitle}>
            Банковской картой
          </Typography>
        </Box>
        <Box
        key={2}
          className={styles.paymentVariant}
          onClick={() =>
            handleChange(PaymentTypes.CASH, OrderDetails.PAYMENT_DETAILS)
          }
          sx={
            paymentVariant === PaymentTypes.CASH
              ? {
                  boxShadow: '0px 3px 10px 1px #2075de',
                }
              : {}
          }
        >
          <AttachMoneyIcon sx={{ color: 'black', width: 60, height: 60 }} />
          <Typography className={styles.variantTitle}>Наличными</Typography>
        </Box>
        <Box
        key={3}
          className={styles.paymentVariant}
            // handleChange(PaymentTypes.SBERBANK, OrderDetails.PAYMENT_DETAILS)
          sx={{opacity: 0.5}}
          // sx={
          //   paymentVariant === PaymentTypes.SBERBANK
          //     ? {
          //         boxShadow: '0px 3px 10px 1px #2075de',
          //       }
          //     : {}
          // }
        >
          <Image
            src={imageUrls.sberbank}
            width={130}
            height={30}
            alt="sberbank"
          />
        </Box>
      </Box>
      <Typography className={styles.hint}>Онлайн оплаты на разработке</Typography>
    </Box>
  );
};

export default Payment;
