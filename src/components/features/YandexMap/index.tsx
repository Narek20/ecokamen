import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import styles from './styles.module.scss';

const MapComponent = () => {
  const [location, setLocation] = useState([55.751574, 37.573856]);
  const [address, setAddress] = useState('');
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  };

  const getAddressFromCoordinates = async ([latitude, longitude]: number[]) => {
    try {
      const response = await fetch(
        `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=cbea604a-5cff-444b-97cd-c6a7ebe7c226&geocode=${longitude},${latitude}`
      );
      const data = await response.json();
      const address =
        data.response.GeoObjectCollection.featureMember[0].GeoObject
          .metaDataProperty.GeocoderMetaData.Address.formatted;
      setAddress(address);
    } catch (error) {
      console.error('Error retrieving address:', error);
    }
  };

  useEffect(() => {
    getAddressFromCoordinates(location);
  }, [location]);

  return (
    <Box className={styles.mapContainer}>
      <Typography className={styles.mapLabel}>
        Выберите место доставки на карте
      </Typography>
      <YMaps>
        <Map
          defaultState={defaultState}
          state={{ ...defaultState, center: location }}
          onClick={(e: any) => setLocation(e._sourceEvent.originalEvent.coords)}
        >
          <Placemark geometry={location} />
        </Map>
      </YMaps>
    </Box>
  );
};

export default MapComponent;
