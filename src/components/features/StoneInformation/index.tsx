import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Skeleton, Typography } from '@mui/material';
import { getStoneByName } from '@/services/stone.service';
import { IStone } from '@/types/stone.types';
import ImageCarousel from '../ImageCarousel';

import styles from './styles.module.scss';
import StonePurchase from '../StonePurchase';

const StoneInformation = () => {
  const [stoneData, setStoneData] = useState<IStone | null>(null);

  const router = useRouter();
  const { stone } = router.query;

  const getStone = async () => {
    const data = await getStoneByName(stone as string);

    if (data.success) {
      setStoneData(data.data);
    }
  };

  useEffect(() => {
    if (stone) getStone();
  }, [stone]);

  if (!stoneData) return <Skeleton />;

  return (
    <Box className={styles.stoneInfo}>
      <ImageCarousel images={stoneData.imageHrefs} />
      <Box>
        <Typography className={styles.title}>{stoneData.title}</Typography>
        <Typography className={styles.priceLabel}>
          Цена:{' '}
          <Typography className={styles.price}>
            {stoneData.price}руб./м<sup>2</sup>
          </Typography>
        </Typography>
        <StonePurchase thicknesses={stoneData.thickness.split(",")}/>
      </Box>
    </Box>
  );
};

export default StoneInformation;
