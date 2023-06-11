import { FC } from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import { IStone } from '@/types/stone.types';

import styles from './styles.module.scss';

interface IProps {
  stone: IStone;
}

const StoneDetails: FC<IProps> = ({ stone }) => {
  return (
    <Box className={styles.details}>
      <Box>
        <Typography className={styles.advantagesTitle}>
          Описание и преимущества камнья
        </Typography>
        <Typography className={styles.advantages}>
         {stone.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default StoneDetails;
