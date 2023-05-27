import Link from 'next/link';
import { Box } from '@mui/material';
import { profileSidebar } from '@/utils/constants/sidebar';

import styles from './styles.module.scss';

const ProfileSidebar = () => {
  return (
    <Box className={styles.categories}>
      {profileSidebar.map(({ link, title }) => (
        <Link key={title} className={styles.category} href={link}>
          {title}
        </Link>
      ))}
    </Box>
  );
};

export default ProfileSidebar;
