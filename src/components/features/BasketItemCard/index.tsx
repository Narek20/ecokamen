import { ChangeEvent, FC, useContext, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  Box,
  TextField,
  Typography,
  Button,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@material-ui/core';
import { removeBasketItem } from '@/services/basket.service';
import { useToast } from '@/contexts/toast.context';
import { BasketContext } from '@/contexts/basket.context';
import { IBasket } from '@/types/basket.types';

import styles from './styles.module.scss';

const BasketItemCard: FC<IBasket> = ({
  title,
  imageHref,
  price,
  thickness,
  quantity,
  userId,
  stoneId,
}) => {
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const theme = useTheme();
  const router = useRouter();
  const { showToast } = useToast();
  const { refetchItems } = useContext(BasketContext);
  const isMobile = useMediaQuery(theme.breakpoints.down(960));

  const handleQuantityChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setItemQuantity(+evt.target.value);
  };

  const handleClick = async () => {
    router.push('/order');
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
      <Image
        width={isMobile ? 150 : 100}
        height={isMobile ? 150 : 100}
        src={imageHref}
        alt="basketImage"
      />
      <Box className={styles.stoneDetails}>
        <Box className={styles.stoneInfo}>
          <Box className={styles.titleContainer}>
            <Typography className={styles.title}>{title}</Typography>
          </Box>
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
        <Box className={styles.qtyContainer}>
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
