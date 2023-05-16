import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import styles from './styles.module.scss';

interface IProps {
  isFixed?: boolean;
}

const Bucket: FC<IProps> = ({ isFixed }) => {
  return (
    <Box className={isFixed ? styles.fixedBucket : styles.bucket}>
      <Typography></Typography>
      <ShoppingCartOutlinedIcon />
    </Box>
  );
};

export default Bucket;
