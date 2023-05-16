import { FC, ReactNode } from 'react';
import { Box } from '@material-ui/core';
import Header from '../Header';
import SearchBar from '../SearchBar';

import styles from './styles.module.scss';

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <Box className={styles.layout}>
      <Header />
      <SearchBar />
      {children}
    </Box>
  );
};

export default Layout;
