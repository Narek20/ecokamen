import react, { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Typography, IconButton, TextField, Button } from '@mui/material';
import ValidationMessage from '@/components/shared/ValidationMessage';
import { userLogin } from '@/services/auth.service';
import { useToast } from '@/contexts/toast.context';
import { AuthContext } from '@/contexts/auth.context';

import styles from './styles.module.scss';

const LoginComponent = () => {
  const [userInfo, setUserInfo] = useState({
    login: '',
    password: '',
  });
  const [validationMessage, setValidationMessage] = useState('');

  const { login } = useContext(AuthContext);
  const router = useRouter();
  const { showToast } = useToast();

  const handleClick = () => {
    router.push('/');
  };

  const handleChange = (value: string, key: string) => {
    setUserInfo({ ...userInfo, [key]: value });
  };

  const handleSubmit = async () => {
    if (userInfo) {
      setValidationMessage('');
      const data = await userLogin(userInfo.login, userInfo.password);

      if (data.data) {
        if (data.token) localStorage.setItem('token', data.token);
        showToast('success', data.message);
        login();
        router.push('/');
      }

      if (!data.success) {
        showToast('error', data.message);
      }
    } else {
      setValidationMessage('Please fill all fields');
    }
  };

  return (
    <Box className={styles.login}>
      <Box className={styles.content}>
        <Box className={styles.header}>
          <IconButton className={styles.iconButton} onClick={handleClick}>
            <ArrowBackIcon />
          </IconButton>
          <Box className={styles.headerContent}>
            <Typography className={styles.title}>Вход</Typography>
          </Box>
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
        {validationMessage && <ValidationMessage message={validationMessage} />}
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
      {/* {toastInfo && <ToastComponent {...toastInfo} />} */}
    </Box>
  );
};

export default LoginComponent;
