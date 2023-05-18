import { useState, useContext } from 'react';
import { Box, IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import ArticleIcon from '@mui/icons-material/Article';
import HistoryIcon from '@mui/icons-material/History';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Drawer from '@/components/shared/Drawers';
import { AuthContext } from '@/contexts/auth.context';
import ProfileSidebarItem from '../ProfileSidebarItem';

import styles from './styles.module.scss';

const ProfileSidebarItems = [
  {
    title: 'Мой кабинет',
    link: '/profile',
    icon: <AccountCircleIcon />,
  },
  {
    title: 'Текущие заказы',
    link: '/profile',
    icon: <MeetingRoomIcon />,
  },
  {
    title: 'Личные данные',
    link: '/profile',
    icon: <ArticleIcon />,
  },
  {
    title: 'История заказов',
    link: '/profile',
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
        <AccountCircleIcon sx={{ width: 30, height: 30 }} />
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
