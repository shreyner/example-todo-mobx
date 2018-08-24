import * as React from 'react';
import { inject, observer } from 'mobx-react';

export interface TodoCounterProps {
  count?: number;
}

export function TodoCounter({ count }: TodoCounterProps) {
  return <div>Count: {count}</div>;
}

export default inject(({ todoStore }) => ({
  count: todoStore.countTodos
}))(observer(TodoCounter));
