// src/components/TourCard.jsx
import React, { useState } from 'react';

function TourCard({ id, name, image, info, price, onRemove }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="tour-card">
      <img src={image} alt={name} />
      <div className="tour-info">
        <header>
          <h4>{name}</h4>
          <span className="price">${price}</span>
        </header>
        <p>
          {readMore ? info : `${info.substring(0, 100)}... `}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className="remove-btn" onClick={() => onRemove(id)}>
          Not Interested
        </button>
      </div>
    </article>
  );
}

export default TourCard;