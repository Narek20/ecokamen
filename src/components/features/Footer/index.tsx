import { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  Link as SocialLink,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useToast } from '@/contexts/toast.context';
import { subscribeForNews } from '@/services/user.service';

import styles from './styles.module.scss';

const Footer = () => {
  const [email, setEmail] = useState('');

  const { showToast } = useToast();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleSubscribe = async () => {
    const data = await subscribeForNews(email);
    if (data.success) {
      showToast('success', data.message);
    }
  };

  return (
    <Box className={styles.footer}>
      <Box className={styles.header}>
        {!isMobile && (
          <Typography className={styles.title}>
            Приобретайте камни вместе с Ecokamen
          </Typography>
        )}
        <Box>
          <Typography className={styles.hint}>
            Подписатся на обновления
          </Typography>
          <Box className={styles.getInTouch}>
            <TextField
              className={styles.emailInp}
              label="Электронная почта"
              variant="outlined"
              onChange={(evt) => setEmail(evt.target.value)}
            />
            <Button className={styles.sendBtn} onClick={handleSubscribe}>
              Отправить
            </Button>
          </Box>
        </Box>
      </Box>
      <hr className={styles.line} />
      <Box className={styles.info}>
        {!isMobile && (
          <Box className={styles.infoSections}>
            <Typography className={styles.sectionTitle}>
              О компанни Ecokamen
            </Typography>
            <Typography className={styles.sectionElem}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </Typography>
          </Box>
        )}
        <Box className={styles.infoSections}>
          <Typography className={styles.sectionTitle}>Компания</Typography>
          <Link className={styles.sectionElem} href="/about-us">
            О компании
          </Link>
          <Link className={styles.sectionElem} href="/contacts">
            Связь
          </Link>
        </Box>

        {!isMobile && (
          <Box className={styles.infoSections}>
            <Typography className={styles.sectionTitle}>Покупателю</Typography>
            <Link className={styles.sectionElem} href="">
              Оплата
            </Link>
            <Link className={styles.sectionElem} href="">
              Доставка
            </Link>
            <Link className={styles.sectionElem} href="">
              Гарантия на товар
            </Link>
          </Box>
        )}
        <Box className={styles.infoSections}>
          <Typography className={styles.sectionTitle}>Наши Соцсети</Typography>
          <SocialLink className={styles.sectionElem} href="" target="blank">
            <FacebookIcon className={styles.icon} />
            Фейсбук
          </SocialLink>
          <SocialLink className={styles.sectionElem} href="" target="blank">
            <InstagramIcon className={styles.icon} />
            Инстаграм
          </SocialLink>
          <SocialLink className={styles.sectionElem} href="" target="blank">
            <WhatsAppIcon className={styles.icon} />
            Ватсап
          </SocialLink>
          <SocialLink className={styles.sectionElem} href="" target="blank">
            <TelegramIcon className={styles.icon} />
            Телеграм
          </SocialLink>
        </Box>
      </Box>
      <Typography className={styles.date}>
        2023 © Ecokamen - Дикий камень.
      </Typography>
    </Box>
  );
};

export default Footer;
