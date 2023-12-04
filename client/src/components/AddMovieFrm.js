import React, { useState } from 'react';
import './AddMovieFrm.css';
import useFormField from './hooks/useFormField';

const AddMovieFrm = ({ addNewPoster }) => {



  const [imgSource, setImgSource, handleImgChange] = useFormField('');
  const [title, setTitle, handleTitleChange] = useFormField('');
  const [quote, setQuote, handleQuoteChange] = useFormField('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // update the state for posters
    addNewPoster(imgSource, title, quote);

    // reset the form fields to ''
    setImgSource('');
    setTitle('');
    setQuote('');
  };

  return (
    <form className="poster-frm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="imgsrc">Image Source:</label>
        <input
          type="text"
          id="imgsrc"
          name="imgsrc"
          placeholder="Image Source"
          value={imgSource}
          onChange={handleImgChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="title">Movie Title:</label>
        <input
          type="text"
          id="title"
          name="name"
          placeholder="Movie Title"
          value={title}
          onChange={handleTitleChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="quote">Movie Quote:</label>
        <input
          type="text"
          id="quote"
          name="quote"
          placeholder="Movie Quote"
          value={quote}
          onChange={handleQuoteChange}
        />
      </div>

      <button type="submit">Add New Movie</button>
    </form>
  );
};

export default AddMovieFrm;
