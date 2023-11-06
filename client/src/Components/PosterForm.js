import './PosterForm.css';
import useFormField from '../hooks/useFormField';

const PosterForm = ({ addNewPoster }) => {

  const [imgSource, setImgSource, handleImgChange] = useFormField();
  const [title, setTitle, handleTitleChange] = useFormField();
  const [quote, setQuote, handleQuoteChange] = useFormField();

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewPoster(imgSource, title, quote);
    setImgSource('');
    setTitle('');
    setQuote('');
  };

  return (
    <section className="poster-form">
      <h3>Add a New Poster</h3>
      <form id="poster-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="img-src">Image Source:</label>
          <input
            type="text"
            id="img-src"
            name="img-src"
            value={imgSource}
            onChange={handleImgChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
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
            value={quote}
            onChange={handleQuoteChange}
          />
        </div>
        <input type="submit" value="Add Movie" />
      </form>
    </section>
  );
};

export default PosterForm;
