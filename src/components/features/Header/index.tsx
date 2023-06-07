import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { AuthContext } from '@/contexts/auth.context';
import ProfilePicture from '../ProfilePicture';

import styles from './styles.module.scss';

const Header = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const router = useRouter();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  const handleClick = () => {
    router.push('/registration');
  };

  return (
    <Box className={styles.header}>
      <Box className={styles.leftSections}>
        {!isMobile && (
          <>
            <Link className={styles.link} href="/about-us">
              О компании
            </Link>
            <Link className={styles.link} href="/contacts">
              Контакты
            </Link>
            <Link className={styles.link} href=""></Link>
          </>
        )}
      </Box>
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
