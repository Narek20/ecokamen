import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import styles from './styles.module.scss';

interface IProps {
  message: string;
}

const ValidationMessage: FC<IProps> = ({ message }) => {
  return (
    <Box className={styles.messageContainer}>
      <Typography className={styles.validationMessage}>{message}</Typography>
    </Box>
  );
};

export default ValidationMessage;
