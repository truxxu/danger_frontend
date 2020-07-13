import { useState } from 'react';

import dangerApi from '../api/dangerApi';

export default () => {

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const createNewEntry = async (resource, body, callback, setIsCreated) => {
    setIsLoading(true);
    try {
      await dangerApi.post(resource, body);
      setIsCreated(true)
      callback();
    } catch (error) {
      setErrorMessage('Error! Couldn\'t create new entry');
    } finally {
      setIsLoading(false);
      setIsCreated(false)
    }
  }

  return [createNewEntry, isLoading, errorMessage]
}
