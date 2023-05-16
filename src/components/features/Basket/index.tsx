import { FC, useContext, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { BasketContext } from '@/contexts/basket.context';

import styles from './styles.module.scss';

interface IProps {
  isFixed?: boolean;
}

const Basket: FC<IProps> = ({ isFixed }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const { count } = useContext(BasketContext);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box className={scrollPosition > 115 ? styles.fixedBasket : styles.basket}>
      <Box className={styles.container}>
        <ShoppingCartOutlinedIcon sx={{ color: 'black' }} />
        <Box className={styles.countContainer}>
          <Typography className={styles.count}>{count + 20}</Typography>
        </Box>
        <Typography className={styles.title}>Корзина</Typography>
      </Box>
    </Box>
  );
};

export default Basket;
