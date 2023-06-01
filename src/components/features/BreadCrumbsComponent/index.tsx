import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Stack, Breadcrumbs } from '@mui/material';

import styles from './styles.module.scss';

const BreadCrumbsComponent = () => {
  const router = useRouter();

  return (
    <Box className={styles.breadCrumbs}>
      {/* <Stack spacing={2}>
        <Breadcrumbs separator="-" aria-label="breadcrumb">
          {Object.keys(router.query).map(
            (key) =>
              router.query[key] && <Link href={router.query[key]}>{key}</Link>
          )}
        </Breadcrumbs>
      </Stack> */}
    </Box>
  );
};

export default BreadCrumbsComponent;
