import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price"><small>starting at N{price}</small></h4>
        </div>
        <p>
          {readMore ? info: `${info.substring(0,150)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? ' << show less' : ' >> read more'}
          </button>
        </p>
        <button 
          className="delete-btn" 
          onClick={() => removeTour(id)}
        >Not interested</button>
      </footer>
    </article>
  );
};

export default Tour;
