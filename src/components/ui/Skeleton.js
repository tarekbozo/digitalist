import React from 'react';
import './skeleton.css';

export const Skeleton = ({ type }) => {
  const classes = `skeleton ${type}`;

  return <div className={classes}></div>;
};
