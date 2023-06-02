import { FC, useState, useEffect } from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from '@mui/material';

import styles from './styles.module.scss';
import { IStone } from '@/types/stone.types';

interface IProps {
  stone: IStone;
}

type CharacteristicsKeys = 'texture' | 'usage' | 'deliveryForm';

const StoneCharacteristics: FC<IProps> = ({ stone }) => {
  const [rows, setRows] = useState<
    {
      key: CharacteristicsKeys;
      title: string;
      value: string;
    }[]
  >([
    { key: 'texture', title: 'Фактура', value: '' },
    { key: 'deliveryForm', title: 'Форма поставки', value: '' },
    { key: 'usage', title: 'Применение', value: '' },
  ]);

  useEffect(() => {
    if (stone._id) {
      setRows(
        rows.map(
          (row: {
            key: CharacteristicsKeys;
            title: string;
            value: string;
          }) => ({
            ...row,
            value: stone[row.key] || '',
          })
        )
      );
    }
  }, [stone._id]);

  return (
    <Box className={styles.characteristics}>
      <Typography className={styles.title}>Характеристики</Typography>
      <TableContainer>
        <Table style={{ width: 600 }}>
          <TableBody>
            {rows.map((row) => (
              <>
                {row.value && (
                  <TableRow key={row.key}>
                    <TableCell component="th" scope="row">
                      {row.title}
                    </TableCell>
                    <TableCell align="right">{row.value}</TableCell>
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default StoneCharacteristics;
