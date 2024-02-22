import React, { useState } from 'react';
import './PosterForm.css';

const PosterForm = ({addPoster}) => {
  const [imageSource, setImageSource] = useState('');
  const [title, setTitle] = useState('');
  const [quote, setQuote] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    // form validation
    addPoster(imageSource, title, quote);
    // reset the values
    setImageSource('');
    setTitle('');
    setQuote('');
  }

  return (
    <>
      <h2>Add a New Poster</h2>

      <form className="poster-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="imgSource">Image Source:</label>
          <input
            type="text"
            id="imgSource"
            name="imgSource"
            value={imageSource}
            onChange={(e) => setImageSource(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="quote">Quote:</label>
          <input
            type="text"
            id="quote"
            name="quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />
        </div>

        <button type="submit">Add Poster</button>
      </form>
    </>
  );
};

export default PosterForm;
