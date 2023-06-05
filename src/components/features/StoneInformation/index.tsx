import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Skeleton, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@material-ui/core';
import StonePurchase from '../StonePurchase';
import ImageCarousel from '../ImageCarousel';
import StoneDetails from '../StoneDetails';
import StoneCharacteristics from '../StoneCharacteristics';
import { getStoneByName } from '@/services/stone.service';
import { IStone } from '@/types/stone.types';

import styles from './styles.module.scss';

const StoneInformation = () => {
  const [stoneData, setStoneData] = useState<IStone | null>(null);

  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
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
      {isMobile && (
        <Typography className={styles.title}>{stoneData.title}</Typography>
      )}
      <Box className={styles.stoneInfo}>
        <ImageCarousel images={stoneData.imageHrefs} />
        <Box className={styles.stonePriceAndPurchase}>
          {!isMobile && (
            <Typography className={styles.title}>{stoneData.title}</Typography>
          )}
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
