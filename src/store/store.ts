import { types, cast } from "mobx-state-tree";
import TodoModel from "./TodoModel";

export enum TodoFilters {
  ALL,
  COMPLETED,
  ACTIVE
}

let lastIdTodo: number = 0;
// function generateTodo(count = 5) {
//   return Array.from(Array(5)).map((_, index) => {
//     return {id: lastIdTodo++, text: `todo ${index}`, completed: index % 2 === 0}
//   })
// }

export const TodoStore = types
  .model("TodoStore", {
    todos: types.optional(types.array(TodoModel), []),
    filter: types.optional(types.number, TodoFilters.ALL)
  })
  .views(self => ({
    get countTodos() {
      return self.todos.length;
    },
    get filtratedTodo() {
      switch (self.filter) {
        case TodoFilters.ACTIVE:
          return self.todos.filter(({ completed }) => !completed);
        case TodoFilters.COMPLETED:
          return self.todos.filter(({ completed }) => completed);
        default:
          return self.todos;
      }
    }
  }))
  .actions(self => ({
    addTodo(text: string, completed?: boolean) {
      self.todos.push(cast({ id: lastIdTodo++, text, completed}))
    },
    setFilter(filter: TodoFilters) {
      self.filter = filter
    },
    clearCompletedTodo() {
      self.todos = cast(self.todos.filter(({ completed }) => !completed))
    }
  }));

export default TodoStore.create();
