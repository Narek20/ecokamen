import { useState } from 'react';
import { useRouter } from 'next/router';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Typography, IconButton, TextField, Button } from '@mui/material';
import ValidationMessage from '@/components/shared/ValidationMessage';
import { useToast } from '@/contexts/toast.context';
import { userRegister } from '@/services/auth.service';
import { IUser } from '@/types/user.types';
import { UserInfoFields } from '@/utils/Registration/constants';

import styles from './styles.module.scss';

const RegistrationComponent = () => {
  const [userInfo, setUserInfo] = useState<IUser>({
    name: '',
    surname: '',
    patronymic: '',
    email: '',
    phone: '',
    password: '',
    repeatPassword: '',
  });
  const [validationMessage, setValidationMessage] = useState('');

  const router = useRouter();
  const { showToast } = useToast();

  const handleClick = () => {
    router.push('/');
  };

  const handleChange = (value: string, key: string) => {
    setUserInfo({ ...userInfo, [key]: value });
  };

  const handleSubmit = async () => {
    if (Object.values(userInfo).every((value) => value !== '')) {
      setValidationMessage('');
      const data = await userRegister(userInfo);

      if (data.success) {
        showToast('success', data.message);
        router.push('/');
      } else {
        showToast('error', data.message);
      }
    } else {
      setValidationMessage('Please fill all fields');
    }
  };

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
        {validationMessage && <ValidationMessage message={validationMessage} />}
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
