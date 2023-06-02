import { useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import EmptyPage from '@/components/features/EmptyPage';
import OrderCard from '@/components/features/OrderCard';
import { AuthContext } from '@/contexts/auth.context';
import { getOrdersHistory } from '@/services/order.service';
import { IOrder } from '@/types/order.types';

import styles from './styles.module.scss';

const OrdersHistoryPage = () => {
  const [orders, setOrders] = useState<Array<IOrder> | []>([]);

  const { userData } = useContext(AuthContext);

  const getOrders = async () => {
    if (userData._id) {
      const data = await getOrdersHistory(userData._id);

      if (data.success) {
        setOrders(data.data);
      }
    }
  };

  useEffect(() => {
    getOrders();
  }, [userData._id]);

  if (!orders.length) {
    return (
      <Box className={styles.ordersHistory}>
        <Box style={{ width: '100%' }}>
          <Typography className={styles.title}>История заказов</Typography>
        </Box>
        <EmptyPage type="ordersHistory" />
      </Box>
    );
  }

  return (
    <Box className={styles.ordersHistory}>
      <Box style={{ width: '100%' }}>
        <Typography className={styles.title}>История заказов</Typography>
      </Box>
      {orders.map((order) => (
        <OrderCard key={order.quantity + Math.random()} {...order} />
      ))}
    </Box>
  );
};

export default OrdersHistoryPage;
