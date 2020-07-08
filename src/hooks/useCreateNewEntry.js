import { useState } from 'react';

import dangerApi from '../api/dangerApi';

export default () => {

  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const createNewEntry = async (resource, body) => {
    try {
      await dangerApi.post(resource, body);
      setIsLoading(false);
    } catch (error) {
      setErrorMessage('Couldn\'t create new entry');
      setIsLoading(false);
    }
  }

  return [createNewEntry, isLoading, errorMessage]
}
