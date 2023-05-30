import { FC, useContext } from 'react';
import { Box } from '@mui/material';

import styles from './styles.module.scss';
import { TextField } from '@material-ui/core';
import { BasketContext } from '@/contexts/basket.context';
import { IBasket } from '@/types/basket.types';
import OrderCard from '../../OrderCard';

interface IProps {}

const OrderItems: FC<IProps> = ({}) => {
  const { basketItems } = useContext(BasketContext);
  
  return (
    <Box>
      {basketItems.map((item: IBasket) => (
        <OrderCard key={item.title} {...item} />
      ))}
    </Box>
  );
};

export default OrderItems;
