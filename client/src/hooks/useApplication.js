import axios from 'axios';
import { useEffect, useState } from 'react';

const useApplication = (initial) => {
  const [posters, setPosters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      url: '/posters',
      method: 'GET',
    })
      .then(({ data }) => {
        setPosters(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return { posters, setPosters, loading };
};

export default useApplication;
