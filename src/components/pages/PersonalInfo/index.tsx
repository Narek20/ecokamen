import { useState, ChangeEvent } from 'react';
import { Box, Button, TextField } from '@material-ui/core';
import ProfileSidebar from '@/components/features/ProfileSidebar';

import styles from './styles.module.scss';

const PersonalInfoPage = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
  });

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    key: string
  ) => {
    setPersonalInfo({
      ...personalInfo,
      [key]: event.target.value,
    });
  };

  const handleSave = () => {
    
  }

  return (
    <Box className={styles.personalInfo}>
      <ProfileSidebar />
      <Box className={styles.form}>
        <Box className={styles.inputContainer}>
          <TextField
            className={styles.input}
            label="Фамилия Имя Отчество*"
            onChange={(evt) => handleChange(evt, 'fullName')}
          />
        </Box>
        <Box className={styles.inputContainer}>
          <TextField
            className={styles.input}
            label="E-mail*"
            onChange={(evt) => handleChange(evt, 'email')}
          />
        </Box>
        <Box className={styles.inputContainer}>
          <TextField
            className={styles.input}
            label="Телефон*"
            onChange={(evt) => handleChange(evt, 'phone')}
          />
        </Box>
        <Button className={styles.saveBtn} onClick={handleSave}>Сохранить изменения</Button>
      </Box>
    </Box>
  );
};

export default PersonalInfoPage;
