import Link from 'next/link';
import { Box, Typography } from '@material-ui/core';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import styles from './styles.module.scss';

const EmptyBasket = () => {
  return (
    <Box className={styles.emptyBasket}>
      <ShoppingCartOutlinedIcon sx={{width: 200, height: 200, color: "black"}}/>
      <Typography className={styles.basketEmptyText}>Корзина пуста</Typography>
      <Typography className={styles.hintText}>
        <Link className={styles.link} href="/">Нажмите здесь</Link> чтобы продолжить покупки
      </Typography>
    </Box>
  );
};

export default EmptyBasket;
