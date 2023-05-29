import Link from 'next/link';
import { Box, Button, TextField, Typography } from '@mui/material';
import { Link as SocialLink } from '@material-ui/core';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import styles from './styles.module.scss';

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Box className={styles.header}>
        <Typography className={styles.title}>
          Приобретайте камни вместе с Ecokamen
        </Typography>
        <Box>
          <Typography className={styles.hint}>
            Подписатся на обновления
          </Typography>
          <Box className={styles.getInTouch}>
            <TextField
              className={styles.emailInp}
              label="Электронная почта"
              variant="outlined"
            />
            <Button className={styles.sendBtn}>Отправить</Button>
          </Box>
        </Box>
      </Box>
      <hr className={styles.line} />
      <Box className={styles.info}>
        <Box className={styles.infoSections}>
          <Typography className={styles.sectionTitle}>
            О компанни Ecokamen
          </Typography>
          <Typography className={styles.sectionElem}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
            sodales in volutpat ullamcorper amet adipiscing fermentum.
          </Typography>
          <Box></Box>
        </Box>
        <Box className={styles.infoSections}>
          <Typography className={styles.sectionTitle}>Компания</Typography>
          <Link className={styles.sectionElem} href="/about-us">
            О нас
          </Link>
          <Link className={styles.sectionElem} href="/contact-us">
            Связь
          </Link>
          <Link className={styles.sectionElem} href="/about-us">
            mi ban
          </Link>
        </Box>
        <Box className={styles.infoSections}>
          <Typography className={styles.sectionTitle}>Покупателю</Typography>
          <Link className={styles.sectionElem} href="/about-us">
            Оплата
          </Link>
          <Link className={styles.sectionElem} href="/contact-us">
            Доставка
          </Link>
          <Link className={styles.sectionElem} href="/about-us">
            Гарантия на товар
          </Link>
        </Box>
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
