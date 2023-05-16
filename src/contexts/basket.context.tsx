import { createContext, useContext, ReactNode, useState } from 'react';

// Create a BasketContext
const BasketContext = createContext({
  isFixed: false,
  count: 0,
  handleFix: (isFixed: boolean) => {},
  handleCountChange: (value: number) => {},
});

// BasketContext component that wraps your app
export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [isFixed, setIsFixed] = useState(false);
  const [count, setCount] = useState(0);

  const handleFix = (isFixed: boolean) => {
    setIsFixed(isFixed);
  };

  const handleCountChange = (value: number) => {
    setCount(value);
  };

  return (
    <BasketContext.Provider
      value={{ isFixed, count, handleFix, handleCountChange }}
    >
      {children}
    </BasketContext.Provider>
  );
};
