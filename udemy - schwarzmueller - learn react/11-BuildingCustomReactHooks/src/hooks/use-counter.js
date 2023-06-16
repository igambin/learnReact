import { useState, useEffect } from "react";

const useCounter = (step = 1, intervalMs = 1000) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + step);
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;
