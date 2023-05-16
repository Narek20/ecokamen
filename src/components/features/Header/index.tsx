import { useContext } from 'react';
import { useRouter } from 'next/router';
import { Box, IconButton, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { AuthContext } from '@/contexts/auth.context';
import ProfilePicture from '../ProfilePicture';

import styles from './styles.module.scss';

const Header = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();

  const handleClick = () => {
    router.push('/registration');
  };

  return (
    <Box className={styles.header}>
      <Box className={styles.leftSections}></Box>
      <Box className={styles.rightSections}>
        <CallOutlinedIcon sx={{ color: 'black' }} />
        <Typography className={styles.phoneNumber}>
          +7(495) 150-50-75
        </Typography>
        {!isLoggedIn ? (
          <IconButton className={styles.signInBtn} onClick={handleClick}>
            <LockOutlinedIcon />
            <Typography className={styles.signIn}>Войти</Typography>
          </IconButton>
        ) : (
          <ProfilePicture />
        )}
      </Box>
    </Box>
  );
};

export default Header;
