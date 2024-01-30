import axios from 'axios';
import { useState, useEffect } from 'react';

export const useAxios = (url) => {
    const[ data, setData ]= useState();

    useEffect(() => {
        axios
        .get(url)
        .then((response) => setData(response.data))
        .catch((error) => 
        console.error('Error al obtener datos del backend', error))
    });
  return (
    {data}
  )
}
