import { useEffect, useState } from "react";

export const useStatCardAnimation = (number: number, delay: number) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      const duration = 1500;
      const steps = 60;
      const increment = number / steps;
      let current = 0;

      const counter = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(counter);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(counter);
    }, delay);

    return () => clearTimeout(timer);
  }, [number, delay]);

  return { count, isVisible };
};
