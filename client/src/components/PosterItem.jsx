import React from 'react';
import './PosterItem.css';

const PosterItem = ({id, imgSource, title, quote, deletePoster}) => {
  return (
    <article className='poster-item'>
      <button className='poster-item__delbtn' onClick={() => deletePoster(id)}>X</button>
      <img
        className='poster-item__image'
        src={imgSource}
        alt={title}
      />

      <h3>{title}</h3>

      <h4>
       {quote}
      </h4>
    </article>
  );
};

export default PosterItem;
