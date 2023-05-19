import { ChangeEvent, FC, useContext, useState } from 'react';
import {
  Box,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  TextField,
  Button,
  SelectChangeEvent,
} from '@mui/material';
import { useToast } from '@/contexts/toast.context';
import { AuthContext } from '@/contexts/auth.context';
import { BasketContext } from '@/contexts/basket.context';
import { addBasketItem } from '@/services/basket.service';

import styles from './styles.module.scss';

interface IProps {
  thicknesses: string[];
  stoneId: string;
  title: string;
  imageHref: string;
  pageLink: string;
  thickness: string;
}

const StonePurchase: FC<IProps> = (props) => {
  const [thickness, setThickness] = useState(props.thicknesses[0]);
  const [stoneQty, setStoneQty] = useState(1);

  const { handleCountChange } = useContext(BasketContext);
  const { userData } = useContext(AuthContext);
  const { showToast } = useToast();

  const stringifiedStones = localStorage.getItem('basketItems');
  const basketItems = stringifiedStones ? JSON.parse(stringifiedStones) : [];

  const handleThicknessChange = (evt: SelectChangeEvent<string>) => {
    setThickness(evt.target.value);
  };

  const handleQtyChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setStoneQty(+evt.target.value);
  };

  const handleAdd = async () => {
    if (thickness && stoneQty) {
      if (basketItems.find((stone: string) => stone === props.stoneId)) {
        showToast('info', 'Предмет уже добавлень в корзину');
        return;
      }
      console.log(props);
      const data = await addBasketItem({
        ...props,
        userId: userData._id,
        quantity: stoneQty,
      });

      if (data.success) {
        handleCountChange(1);
        showToast('success', 'Педмет успешно добавлен в корзину');

        basketItems.push(props.stoneId);
        localStorage.setItem('basketItems', JSON.stringify(basketItems));
      }
    }
  };

  return (
    <Box className={styles.purchaseInfo}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Толщина, мм</InputLabel>
        <Select
          value={thickness}
          sx={{}}
          label="Толщина, мм"
          onChange={handleThicknessChange}
        >
          {props.thicknesses.map((thickness) => (
            <MenuItem key={thickness} value={thickness}>
              {thickness}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box className={styles.actions}>
        <TextField
          className={styles.stoneQty}
          defaultValue={1}
          type="number"
          label="Количество"
          onChange={handleQtyChange}
        />
        <Button className={styles.addBtn} onClick={handleAdd}>
          Добавить в корзину
        </Button>
      </Box>
    </Box>
  );
};

export default StonePurchase;
