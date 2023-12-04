import React from 'react';
import MoviePoster from './MoviePoster';
import './PosterList.css';

const PosterList = ({ posters }) => {
  const posterList = posters.map(({ id, imgSource, title, quote }) => (
    <MoviePoster key={id} id={id} imgSource={imgSource} movieTitle={title} movieQuote={quote} />
  ));

  return (
    <section className="poster-list">
      {posterList}
    </section>
  );
};

export default PosterList;
