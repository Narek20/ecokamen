import { ChangeEvent, FC, MouseEvent, useContext, useState } from 'react';
import md5 from 'md5';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@material-ui/core';
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { addBasketItem } from '@/services/basket.service';
import { IStone } from '@/types/stone.types';
import { useToast } from '@/contexts/toast.context';
import { AuthContext } from '@/contexts/auth.context';
import { BasketContext } from '@/contexts/basket.context';

import styles from './styles.module.scss';

const StoneCard: FC<IStone> = ({
  title,
  imageHrefs,
  link,
  price,
  _id,
  thickness,
  searchCategory,
  searchName,
}) => {
  const [stoneQty, setStoneQty] = useState(1);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { showToast } = useToast();
  const { userData } = useContext(AuthContext);
  const { handleCountChange, refetchItems } = useContext(BasketContext);

  const stringifiedStones = localStorage.getItem('basketItems');
  const basketItems = stringifiedStones ? JSON.parse(stringifiedStones) : [];

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    evt.preventDefault();
    evt.stopPropagation();
    setStoneQty(+evt.target.value);
  };

  const handleAdd = async (evt: MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    evt.stopPropagation();

    if (!userData._id) {
      showToast('error', 'Чтобы совершить покупки пожалуйста авторизуйтесь');
      return;
    }

    if (stoneQty) {
      if (basketItems.find((stone: string) => stone === _id)) {
        showToast('info', 'Предмет уже добавлень в корзину');
        return;
      }

      const uniqueKey = md5(new Date().toString());

      const data = await addBasketItem({
        quantity: stoneQty,
        thickness: thickness.split(',')[0],
        stoneId: _id,
        pageLink: `category/${searchCategory}/${searchName}`,
        imageHref: imageHrefs[0],
        title: title,
        price: price,
        userId: userData._id,
      });

      if (data.success) {
        handleCountChange(1);
        refetchItems();
        showToast('success', 'Педмет успешно добавлен в корзину');

        basketItems.push(_id);

        const stringifiedUniqueKeys = localStorage.getItem('uniqueKeys');
        const uniqueKeys = stringifiedUniqueKeys
          ? JSON.parse(stringifiedUniqueKeys)
          : [];

        localStorage.setItem('basketItems', JSON.stringify(basketItems));
        localStorage.setItem(
          'uniqueKeys',
          JSON.stringify([...uniqueKeys, uniqueKey])
        );
      }
    }
  };

  return (
    <Box className={styles.card}>
      <Link className={styles.titleAndImgContainer} href={link}>
        <Image
          width={isMobile ? 200 : 100}
          height={isMobile ? 200 : 100}
          src={imageHrefs[0]}
          alt="category"
        />
        <Typography className={styles.title}>{title}</Typography>
      </Link>
      <Typography className={styles.price}>{price} руб./тн</Typography>
      <Box className={styles.purchaseContainer}>
        <TextField
          className={styles.qtyInput}
          type="number"
          onChange={handleChange}
        />
        <Button className={styles.purchaseBtn} onClick={handleAdd}>
          Заказать
        </Button>
      </Box>
    </Box>
  );
};

export default StoneCard;
