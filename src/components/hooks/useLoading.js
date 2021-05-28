import { useState } from 'react';

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  const toggleIsLoading = () => {
    setIsLoading((currState) => !currState);
  };

  return { isLoading, setIsLoading, toggleIsLoading };
};

export default useLoading;
