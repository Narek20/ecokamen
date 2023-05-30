import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import YandexPayment from '@/components/features/Payment/Yandex';
import SberbankPayment from '@/components/features/Payment/Sberbank';
import { getOrdersById } from '@/services/order.service';

import styles from './styles.module.scss';

const OrderSuccessPage = () => {
  const [orderDetails, setOrderDetails] = useState<any>({});
  const router = useRouter();
  const { orderId } = router.query;

  const getOrder = async () => {
    if (orderId) {
      const data = await getOrdersById(orderId as string);

      if (data.success) {
        setOrderDetails(data.data);
      }
    }
  };

  useEffect(() => {
    getOrder();
  }, [orderId]);

  return (
    <Box className={styles.successPage}>
      <Box className={styles.titleContainer}>
        <Typography className={styles.title}>Заказ оформлен</Typography>
      </Box>
      <Box className={styles.purchaseInformation}>
        <CheckCircleOutlineIcon
          sx={{ color: '#52C200', width: 70, height: 70 }}
        />
      </Box>
      <Box className={styles.infoContainer}>
        <Typography className={styles.infoText}>
          Ваш заказ успешно создан в {orderDetails?.createdAt}
        </Typography>
        <Typography className={styles.infoText}>
          Если вы выбрали способ оплаты не наличными, тогда чтобы подтвердить
          заказ оплатите с способом которую вы выбрали снизу
        </Typography>
      </Box>
      <Box className={styles.payment}>
        <Typography className={styles.paymentTitle}>Оплата заказа</Typography>
        {orderDetails?.paymentType === 'sberbank' && (
          <SberbankPayment price={orderDetails.price} />
        )}
        {orderDetails?.paymentType === 'bank card' && (
          <YandexPayment price={orderDetails.price} />
        )}
      </Box>
    </Box>
  );
};

export default OrderSuccessPage;
