import axios from 'axios';
import './App.css';
import PosterList from './components/PosterList';
import PosterForm from './components/PosterForm';
import useApplicationData from './hooks/useApplicationData';

function App() {

  const {state, dispatch} = useApplicationData();
 

  const addNewPoster = (image, title, quote) => {
    axios({
      method: 'post',
      url: '/posters',
      data: {
        imgSource: image,
        title: title,
        quote: quote,
      },
    })
      .then((response) => {
        dispatch({ type: 'ADD_POSTER', payload: response.data });
      })
      .catch((error) => {
        console.log('Error adding new poster', error);
      });
  };

  const deletePoster = (id) => {
    console.log('Deleting poster with id:', id)
    axios({
      method: 'delete',
      url: `/posters/${id}`,
    })
      .then(() => {
        console.log('Poster deleted successfully')
        dispatch({ type: 'DELETE_POSTER', payload: id });
        })
      .catch((error) => {
        console.log('Error deleting poster', error);
      });
  };

  return (
    <main className="App">
      <h1>Movie Posters</h1>

      <PosterList posters={state.posters} deletePoster={deletePoster} />

      <PosterForm addNewPoster={addNewPoster} />
    </main>
  );
}

export default App;
