import { useState, ChangeEvent, useContext } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { AuthContext } from '@/contexts/auth.context';

import styles from './styles.module.scss';

const PersonalInfoPage = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const { userData } = useContext(AuthContext);

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: string
  ) => {
    setPersonalInfo({
      ...personalInfo,
      [key]: event.target.value,
    });
  };

  const handleSave = () => {};

  return (
    <Box className={styles.personalInfo}>
      <Box style={{ width: '100%' }}>
        <Typography className={styles.title}>Персональные данные</Typography>
      </Box>
      <Box className={styles.form}>
        <Box className={styles.inputContainer}>
          <TextField
            className={styles.input}
            defaultValue={`${userData.surname} ${userData.name} ${userData.patronymic}`}
            label="Фамилия Имя Отчество*"
            onChange={(evt) => handleChange(evt, 'fullName')}
          />
        </Box>
        <Box className={styles.inputContainer}>
          <TextField
            className={styles.input}
            defaultValue={userData.email}
            label="E-mail*"
            onChange={(evt) => handleChange(evt, 'email')}
          />
        </Box>
        <Box className={styles.inputContainer}>
          <TextField
            className={styles.input}
            defaultValue={userData.phone}
            label="Телефон*"
            onChange={(evt) => handleChange(evt, 'phone')}
          />
        </Box>
        <Button className={styles.saveBtn} onClick={handleSave}>
          Сохранить изменения
        </Button>
      </Box>
    </Box>
  );
};

export default PersonalInfoPage;
