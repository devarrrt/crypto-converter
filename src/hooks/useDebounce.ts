import { useEffect, useRef } from 'react';

interface useDebounceProps {
  fn: () => void;
  delay: number;
  deps: any[];
  isSource: boolean;
}

export const useDebounce = ({ fn, delay, deps }: useDebounceProps) => {
  const timetRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    clearInterval(timetRef.current);
    timetRef.current = setTimeout(fn, delay);

    return () => clearInterval(timetRef.current);
  }, [fn, delay, deps]);
};
