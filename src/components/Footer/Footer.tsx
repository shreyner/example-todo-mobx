import * as React from "react";
import { inject, observer } from "mobx-react";
import TodoCount from "../TodoCounter/TodoCounter";
import Filters from "../Filters/Filters";

export interface FooterProps {
  count: number;
  clearCompleted: () => void;
}

export function Footer({ count, clearCompleted }: FooterProps) {
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
