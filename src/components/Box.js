import React from 'react';

export const Box = ({ number, title }) => {
  return (
    <div className="box text-center d-flex flex-column justify-content-center border rounded">
      <h1 className='fw-bold'>{number}</h1>
      <p className='text-secondary fw-semibold'>{title}</p>
    </div>
  );
};
