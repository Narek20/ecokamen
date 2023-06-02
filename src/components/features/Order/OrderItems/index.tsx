import { FC, useContext } from 'react';
import { Box } from '@mui/material';
import { BasketContext } from '@/contexts/basket.context';
import PurchaseOrderCard from '../../PurchaseOrderCard';
import { IBasket } from '@/types/basket.types';

import styles from './styles.module.scss';

interface IProps {}

const OrderItems: FC<IProps> = ({}) => {
  const { basketItems } = useContext(BasketContext);
  
  return (
    <Box>
      {basketItems.map((item: IBasket) => (
        <PurchaseOrderCard key={item.title} {...item} />
      ))}
    </Box>
  );
};

export default OrderItems;
