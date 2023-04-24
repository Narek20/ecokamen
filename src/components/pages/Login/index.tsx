import { useState } from 'react';
import { useRouter } from 'next/router';
import { Box, Typography, IconButton, TextField, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import styles from './styles.module.scss';

const LoginComponent = () => {
  const [userInfo, setUserInfo] = useState({
    login: '',
    password: '',
  });

  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  const handleChange = (value: string, key: string) => {
    setUserInfo({ ...userInfo, [key]: value });
  };

  const handleSubmit = () => {};
  console.log(userInfo);
  return (
    <Box className={styles.login}>
      <Box className={styles.content}>
        <Box className={styles.header}>
          <Typography className={styles.title}>Вход</Typography>
          <IconButton onClick={handleClick}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Box className={styles.inputs}>
          <TextField
            className={styles.input}
            id="outlined-password-input"
            label={'Логин'}
            type={'text'}
            autoComplete="current-password"
            onChange={(evt) => handleChange(evt.target.value, 'login')}
          />
          <TextField
            className={styles.input}
            id="outlined-password-input"
            label={'Пароль'}
            type={'password'}
            autoComplete="current-password"
            onChange={(evt) => handleChange(evt.target.value, 'password')}
          />
        </Box>
        <Box className={styles.buttons}>
          <Button className={styles.signUpBtn} onClick={handleSubmit}>
            Войти
          </Button>
          <Box className={styles.haveAnAccount}>
            <Typography className={styles.hint}>
              Хотите создать аккаунт?
            </Typography>
            <Typography
              className={styles.signupBtn}
              onClick={() => router.push('/registration')}
            >
              Регистрация
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginComponent;
