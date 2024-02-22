import { useEffect, useReducer } from 'react';
import axios from 'axios';
import dataReducer from '../reducer/dataReducer';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, []);

  useEffect(() => {
    axios
      .get('/posters')
      .then((response) => {
        dispatch({ type: 'LOAD_POSTER', payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      }, []);
  });

  return [state, dispatch];
};

export default useApplicationData;
