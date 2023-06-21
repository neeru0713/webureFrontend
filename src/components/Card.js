import React from 'react';
import '../App.css';

export const Card = ({ photo, title }) => {
  return (
    <div className="card d-flex flex-column fw-medium align-items-center border border-0 p-3 rounded">
      <div className="card-img text-center">
        <img src={photo} className="w-75" />
      </div>
      <h4>{title}</h4>
      <p className="text-center">
        Simply dummy text of the printing and typesetting industry. Lorem ipsum
        has been the indusrt's standrad dummy text ever since the 1500s.
      </p>
    </div>
  );
};
