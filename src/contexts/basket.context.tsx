import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { getBasketItems } from '@/services/basket.service';
import { AuthContext } from './auth.context';

// Create a BasketContext
export const BasketContext = createContext({
  count: 0,
  handleCountChange: (value: number) => {},
  getItems: () => {},
  refetchItems: () => {},
  basketItems: [],
});

// BasketContext component that wraps your app
export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);
  const [basketItems, setBasketItems] = useState([]);

  const { userData } = useContext(AuthContext);

  const handleCountChange = (value: number) => {
    setCount(count + value);
  };

  const refetchItems = async () => {
    getItems();
  };

  const getItems = async () => {
    if (userData._id) {
      const data = await getBasketItems(userData._id);

      if (data.success) {
        setBasketItems(data.data);
        setCount(data.data.length);
      }
    }
  };

  useEffect(() => {
    getItems();
  }, [userData._id]);

  return (
    <BasketContext.Provider
      value={{ count, basketItems, handleCountChange, getItems, refetchItems }}
    >
      {children}
    </BasketContext.Provider>
  );
};
