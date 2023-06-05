import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Box } from '@mui/material';
import Payment from '@/components/features/Order/Payment';
import Delivery from '@/components/features/Order/Delivery';
import BuyerInfo from '@/components/features/Order/BuyerInfo';
import OrderItems from '@/components/features/Order/OrderItems';
import StepperComponent from '@/components/features/Stepper';
import { useToast } from '@/contexts/toast.context';
import { AuthContext } from '@/contexts/auth.context';
import { BasketContext } from '@/contexts/basket.context';
import { placeOrder } from '@/services/order.service';
import { IBasket } from '@/types/basket.types';
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
    userId: '',
    totalPrice: 0,
  });
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState<{
    [key: number]: boolean;
  }>({});

  const { showToast } = useToast();
  const { userData } = useContext(AuthContext);
  const { basketItems } = useContext(BasketContext);
  const router = useRouter();

  const ChangeActiveStep = (key: number) => {
    setActiveStep(key);
  };

  const handleChange = (
    value: string,
    type: OrderDetails,
    key?: 'fullName' | 'email' | 'phone' | 'address'
  ) => {
    if (type === 'personalDetails' && key) orderDetails[type][key] = value;

    if (type === 'deliveryDetails' || type === 'paymentDetails')
      orderDetails[type] = value;

    setOrderDetails({ ...orderDetails });
  };

  const onClick = (newStep?: number) => {
    if (newStep !== undefined) setActiveStep(newStep);
    else setActiveStep(activeStep + 1);

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
      (currentKey === 'deliveryDetails' || currentKey === 'paymentDetails') &&
      orderDetails[currentKey] !== ''
    ) {
      setCompleted({ ...completed, [activeStep]: true });
    } else {
      setCompleted({ ...completed, [activeStep]: false });
    }
  };

  const handleOrder = async () => {
    if (!completed[0]) {
      showToast('error', 'Персональные данные не заполнены');
    } else if (!completed[1]) {
      showToast('error', 'Вариант доставки не выбран');
    } else if (!completed[2]) {
      showToast('error', 'Вариант оплаты не выбран');
    } else {
      const data = await placeOrder(orderDetails);
      if (data.success) {
        showToast('success', 'Ваш заказ успешно оформлен');
        router.push('/order/' + data.data._id);
      }
    }
  };

  useEffect(() => {
    if (userData._id && basketItems.length) {
      setOrderDetails({
        ...orderDetails,
        userId: userData._id,
        productIds: basketItems.map((item: IBasket) => item.stoneId),
      });
    }
  }, [basketItems, userData]);

  useEffect(() => {
    if (basketItems.length && orderDetails.deliveryDetails) {
      const itemsPrice = basketItems.reduce(
        (acc: number, item: IBasket) => acc + +item.price,
        0
      );

      setOrderDetails({
        ...orderDetails,
        totalPrice: itemsPrice + +orderDetails.deliveryDetails,
      });
    }
  }, [basketItems, orderDetails.deliveryDetails]);

  return (
    <Box className={styles.orderPage}>
      <Box>
        <StepperComponent
          activeStep={activeStep}
          completed={completed}
          onChange={ChangeActiveStep}
          onClick={onClick}
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
          className={activeStep === 3 ? styles.nextBtn : ''}
          variant="outlined"
          onClick={activeStep === 3 ? handleOrder : () => onClick()}
        >
          {activeStep === 3 ? 'Оформить заказ' : 'Следующий'}
        </Button>
      </Box>
    </Box>
  );
};

export default OrderPage;
