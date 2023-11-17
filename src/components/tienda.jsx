// Tienda.js
import React from 'react';

const Tienda = ({ tienda }) => {
  return (
    <div>
      <h2>{tienda.title}</h2>
      <p>{tienda.description}</p>
      <img src={tienda.imgUrl} alt={tienda.title} />
    </div>
  );
};

export default Tienda;
