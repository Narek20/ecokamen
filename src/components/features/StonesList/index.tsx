import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import StoneCard from '../StoneCard';
import { IStone } from '@/types/stone.types';
import { getStonesByCategory } from '@/services/stone.service';

import styles from './styles.module.scss';

const StonesList = () => {
  const [stones, setStones] = useState<IStone[] | []>([]);
  const router = useRouter();

  const { category } = router.query;

  const getStones = async () => {
    const data = await getStonesByCategory(category as string);
    if (data.success) {
      console.log(data)
      setStones(data.data)
    }
  };

  useEffect(() => {
    if(category) getStones();
  }, [category]);

  return (
    <Box className={styles.stones}>
      {stones.map((category) => (
        <StoneCard key={category.searchName} {...category} />
      ))}
    </Box>
  );
};

export default StonesList;
