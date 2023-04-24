import { useState } from 'react';
import { Box, Typography, IconButton, TextField, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import styles from './styles.module.scss';
import { useRouter } from 'next/router';
import { UserInfoFields } from '@/utils/Registration/constants';

const RegistrationComponent = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    surname: '',
    middleName: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
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
    <Box className={styles.registration}>
      <Box className={styles.content}>
        <Box className={styles.header}>
          <Typography className={styles.title}>Регистрация</Typography>
          <IconButton onClick={handleClick}>
            <ArrowBackIcon />
          </IconButton>
        </Box>
        <Box className={styles.inputs}>
          {UserInfoFields.map((field) => (
            <TextField
              className={styles.input}
              id="outlined-password-input"
              label={field.title}
              type={field.type}
              autoComplete="current-password"
              onChange={(evt) => handleChange(evt.target.value, field.key)}
            />
          ))}
        </Box>
        <Box className={styles.buttons}>
          <Button className={styles.signUpBtn} onClick={handleSubmit}>
            Зарегистрироваться
          </Button>
          <Box className={styles.haveAnAccount}>
            <Typography className={styles.hint}>Уже есть аккаунт?</Typography>
            <Typography
              className={styles.loginBtn}
              onClick={() => router.push('/login')}
            >
              Login
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RegistrationComponent;
