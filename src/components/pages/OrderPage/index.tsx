import { useState } from 'react';
import { Typography, Box } from '@mui/material';
import { Button } from '@material-ui/core';
import Payment from '@/components/features/Order/Payment';
import Delivery from '@/components/features/Order/Delivery';
import BuyerInfo from '@/components/features/Order/BuyerInfo';
import OrderItems from '@/components/features/Order/OrderItems';
import StepperComponent from '@/components/features/Stepper';
import { IOrderDetails, OrderDetails } from '@/types/order.types';

import styles from './styles.module.scss';

const OrderComponents = [
  { component: BuyerInfo },
  { component: Delivery },
  { component: Payment },
  { component: OrderItems },
];

const OrderPage = () => {
  const [orderDetails, setOrderDetails] = useState<IOrderDetails>({
    personalDetails: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
    },
    deliveryDetails: '',
    paymentDetails: '',
    productIds: [],
  });
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [key: number]: boolean;
  }>({});

  const ChangeActiveStep = (key: number) => {
    setActiveStep(key);
  };

  const handleChange = (
    value: string,
    type: OrderDetails,
    key?: 'fullName' | 'email' | 'phone' | 'address'
  ) => {
    if (type === 'personalDetails' && key) orderDetails[type][key] = value;

    if (type === 'productIds') orderDetails[type] = value.split(',');

    if (type === 'deliveryDetails' || type === 'paymentDetails')
      orderDetails[type] = value;

    setOrderDetails({ ...orderDetails });
  };

  const onClick = () => {
    setActiveStep(activeStep + 1);
    const currentKey = Object.keys(orderDetails)[activeStep];
    
    if (
      currentKey === 'personalDetails' &&
      Object.values(orderDetails.personalDetails).every(
        (elem: string) => elem !== ''
      )
    ) {
      setCompleted({ ...completed, [activeStep]: true });
      return;
    } else {
      setCompleted({ ...completed, [activeStep]: false });
    }

    if (
      currentKey === 'productIds' &&
      orderDetails.productIds.every((ids: string) => ids !== '')
    ) {
      setCompleted({ ...completed, [activeStep]: true });
      return;
    } else {
      setCompleted({ ...completed, [activeStep]: false });
    }

    if (
      (currentKey === 'deliveryDetails' || currentKey === 'paymentDetails') &&
      orderDetails[currentKey] !== ''
    ) {
      setCompleted({ ...completed, [activeStep]: true });
    } else {
      setCompleted({ ...completed, [activeStep]: false });
    }

  };

  return (
    <Box className={styles.orderPage}>
      <Box>
        <StepperComponent
          activeStep={activeStep}
          completed={completed}
          onChange={ChangeActiveStep}
        />
        <Box className={styles.orderComponent}>
          {OrderComponents.map((orderComponent, index) => (
            <>
              {index === activeStep && (
                <orderComponent.component
                  handleChange={handleChange}
                  orderDetails={orderDetails}
                  deliveryVariant={orderDetails.deliveryDetails}
                  paymentVariant={orderDetails.paymentDetails}
                />
              )}
            </>
          ))}
        </Box>
      </Box>
      <Box className={styles.actions}>
        <Button
          className={styles.previousBtn}
          variant="outlined"
          disabled={activeStep === 0}
          onClick={() => setActiveStep(activeStep - 1)}
        >
          Предыдущий
        </Button>
        <Button
          className={styles.nextBtn}
          variant="outlined"
          disabled={activeStep === 3}
          onClick={onClick}
        >
          Следующий
        </Button>
      </Box>
    </Box>
  );
};

export default OrderPage;
