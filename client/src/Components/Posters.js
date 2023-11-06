import React from 'react';
import './Poster.css';

const Poster = (props) => {

  const defaultImage = "https://staticg.sportskeeda.com/editor/2023/10/7f6c2-16972619758770-1920.jpg?w=840"
 
  return (
    <article className="poster">
      <img className="poster--img" src={props?.imgSource?? defaultImage} alt={props?.title?? 'Movie Poster'} />
      <h3>{props?.title?? 'No Title'}</h3>
      <h4>"{props?.quote?? 'No Quote'}"</h4>
    </article>
  );
};

export default Poster;
