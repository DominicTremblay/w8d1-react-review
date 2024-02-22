
import axios from 'axios';
import './App.css';
import PosterList from './components/PosterList';
import PosterForm from './components/PosterForm';
import useApplicationData from './hooks/useApplicationData';

function App() {
  
  const [state, dispatch] = useApplicationData();

  const addPoster = (image, title, quote) => {
    const newPoster = {
      imgSource: image,
      title: title,
      quote: quote,
    };

    axios({
      method: 'post',
      url: '/posters',
      data: newPoster,
    })
      .then((response) => {
        dispatch({ type: 'ADD_POSTER', payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletePoster = (id) => {
    axios({
      method: 'delete',
      url: `/posters/${id}`,
    })
      .then((response) => {
        dispatch({ type: 'DELETE_POSTER', payload: id });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main className="App">
      <h1>Movie Posters</h1>

      <PosterList posters={state.posters} deletePoster={deletePoster} />

      <PosterForm addPoster={addPoster} />
    </main>
  );
}

export default App;
