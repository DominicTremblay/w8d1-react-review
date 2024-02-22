import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import dataReducer from '../reducer/dataReducer';

const useApplicationData = () => {


  const [state, dispatch] = useReducer(dataReducer, []);

  useEffect(() => {
    axios({
      method: 'get',
      url: '/posters',
      responseType: 'json',
    })
      .then((response) => {
        dispatch({ type: 'LOAD_POSTERS', payload: response.data });
      })
      .catch((error) => {
        console.log('Error fetching data', error);
      });
  }, []);


  return { state, dispatch };

};

export default useApplicationData;