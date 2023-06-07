import { Box, Typography } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MapComponent from '@/components/features/YandexMap';

import styles from './styles.module.scss';

const ContactsPage = () => {
  return (
    <Box className={styles.contactsPage}>
      <Typography className={styles.title}>Наши контакты</Typography>
      <Box className={styles.content}>
        <Box className={styles.contacts}>
          <Box className={styles.contact}>
            <Box className={styles.iconContainer}>
              <BusinessIcon sx={{ color: 'rgb(255, 140, 0)' }} />
            </Box>
            <Box>
              <Typography className={styles.contactTitle}>Адресс</Typography>
              <Typography className={styles.contactInfo}>
                Московская область, Красногорский район, д. Гольево,
              </Typography>
              <Typography className={styles.contactInfo}>
                ул. Центральная 4б (мы напротив)
              </Typography>
              <Typography className={styles.contactInfo}>
                Пн-Пт: с 9:00 до 19:00, Сб-Вс: с 10:00 до 18:00
              </Typography>
            </Box>
          </Box>
          <Box className={styles.contact}>
            <Box className={styles.iconContainer}>
              <PhoneIcon sx={{ color: 'rgb(255, 140, 0)' }} />
            </Box>
            <Box>
              <Typography className={styles.contactTitle}>Телефон</Typography>
              <Typography className={styles.contactInfo}>
                Консультация и приём заказов:
              </Typography>
              <Typography className={styles.contactInfo}>
                +7(495) 150-50-75
              </Typography>
              <Typography className={styles.contactInfo}>
                WhatsApp:+7(928) 182-51-91
              </Typography>
            </Box>
          </Box>
          <Box className={styles.contact}>
            <Box className={styles.iconContainer}>
              <EmailIcon sx={{ color: 'rgb(255, 140, 0)' }} />
            </Box>
            <Box>
              <Typography className={styles.contactTitle}>E-mail</Typography>
              <Typography className={styles.contactInfo}>
                Московская область, Красногорский район, д. Гольево,
              </Typography>
            </Box>
          </Box>
          <Box className={styles.contact}>
            <Box className={styles.iconContainer}>
              <AccessTimeIcon sx={{ color: 'rgb(255, 140, 0)' }} />
            </Box>
            <Box>
              <Typography className={styles.contactTitle}>
                Режим работы
              </Typography>
              <Typography className={styles.contactInfo}>
                Пн-Сб: с 9:00 до 18:00
              </Typography>
              <Typography className={styles.contactInfo}>
                Вс: Выходной
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box className={styles.mapContainer}>
          <MapComponent isContactMap/>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactsPage;
