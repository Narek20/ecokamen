import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Skeleton, Typography } from '@mui/material';
import StonePurchase from '../StonePurchase';
import ImageCarousel from '../ImageCarousel';
import { getStoneByName } from '@/services/stone.service';
import { IStone } from '@/types/stone.types';

import styles from './styles.module.scss';
import StoneCharacteristics from '../StoneCharacteristics';
import StoneDetails from '../StoneDetails';

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
    <Box className={styles.container}>
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
          <StonePurchase
            stoneId={stoneData._id}
            thicknesses={
              stoneData.thickness.length ? stoneData.thickness.split(',') : []
            }
            pageLink={`category/${stoneData.searchCategory}/${stoneData.searchName}`}
            imageHref={stoneData.imageHrefs[0]}
            {...stoneData}
          />
        </Box>
      </Box>
      <Box className={styles.stoneDetails}>
        <StoneDetails stone={stoneData} />
        <StoneCharacteristics stone={stoneData} />
      </Box>
    </Box>
  );
};

export default StoneInformation;
