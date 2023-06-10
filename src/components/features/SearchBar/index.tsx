import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import { Box, TextField, IconButton, MenuItem } from '@mui/material';
import { getStonesBySearchKey } from '@/services/stone.service';
import logo from '@/assets/svg/logo.svg';
import { IStone } from '@/types/stone.types';
import Basket from '../Basket';

import styles from './styles.module.scss';

const SearchBar = () => {
  const [searchItems, setSearchItems] = useState<IStone[] | []>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [searchKey, setSearchKey] = useState('');

  const textFieldRef = useRef<HTMLDivElement>(null);

  const getSearchItems = async (searchKey: string) => {
    const data = await getStonesBySearchKey(searchKey);

    if (data.success) {
      setSearchItems(data.data);
    }
  };

  useEffect(() => {
    if (textFieldRef.current) {
      const handleFocus = (evt: Event) => {
        evt.stopPropagation();
        evt.preventDefault();
        setIsFocused(true);
      };

      const handleBlur = () => {
        setIsFocused(false);
      };
      document.body.addEventListener('click', handleBlur);

      const inputElement = textFieldRef.current.querySelector('input');

      if (inputElement) {
        inputElement.addEventListener('click', handleFocus);
      }

      return () => {
        if (inputElement) {
          inputElement.removeEventListener('focus', handleFocus);
          inputElement.removeEventListener('blur', handleBlur);
        }
      };
    }
  }, []);

  useEffect(() => {
    if (searchKey) getSearchItems(searchKey);
    else getSearchItems('allStones');
  }, [searchKey]);

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
          ref={textFieldRef}
          autoComplete="off"
          InputProps={{
            endAdornment: (
              <IconButton>
                <SearchIcon />
              </IconButton>
            ),
          }}
          onChange={(evt) => setSearchKey(evt.target.value)}
        />
        {isFocused &&
          searchItems.map((searchItem: IStone) => (
            <Link key={searchItem._id} href={'/category/' + searchItem.link}>
              <MenuItem className={styles.menuItem} value={searchItem.title}>
                {searchItem.title}
              </MenuItem>
            </Link>
          ))}
      </Box>
      <Basket />
    </Box>
  );
};

export default SearchBar;
