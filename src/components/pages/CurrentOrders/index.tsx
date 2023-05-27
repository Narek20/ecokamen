import { useContext, useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import ProfileSidebar from '@/components/features/ProfileSidebar';
import { AuthContext } from '@/contexts/auth.context';
import { getCurrentOrders } from '@/services/order.service';
import { IOrder } from '@/types/order.types';

import styles from './styles.module.scss';

const CurrentOrdersPage = () => {
  const [orders, setOrders] = useState<IOrder>();

  const { userData } = useContext(AuthContext);

  const getOrders = async () => {
    if (userData._id) {
      const data = await getCurrentOrders(userData._id);

      if(data.success) {
        setOrders(data.data)
      }
    }
  };

  useEffect(() => {
    getOrders();
  }, []);
  
  return (
    <Box>
      <ProfileSidebar />
    </Box>
  );
};

export default CurrentOrdersPage;
