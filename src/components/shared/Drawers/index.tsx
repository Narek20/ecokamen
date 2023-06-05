import { FC, ReactNode } from 'react';
import { Box, SwipeableDrawer } from '@mui/material';

interface IProps {
  anchor: 'top' | 'right' | 'bottom' | 'left';
  isOpen: boolean;
  toggleDrawer: (open: boolean) => void;
  children: ReactNode;
}

const Drawer: FC<IProps> = ({ anchor, isOpen, toggleDrawer, children }) => {
  return (
    <Box>
      <SwipeableDrawer
        anchor={anchor}
        open={isOpen}
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
      >
        {children}
      </SwipeableDrawer>
    </Box>
  );
};

export default Drawer;
