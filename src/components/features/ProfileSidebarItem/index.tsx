import { FC, ReactNode } from 'react';
import Link from 'next/link';
import { Typography } from '@mui/material';

import styles from './styles.module.scss';

interface IProps {
  title: string;
  link: string;
  icon: ReactNode
  handleClick?: () => void
}

const ProfileSidebarItem: FC<IProps> = ({ title, link, icon, handleClick }) => {
  return (
    <Link className={styles.item} href={link} onClick={handleClick}>
      {icon}
      <Typography className={styles.title}>{title}</Typography>
    </Link>
  );
};

export default ProfileSidebarItem;
