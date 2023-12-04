import { useEffect, useState } from 'react';
import axios from 'axios';

const useApplicationData = (initialState) => {
  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/movies',
    })
      .then(({ data: { movies } }) => {
        setLoading(false);
        setPosters(movies);
        setError(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setError(err.message);
      });
  }, []);

  return {
    loading,
    posters,
    setPosters,
    error,
  };
};

export default useApplicationData;
