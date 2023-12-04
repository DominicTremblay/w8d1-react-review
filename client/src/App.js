import React, { useState, useEffect } from 'react';

import './App.css';
import Header from './components/Header';
import PosterList from './components/PosterList';
import AddMovieFrm from './components/AddMovieFrm';
import useApplicationData from './components/hooks/useApplicationData';

function App() {
 
const {
  loading,
  posters,
  setPosters,
  error,
} = useApplicationData();

  const addNewPoster = (imgSource, title, quote) => {
    const id = Math.random().toString(36).substring(2, 8);

    const newMoviePoster = {
      id,
      imgSource,
      title,
      quote,
    };

    setPosters((prev) => [...prev, newMoviePoster]);
  };

  return (
    <div className="App">
      <Header />

      {loading && <h3>Loading...</h3>}
      {!loading && !error && <PosterList posters={posters} />}
      <AddMovieFrm addNewPoster={addNewPoster} />
      {!loading && error && <h3>{error}</h3>}
    </div>
  );
}

export default App;
