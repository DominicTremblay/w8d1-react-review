import { useState } from 'react';
import './PosterForm.css';

const PosterForm = ({addNewPoster}) => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [quote, setQuote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // add new poster
    addNewPoster(image, title, quote);
    setImage('');
    setTitle('');
    setQuote('');
  }

  return (
    <section className="poster-form">
      <h3>Add a New Poster</h3>

      <form id="poster-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="imgSource">Image Source:</label>
          <input
            type="text"
            id="imgSource"
            name="imgSource"
            value={image}
            onChange={(e) => setImage(e.target.value)}
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
    </section>
  );
};

export default PosterForm;
