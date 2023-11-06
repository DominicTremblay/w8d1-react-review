import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import PosterList from './components/PosterList';
import PosterForm from './components/PosterForm';
import useApplication from './hooks/useApplication';

function App() {

  const { posters, setPosters, loading } = useApplication();


  const addNewMovie = (imgSource, title, quote) => {
    const newMovie = {
      id: Math.random().toString(36).substring(2, 8),
      imgSource,
      title,
      quote,
    };

    setPosters((prev) => [...prev, newMovie]);
  };

  const deleteMovie = (id) => {

    const updatedMovies = posters.filter((movieObj) => movieObj.id !== id);

    setPosters(prev => [...updatedMovies]);
  };

  return (
    <div className="App">
      <h1>Movie Posters</h1>

      {loading && <h3>Loading Posters...</h3>}

      {!loading && posters && <PosterList posters={posters} />}

      <PosterForm addNewMovie={addNewMovie} deleteMovie={deleteMovie} />
    </div>
  );
}

export default App;
