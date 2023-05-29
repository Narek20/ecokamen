import { ChangeEvent, FC, useContext, useState } from 'react';
import { Box, TextField, IconButton, Typography, Button } from '@mui/material';
import { placeOrder } from '@/services/order.service';
import { removeBasketItem } from '@/services/basket.service';
import { useToast } from '@/contexts/toast.context';
import { BasketContext } from '@/contexts/basket.context';
import { IBasket } from '@/types/basket.types';

import styles from './styles.module.scss';
import { useRouter } from 'next/router';

const BasketItemCard: FC<IBasket> = ({
  title,
  imageHref,
  pageLink,
  price,
  thickness,
  quantity,
  userId,
  stoneId,
}) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const router = useRouter()
  const { showToast } = useToast();
  const { refetchItems } = useContext(BasketContext);

  const handleQuantityChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setItemQuantity(+evt.target.value);
  };

  const handleClick = async () => {
    router.push("/order")
  };

  const handleRemove = async () => {
    const data = await removeBasketItem(userId, stoneId);

    if (data.success) {
      const storageInfo = localStorage.getItem('basketItems') ?? '';
      const basketItems = JSON.parse(storageInfo);

      localStorage.setItem(
        'basketItems',
        JSON.stringify(basketItems.filter((stone: string) => stone !== stoneId))
      );
      showToast('success', data.message);
      refetchItems();
    }
  };

  return (
    <Box className={styles.card}>
      <Box className={styles.stoneDetails}>
        <img className={styles.stoneImage} src={imageHref} />
        <Box className={styles.stoneInfo}>
          <Typography className={styles.title}>{title}</Typography>
          <Box className={styles.infoContainer}>
            <Typography className={styles.infoLabel}>Толщина:</Typography>
            <Typography className={styles.info}>{thickness}мм</Typography>
          </Box>
          <Box className={styles.infoContainer}>
            <Typography className={styles.infoLabel}>
              цена за 1 м<sup>2</sup>:
            </Typography>
            <Typography className={styles.info}>{price}руб</Typography>
          </Box>
        </Box>
      </Box>
      <Box className={styles.priceInfo}>
        <Box>
          <TextField
            className={styles.qtyInput}
            defaultValue={quantity}
            type="number"
            onChange={handleQuantityChange}
            InputProps={{ inputProps: { min: 1 } }}
          />
        </Box>
        <Box className={styles.priceContainer}>
          <Typography className={styles.price}>
            {+itemQuantity * +price}руб
          </Typography>
          <Typography className={styles.priceLabel}>Сумма</Typography>
        </Box>
        <Box className={styles.actions}>
          <Button className={styles.orderBtn} onClick={handleClick}>
            Заказать товар
          </Button>
          <Button className={styles.removeBtn} onClick={handleRemove}>
            Удалить из корзины
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BasketItemCard;
