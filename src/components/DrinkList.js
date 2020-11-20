import React from 'react';
import { Drink } from './Drink';
import './drinkListStyle.css';
import './paginationBtn.css';
import { useGlobalContext } from './../context';
import { Skeleton } from './ui/Skeleton';

export const DrinkList = () => {
  const { loading, load, setload, drinks } = useGlobalContext();

  const loadMoreHandlar = () => {
    setload((prevValue) => prevValue + 3);
  };

  return (
    <section className='section'>
      <div className='drinks-center'>
        {drinks.slice(0, load).map((item) => {
          return <Drink key={item.id} {...item} />;
        })}
        {loading && [1, 2, 3, 4, 5].map((card) => <Skeleton key={card} />)}
        {drinks.length < 1 ? (
          <h2 className='section-title'>No drink Match </h2>
        ) : (
          ''
        )}
      </div>

      {/*Pagination */}

      <div className='load-more'>
        <button
          className={load > drinks.length ? 'hidden' : 'btn'}
          onClick={loadMoreHandlar}
        >
          Load more
        </button>
      </div>
    </section>
  );
};
