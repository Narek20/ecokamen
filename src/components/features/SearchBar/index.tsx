import { Box, TextField, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../../assets/png/logo.png';

import styles from './styles.module.scss';
import Basket from '../Basket';

const SearchBar = () => {
  return (
    <Box className={styles.searchContainer}>
      <Box className={styles.logoContainer}>
        {/* <img src={`${logo}`} alt="logo" /> */}
        Ecokamen
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
