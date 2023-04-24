import { Box, IconButton, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

import styles from './styles.module.scss';

const Header = () => {
  const handleClick = () => {};
  return (
    <Box className={styles.header}>
      <Box className={styles.leftSections}></Box>
      <Box className={styles.rightSections}>
        <CallOutlinedIcon sx={{color: "black"}}/>
        <Typography className={styles.phoneNumber}>
          +7(495) 150-50-75
        </Typography>
        <IconButton className={styles.signInBtn} onClick={handleClick}>
          <LockOutlinedIcon />
          <Typography className={styles.signIn}>Войти</Typography>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
