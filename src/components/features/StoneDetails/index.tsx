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
      <Typography className={styles.title}>О Камне</Typography>
      <Box>
        <Typography className={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
        <Typography className={styles.advantagesTitle}>
          Описание и преимущества камнья
        </Typography>
        <Typography className={styles.advantages}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </Box>
    </Box>
  );
};

export default StoneDetails;
