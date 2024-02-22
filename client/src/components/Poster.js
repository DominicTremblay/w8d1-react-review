import React from 'react';
import PropTypes from 'prop-types';

import './Poster.css';

function Poster({ id, imgSource, title, quote, deletePoster }) {
  return (
    <article className="poster">
      <button className="poster--delete" onClick={() => deletePoster(id)}>
        X
      </button>
      <img src={imgSource} alt={title} className="poster--img" />

      <h3>{title}</h3>

      <h4>{quote}</h4>
    </article>
  );
}

Poster.defaultProps = {
  imgSource:
    'https://staticg.sportskeeda.com/editor/2023/10/7f6c2-16972619758770-1920.jpg?w=840',
  title: 'Missing Title',
  quote: 'Missing Quote',
};

Poster.propTypes = {
  imgSource: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Poster;
