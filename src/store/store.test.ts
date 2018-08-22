import { TodoStore, TodoFilters } from "./store";

describe("", () => {
  const dataStore = {
    todos: [],
    filter: TodoFilters.ACTIVE
  };

  test("can create a instance of the Store", () => {
    const store = TodoStore.create(Object.assign(dataStore));

    expect(store.toJSON()).toEqual(dataStore);
  });
});
