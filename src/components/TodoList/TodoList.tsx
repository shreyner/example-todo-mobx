import * as React from "react";
import { inject, observer } from "mobx-react";
import { Todo } from "../../interfaces";
import TodoItem from "./TodoItem/TodoItem";

export interface TodoListProps {
  todos: ReadonlyArray<Todo>;
}

export function TodoList({ todos }: TodoListProps) {
  return <ul>{todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}</ul>;
}

export default inject(store => ({
  todos: store.todoStore.filtratedTodo
}))(observer(TodoList));
