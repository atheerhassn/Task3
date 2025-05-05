
import React from 'react';
import '../Style/card.css';
const Card = ({ tittle, content, img }) => {
  return (
    <div className="card1-container">
      {img && <img src={img} alt={tittle} className="card-img" />}
      <div className="card-title">
        <h2>{tittle}</h2>
      </div>
      <div className="card-content">
        {content}
      </div>
    </div>
  );
};

export default Card;
