import { useContext, useEffect, useState, ChangeEvent } from 'react';
import { Box, TextField, IconButton, Typography, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useToast } from '@/contexts/toast.context';
import { AuthContext } from '@/contexts/auth.context';
import { BasketContext } from '@/contexts/basket.context';
import BasketItemCard from '@/components/features/BasketItemCard';
import { removeAllBasketItems } from '@/services/basket.service';
import { IBasket } from '@/types/basket.types';

import styles from './styles.module.scss';
import EmptyBasket from '@/components/features/EmptyPage';

const BasketPage = () => {
  const { count, basketItems, refetchItems } = useContext(BasketContext);
  const { userData } = useContext(AuthContext);
  const { showToast } = useToast();

  const [filteredItems, setFilteredItems] = useState(basketItems);

  const handleItemsFilter = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFilteredItems(
      basketItems.filter((items: IBasket) =>
        items.title.toLowerCase().includes(evt.target.value.toLowerCase())
      )
    );
  };

  const handleRemove = async () => {
    if (userData._id) {
      const data = await removeAllBasketItems(userData._id);

      if (data.success) {
        localStorage.setItem('basketItems', JSON.stringify([]));

        showToast('success', data.message);
        refetchItems();
      }
    }
  };

  useEffect(() => {
    setFilteredItems(basketItems);
  }, [basketItems]);

  return (
    <Box className={styles.basketPage}>
      <Box className={styles.basketHeader}>
        <TextField
          label="Искать предмет"
          className={styles.search}
          size={'small'}
          onChange={handleItemsFilter}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
        <Box className={styles.actions}>
          <Typography className={styles.basketQty}>
            В корзине {count} предметов
          </Typography>
          <Button className={styles.basketRemoveBtn} onClick={handleRemove}>
            Очистить корзину
          </Button>
        </Box>
      </Box>
      {basketItems.length ? (
        <Box className={styles.itemsList}>
          {filteredItems.map((basketItem: IBasket) => (
            <BasketItemCard key={basketItem.title} {...basketItem} />
          ))}
        </Box>
      ) : (
        <EmptyBasket type="basket"/>
      )}
    </Box>
  );
};

export default BasketPage;
