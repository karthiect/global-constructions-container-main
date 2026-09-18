import { useState, useEffect, useRef } from 'react';

export const useCounter = (value: number) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView.current) {
          isInView.current = true;
          let start = 0;
          const duration = 2000;
          const stepTime = Math.abs(Math.floor(duration / value));
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === value) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return { count, ref };
};
