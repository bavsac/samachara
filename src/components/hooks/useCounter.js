import { useState } from 'react';

const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const incrementCount = () => {
    setCount((currCount) => currCount + 1);
    return count;
  };

  const decrementCount = () => {
    setCount((currCount) => currCount - 1);
    return count;
  };

  return { count, setCount, incrementCount, decrementCount };
};

export default useCounter;
