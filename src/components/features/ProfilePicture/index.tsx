import { useState, useContext } from 'react';
import { Box, IconButton } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Drawer from '@/components/shared/Drawers';
import { AuthContext } from '@/contexts/auth.context';
import { ProfileSidebarItems } from '@/utils/constants/sidebar';
import ProfileSidebarItem from '../ProfileSidebarItem';

import styles from './styles.module.scss';

const ProfilePicture = () => {
  const { logout } = useContext(AuthContext);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <Box>
      <IconButton onClick={() => setIsDrawerOpen(true)}>
        <AccountCircleIcon sx={{ color: 'black', width: 30, height: 30 }} />
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
            icon={<item.icon />}
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
