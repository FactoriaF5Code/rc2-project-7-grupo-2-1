import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const useAxios = (axiosParams) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchData = async (params) => {
    try {
      const response = await axios.request(params);
      setResponse(response.data);
    } catch (error) {
      setError(error.response ? error.response.data : 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response, loading, error };
};
