import * as React from 'react';

export interface TodoCounterProps {
  count: number;
}

export function TodoCounter({ count }: TodoCounterProps) {
  return <div>Count: {count}</div>;
}
