import { useContext, useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import ProfileSidebar from '@/components/features/ProfileSidebar';
import { AuthContext } from '@/contexts/auth.context';
import { getOrdersHistory } from '@/services/order.service';
import { IOrder } from '@/types/order.types';

import styles from './styles.module.scss';
import OrderCard from '@/components/features/OrderCard';
import { IStone } from '@/types/stone.types';

const OrdersHistoryPage = () => {
  const [orders, setOrders] = useState<Array<IOrder & IStone> | []>([]);

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

  return (
    <Box>
      <ProfileSidebar />
      <Box>
        {orders.map((order) => (
          <OrderCard
            key={order.quantity + Math.random()}
            {...order}
            imageHref={order.imageHrefs[0]}
          />
        ))}
      </Box>
    </Box>
  );
};

export default OrdersHistoryPage;
