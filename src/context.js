import React, { useState, useContext, useEffect, createContext } from 'react';
import { useCallback } from 'react';

const url = '/api/json/2.1/searchProduct.json?query=';
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [load, setload] = useState(5);
  const [searchTerm, setSearchTerm] = useState('Sigtuna');
  const [drinks, setDrinks] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();

      const { items } = data;

      if (items) {
        const newDrink = items.map((item) => {
          const {
            id,
            name,
            producer,
            country,
            alcohol_vol,
            price_sek,
            volume_ml,
            first_sale,
          } = item;

          return {
            id: id,
            name: name,
            producer: producer,
            country: country,
            alcohol: alcohol_vol,
            price: price_sek,
            ml: volume_ml,
            sale: first_sale,
          };
        });
        setDrinks(newDrink);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <AppContext.Provider
      value={{ loading, drinks, searchTerm, setSearchTerm, load, setload }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
