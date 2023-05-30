import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import SnowshoeingIcon from '@mui/icons-material/Snowshoeing';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { OrderDetails } from '@/types/order.types';

import styles from './styles.module.scss';

interface IProps {
  deliveryVariant: string;
  handleChange: (value: string, type: OrderDetails) => void;
}

const Delivery: FC<IProps> = ({ deliveryVariant, handleChange }) => {
  return (
    <Box className={styles.deliveryDetails}>
       <Typography className={styles.title}>Варианты доставки</Typography>
       <Box className={styles.variantsContainer}>
      <Box
        className={styles.deliveryVariant}
        onClick={() => handleChange('0', OrderDetails.DELIVERY_DETAILS)}
        sx={
          deliveryVariant === '0'
            ? {
                boxShadow: '0px 3px 10px 1px #2075de',
              }
            : {}
        }
      >
        <SnowshoeingIcon sx={{ color: 'black', width: 60, height: 60 }} />
        <Typography className={styles.variantTitle}>Самовывоз</Typography>
        <Typography className={styles.variantPrice}>
          Цена: <Typography className={styles.price}>0руб</Typography>
        </Typography>
      </Box>
      <Box
        className={styles.deliveryVariant}
        onClick={() =>
          handleChange('1000', OrderDetails.DELIVERY_DETAILS)
        }
        sx={
          deliveryVariant === '1000'
            ? {
                boxShadow: '0px 3px 10px 1px #2075de',
              }
            : {}
        }
      >
        <LocalShippingIcon sx={{ color: 'black', width: 60, height: 60 }} />
        <Typography className={styles.variantTitle}>Наша доставка</Typography>
        <Typography className={styles.variantPrice}>
          Цена: <Typography className={styles.price}>1000руб</Typography>
        </Typography>
      </Box>
      </Box>
    </Box>
  );
};

export default Delivery;
