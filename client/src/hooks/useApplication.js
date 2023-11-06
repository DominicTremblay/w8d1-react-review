import { useEffect, useReducer } from 'react';
import applicationReducer, {
  LOAD_POSTERS,
} from '../reducers/applicationReducer';
import axios from 'axios';

const useApplication = () => {
  const [state, dispatch] = useReducer(applicationReducer, {
    posters: [],
    loading: true,
  });

  useEffect(() => {

    axios({
      url: '/posters',
      method: 'GET',
    })
      .then(({ data }) => {
        dispatch({ type: LOAD_POSTERS, posters: data });
      })
      .catch((err) => console.log(err.message));
  }, []);

  return { state, dispatch };
};

export default useApplication;
