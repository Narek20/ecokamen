import { FC } from 'react';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SberbankLogo from '@/assets/Images/sberbank.png'
import { OrderDetails } from '@/types/order.types';

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
          className={styles.paymentVariant}
          onClick={() =>
            handleChange('bank card', OrderDetails.PAYMENT_DETAILS)
          }
          sx={
            paymentVariant === 'bank card'
              ? {
                  boxShadow: '0px 3px 10px 1px #2075de',
                }
              : {}
          }
        >
          <CreditCardIcon sx={{ color: 'black', width: 60, height: 60 }} />
          <Typography className={styles.variantTitle}>
            Банковской картой
          </Typography>
        </Box>
        <Box
          className={styles.paymentVariant}
          onClick={() => handleChange('cash', OrderDetails.PAYMENT_DETAILS)}
          sx={
            paymentVariant === 'cash'
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
          className={styles.paymentVariant}
          onClick={() => handleChange('sberbank', OrderDetails.PAYMENT_DETAILS)}
          sx={
            paymentVariant === 'sberbank'
              ? {
                  boxShadow: '0px 3px 10px 1px #2075de',
                }
              : {}
          }
        >
          <Image src={SberbankLogo} width={130} height={30} alt="sberbank" />
        </Box>
      </Box>
    </Box>
  );
};

export default Payment;
