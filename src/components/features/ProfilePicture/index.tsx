import { useState, useContext } from 'react';
import { Box, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import ArticleIcon from '@mui/icons-material/Article';
import HistoryIcon from '@mui/icons-material/History';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Drawer from '@/components/shared/Drawers';
import { AuthContext } from '@/contexts/auth.context';
import ProfileSidebarItem from '../ProfileSidebarItem';

import styles from './styles.module.scss';

const ProfileSidebarItems = [
  {
    title: 'Текущие заказы',
    link: '/current-orders',
    icon: <ReceiptLongIcon />,
  },
  {
    title: 'Личные данные',
    link: '/personal',
    icon: <ArticleIcon />,
  },
  {
    title: 'История заказов',
    link: '/orders-history',
    icon: <HistoryIcon />,
  },
  {
    title: 'Выход',
    link: '/',
    icon: <LogoutIcon />,
  },
];

const ProfilePicture = () => {
  const { logout } = useContext(AuthContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Box>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <AccountCircleIcon sx={{color: "black", width: 30, height: 30 }} />
      </IconButton>
      <Drawer
        isOpen={isDrawerOpen}
        anchor="right"
        toggleDrawer={setIsDrawerOpen}
      >
        {ProfileSidebarItems.map((item, index) => (
          <ProfileSidebarItem
            key={item.title}
            {...item}
            handleClick={
              index === ProfileSidebarItems.length - 1 ? logout : undefined
            }
          />
        ))}
      </Drawer>
    </Box>
  );
};

export default ProfilePicture;
