import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import styles from './styles.module.scss';

interface IProps {
  label: string;
  handleChange: (value: string) => void;
}

const Input: FC<IProps> = ({ label, handleChange }) => {
  return (
    <Box className={styles.inputComponent}>
      <Typography className={styles.label}>{label}</Typography>
      <input
        className={styles.input}
        onChange={(evt) => handleChange(evt.target.value)}
      />
    </Box>
  );
};

export default Input;
