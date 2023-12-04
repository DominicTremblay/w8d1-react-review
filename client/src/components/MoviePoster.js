import React from 'react';
import './MoviePoster.css';

const MoviePoster = ({ id, imgSource, movieTitle, movieQuote }) => {
  const defaultImg =
    'https://staticg.sportskeeda.com/editor/2023/10/7f6c2-16972619758770-1920.jpg?w=840';

  return (
    <article className="movie-poster">
      <img
        className="movie-poster--img"
        src={imgSource ?? defaultImg}
        alt={movieTitle ?? 'Default movie title'}
      />

      <h3>{movieTitle ?? 'Default movie title'}</h3>

      <h4>{movieQuote ?? 'Default movie quote'}</h4>
    </article>
  );
};

export default MoviePoster;
