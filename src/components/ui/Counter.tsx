import React from 'react';
import { useCounter } from '../../hooks/useCounter';

interface CounterProps {
  value: number;
  suffix: string;
}

export const Counter = ({ value, suffix }: CounterProps) => {
  const { count, ref } = useCounter(value);
  return <span ref={ref}>{count}{suffix}</span>;
};
