import { FC } from 'react';
import { TextField, Box, Typography } from '@mui/material';
import { IOrderDetails, OrderDetails } from '@/types/order.types';
import MapComponent from '../../YandexMap';

import styles from './styles.module.scss';

interface IProps {
  orderDetails: IOrderDetails;
  handleChange: (
    value: string,
    type: OrderDetails,
    key?: 'fullName' | 'email' | 'phone' | 'address'
  ) => void;
}

const BuyerInfo: FC<IProps> = ({ orderDetails, handleChange }) => {
  return (
    <Box className={styles.buyerInfo}>
      <Typography className={styles.title}>Персональные данные</Typography>
      <TextField
        className={styles.textField}
        defaultValue={orderDetails.personalDetails.fullName}
        label="Ф.И.О."
        variant="outlined"
        onChange={(evt) =>
          handleChange(
            evt.target.value,
            OrderDetails.PERSONAL_DETAILS,
            'fullName'
          )
        }
      />
      <TextField
        className={styles.textField}
        defaultValue={orderDetails.personalDetails.email}
        label="E-Mail"
        variant="outlined"
        onChange={(evt) =>
          handleChange(evt.target.value, OrderDetails.PERSONAL_DETAILS, 'email')
        }
      />
      <TextField
        className={styles.textField}
        defaultValue={orderDetails.personalDetails.phone}
        label="Телефон"
        variant="outlined"
        onChange={(evt) =>
          handleChange(evt.target.value, OrderDetails.PERSONAL_DETAILS, 'phone')
        }
      />
      <TextField
        className={styles.textField}
        defaultValue={orderDetails.personalDetails.address}
        multiline
        label="Детали Адреса доставки"
        variant="outlined"
        onChange={(evt) =>
          handleChange(
            evt.target.value,
            OrderDetails.PERSONAL_DETAILS,
            'address'
          )
        }
      />
      <MapComponent />
    </Box>
  );
};

export default BuyerInfo;
