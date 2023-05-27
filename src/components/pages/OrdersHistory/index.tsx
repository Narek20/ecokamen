import { useContext, useEffect, useState } from 'react';
import { Box } from '@material-ui/core'
import ProfileSidebar from '@/components/features/ProfileSidebar'
import { AuthContext } from '@/contexts/auth.context';
import { getOrdersHistory } from '@/services/order.service';
import { IOrder } from '@/types/order.types';

import styles from './styles.module.scss'

const OrdersHistoryPage = () => {
  const [orders, setOrders] = useState<IOrder>();

  const { userData } = useContext(AuthContext);

  const getOrders = async () => {
    if (userData._id) {
      console.log("adasdasdasdasda")
      const data = await getOrdersHistory(userData._id);

      if(data.success) {
        setOrders(data.data)
      }
    }
  };

  useEffect(() => {
    getOrders();
  }, [userData._id]);

  return (
    <Box><ProfileSidebar /></Box>
  )
}

export default OrdersHistoryPage