import { TodoStore, TodoFilters } from './store';
import '@types/jest';

describe('', () => {
  const store = TodoStore.create();

  test('can create a instance of the Store', () => {
    expect(store).toEqual({
      todos: [],
      filter: TodoFilters.ALL
    });
  });

  test('can add todo in model', () => {
    store.addTodo('Example');
    store.addTodo('Example 2');
    store.addTodo('Example 3');

    expect(store.todos.length).toBe(3);
    expect(store.todos[0].text).toBe('Example');
  });

  test('Check counter', () => {
    expect(store.countTodos).toBe(3);
  });

  test('Check setFilter and filtratedTodo', () => {
    store.todos[0].changeCompleted();

    expect(store.filtratedTodo.length).toBe(3);
    store.setFilter(TodoFilters.ACTIVE);
    expect(store.filter).toBe(TodoFilters.ACTIVE);
    expect(store.filtratedTodo.length).toBe(2);
    store.setFilter(TodoFilters.COMPLETED);
    expect(store.filtratedTodo.length).toBe(1);
  });

  test('Clear all completed', () => {
    store.clearCompletedTodo();

    expect(store.todos.length).toBe(2);
  });

});
