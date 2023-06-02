import { FC, ReactNode } from 'react';
import { Box } from '@mui/material';
import Header from '../Header';
import Footer from '../Footer';
import SearchBar from '../SearchBar';
import BreadCrumbsComponent from '../BreadCrumbsComponent';

import styles from './styles.module.scss';

interface IProps {
  children: ReactNode;
}

const Layout: FC<IProps> = ({ children }) => {
  return (
    <Box className={styles.layout}>
      <Header />
      <SearchBar />
      <BreadCrumbsComponent />
      {children}
      <Box className={styles.divider}></Box>
      <Footer />
    </Box>
  );
};

export default Layout;
