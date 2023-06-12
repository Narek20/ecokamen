import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Box, IconButton, Typography, Skeleton } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import { AuthContext } from '@/contexts/auth.context';
import ProfilePicture from '../ProfilePicture';
import logo from '@/assets/svg/logo.svg';

import styles from './styles.module.scss';

const Header = () => {
  const { isLoggedIn, isLoading } = useContext(AuthContext);
  const router = useRouter();

  const handleClick = () => {
    router.push('/registration');
  };

  return (
    <Box className={styles.header}>
      <Box>
        <Box className={styles.leftSections}>
          <Link className={styles.link} href="/about-us">
            О компании
          </Link>
          <Link className={styles.link} href="/contacts">
            Контакты
          </Link>
          <Link href="/" className={styles.logoContainer}>
            <Image src={logo} width={50} height={40} alt="" />
          </Link>
        </Box>
      </Box>
      <Box className={styles.rightSections}>
        <CallOutlinedIcon sx={{ color: 'black' }} />
        <Typography className={styles.phoneNumber}>
          +7(495) 150-50-75
        </Typography>
        {isLoading ? (
          <Skeleton className={styles.skeleton} />
        ) : !isLoggedIn ? (
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
