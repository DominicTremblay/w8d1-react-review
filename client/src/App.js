import './App.css';
import PosterList from './Components/PosterList';
import PosterForm from './Components/PosterForm';
import useApplication from './hooks/useApplication';
import { ADD_POSTER } from './reducers/applicationReducer';

function App() {

  const {state, dispatch} = useApplication();
  
 
  const addNewPoster = (imgSource, title, quote) => {
    const newPoster = {
      id: Math.random().toString(36).substring(2, 6),
      imgSource,
      title,
      quote,
    };
    dispatch({type: ADD_POSTER, poster: newPoster});
  };

  return (
    <div className="App">
      <h1>React Review</h1>

      {state.loading && <h2>state.Loading posters...</h2>}

      {!state.loading &&  <PosterList posters={state.posters} /> }
      <PosterForm addNewPoster={addNewPoster} />
  
    </div>
  );
}

export default App;
