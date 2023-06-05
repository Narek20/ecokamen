import { useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import OrderCard from '@/components/features/OrderCard';
import EmptyPage from '@/components/features/EmptyPage';
import { AuthContext } from '@/contexts/auth.context';
import { getCurrentOrders } from '@/services/order.service';
import { IOrder } from '@/types/order.types';

import styles from './styles.module.scss';

const CurrentOrdersPage = () => {
  const [orders, setOrders] = useState<IOrder[] | []>([]);

  const { userData } = useContext(AuthContext);

  const getOrders = async () => {
    if (userData._id) {
      const data = await getCurrentOrders(userData._id);

      if (data.success) {
        setOrders(data.data);
      }
    }
  };

  useEffect(() => {
    getOrders();
  }, []);

  if (!orders.length) {
    return (
      <Box className={styles.currentOrders}>
        <Box className={styles.header}>
          <Typography className={styles.title}>Текущие заказы</Typography>
        </Box>
        <EmptyPage type="currentOrders" />
      </Box>
    );
  }

  return (
    <Box className={styles.currentOrders}>
      <Box className={styles.header}>
        <Typography className={styles.title}>Текущие заказы</Typography>
      </Box>
      {orders.map((order) => (
        <OrderCard key={order.quantity + Math.random()} {...order} />
      ))}
    </Box>
  );
};

export default CurrentOrdersPage;
