import { useState } from 'react';

import dangerApi from '../api/dangerApi';

export default () => {

  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const getResource = async (resource) => {
    try {
      const response = await dangerApi.get(resource);
      setIsLoading(false);
      setResults(response.data);
    } catch (error) {
      setErrorMessage('Algo salio mal, intentalo de nuevo');
      // setIsLoading(false);
    }
  }

  return [getResource, results, errorMessage, isLoading]
}
