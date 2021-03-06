import * as React from 'react';
import { inject, observer } from 'mobx-react';
import TodoCount from '../TodoCounter';
import Filters from '../Filters/Filters';

export interface FooterProps {
  clearCompleted: () => void;
}

export function Footer({ clearCompleted }: FooterProps) {
  return (
    <footer>
      <TodoCount />
      <Filters />
      <button onClick={clearCompleted}>Clear completed</button>
    </footer>
  );
}

export default inject(({ todoStore }) => ({
  clearCompleted: todoStore.clearCompletedTodo
}))(observer(Footer));
