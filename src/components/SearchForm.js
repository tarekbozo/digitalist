import React, { useEffect, useRef } from 'react';
import './searchFormStyle.css';
import { useGlobalContext } from '../context';

export const SearchForm = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  const searchInput = useRef('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const searchDrink = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    searchInput.current.focus();
  }, [setSearchTerm]);

  return (
    <section className='section search'>
      <h1 className='section-title'>Digitalist </h1>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite Drink</label>
          <input
            type='text'
            name='name'
            value={searchTerm}
            ref={searchInput}
            onChange={searchDrink}
          />
        </div>
      </form>
    </section>
  );
};
