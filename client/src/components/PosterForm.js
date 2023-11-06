import './PosterForm.css';
import useFormField from '../hooks/useFormField';

const PosterForm = ({ addNewMovie, deleteMovie }) => {
  const [imgSource, setImgSource, handleImgChange] = useFormField('');
  const [title, setTitle, handleTitleChange] = useFormField('');
  const [quote, setQuote, handleQuoteChange] = useFormField('');

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewMovie(imgSource, title, quote);

    setImgSource('');
    setTitle('');
    setQuote('');
  };

  return (
    <section className="poster-form">
      <h3>Add New Movie</h3>

      <form id="poster-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="imgSource">Image Source:</label>
          <input
            id="imgSource"
            type="text"
            name="imgSource"
            value={imgSource}
            onChange={handleImgChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="quote">Quote:</label>
          <input
            id="quote"
            type="text"
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
