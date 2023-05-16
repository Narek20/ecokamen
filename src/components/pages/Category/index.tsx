import { FC } from 'react';
import { Box } from '@mui/material';
import SearchBar from '@/components/features/SearchBar';

import styles from './styles.module.scss';
import CategoriesSidBar from '@/components/features/CategoriesSidebar';
import CategoriesList from '@/components/features/CategoriesList';
import Header from '@/components/features/Header';

const CategoryComponent = () => {
  return (
    <>
      <Header />
      <SearchBar />
      <Box className={styles.content}>
        <CategoriesSidBar />
        <Box className={styles.lists}>xozanoc</Box>
      </Box>
    </>
  );
};

export default CategoryComponent;