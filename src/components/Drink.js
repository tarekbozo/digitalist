import React from 'react';
import './drink.css';

export const Drink = ({
  name,
  producer,
  country,
  price,
  alcohol,
  ml,
  sale,
}) => {
  return (
    <>
      <article className='drink'>
        <div className='drink-footer'>
          <h3>{name}</h3>
          <h4>{producer}</h4>
          <h5>{country}</h5>
          <div className='drink-info'>
            <strong>Alcohol Volume : </strong>
            <p> {alcohol}</p>
          </div>
          <div>
            <strong>Size in milliliter : </strong>
            <p>{ml}</p>
          </div>
          <div>
            <strong>First sale in :</strong>
            <p>{sale}</p>
          </div>
          <div>
            <strong>Price : </strong>
            <p>{price}</p>
          </div>
        </div>
      </article>
    </>
  );
};
