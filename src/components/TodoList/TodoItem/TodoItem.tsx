import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Todo } from '../../../interfaces';

export interface TodoItemProps {
  todo: Todo;
  onCompleted: () => void;
}

export function TodoItem({ todo, onCompleted }: TodoItemProps) {
  return (
    <li
      style={{ textDecoration: todo.completed ? 'line-through' : '' }}
      onClick={onCompleted}
    >
      {todo.text}
    </li>
  );
}

export default inject((store, ownProps: TodoItemProps) => ({
  onCompleted: () => store.todoStore.changeComplete(ownProps.todo.id)
}))(observer(TodoItem));
