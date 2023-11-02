import { useState } from 'react';

export function useSortCategories() {
  const [selectedCategories, setCategories] = useState<string>(
    ""
  );
  const categoriesList = ["Categories", "Italian", "Japanese", "Mexican", "Seafood", "SteakHouses", "Thai"];
  
  const setSortCategories = (option: string) => {
    setCategories(option);
  };

  const getCategories = () => {
    return selectedCategories;
  };

  return { selectedCategories, setSortCategories, getCategories, categoriesList };
}
