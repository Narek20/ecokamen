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
import { BasketContext } from '@/contexts/basket.context';

import styles from './styles.module.scss';

interface IProps {
  thicknesses: string[];
}

const StonePurchase: FC<IProps> = ({ thicknesses }) => {
  const [thickness, setThickness] = useState(thicknesses[0]);
  const [stoneQty, setStoneQty] = useState(1);

  const { handleCountChange } = useContext(BasketContext);

  const handleThicknessChange = (evt: SelectChangeEvent<string>) => {
    setThickness(evt.target.value);
  };

  const handleQtyChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setStoneQty(+evt.target.value);
  };

  const handleAdd = () => {
    if (thickness && stoneQty) {
      console.log("asdsad")
      handleCountChange(1);
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
          {thicknesses.map((thickness) => (
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
