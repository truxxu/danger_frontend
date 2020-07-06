import { useState } from 'react';

import dangerApi from '../api/dangerApi';

export default () => {

  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // const [errorMessage, setErrorMessage] = useState('');

  const getResource = async (resource) => {
    try {
      const response = await dangerApi.get(resource);
      setIsLoading(false);
      setResults(response.data);
    } catch (error) {
      // setErrorMessage('Couldn\'t load resource');
      window.alert('Something happened, try again later')
      // setIsLoading(false);
    }
  }

  return [getResource, results, isLoading]
}
