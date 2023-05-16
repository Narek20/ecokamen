import React, { createContext, ReactNode, useState } from 'react';

// Create a BasketContext
export const BasketContext = createContext({
  count: 0,
  handleCountChange: (value: number) => {},
});

// BasketContext component that wraps your app
export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);



  const handleCountChange = (value: number) => {
    setCount(value);
  };

  return (
    <BasketContext.Provider
      value={{ count, handleCountChange }}
    >
      {children}
    </BasketContext.Provider>
  );
};
