import { Box, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../../assets/svg/logo.svg';

import styles from './styles.module.scss';
import Basket from '../Basket';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const SearchBar = () => {
  return (
    <Box className={styles.searchContainer}>
      <Box className={styles.logoContainer}>
        <Link href="/">
          <Image src={logo} width={80} height={60} alt="" />
        </Link>
      </Box>
      <Box className={styles.searchBar}>
        <TextField
          label="Поиск"
          className={styles.search}
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
        />
      </Box>
      <Basket />
    </Box>
  );
};

export default SearchBar;
