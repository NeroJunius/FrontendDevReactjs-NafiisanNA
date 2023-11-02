import { useState } from 'react';

export function useSortPrice() {
  const [selectedPrice, setSelectedPrice] = useState<string>("");

  const setSortPrice = (option: string) => {
    setSelectedPrice(option);
  };

  const getSelectedPrice = () => {
    return selectedPrice;
  };

  return { selectedPrice, setSortPrice, getSelectedPrice };
}

