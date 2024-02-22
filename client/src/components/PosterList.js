import React from 'react';
import Poster from './Poster';
import './PosterList.css';

const PosterList = ({posters, deletePoster}) => {


  const posterElements = posters?.map((poster) => (
    <Poster
      key={poster.id}
      id={poster.id}
      imgSource={poster.imgSource}
      title={poster.title}
      quote={poster.quote}
      deletePoster={deletePoster}
    />
  ));


  return <section className="poster-list">{posterElements}</section>;
};

export default PosterList;
