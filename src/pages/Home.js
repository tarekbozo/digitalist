import React from 'react';
import { DrinkList } from '../components/DrinkList';
import { SearchForm } from './../components/SearchForm';

export const Home = () => {
  return (
    <>
      <SearchForm />
      <DrinkList />
    </>
  );
};
