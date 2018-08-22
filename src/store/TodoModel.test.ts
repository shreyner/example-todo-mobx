import TodoModel from "./TodoModel";

describe("describe", () => {
  const data = {
    id: 1,
    text: "Hello world",
    completed: true
  };

  test("can create a instance of the TodoModel", () => {
    const item = TodoModel.create(Object.assign({}, data));

    expect(item.toJSON()).toEqual(Object.assign(data));
  });

  test("can change property complete", () => {
    const item = TodoModel.create(Object.assign({}, data));

    item.changeCompleted();

    expect(item.completed).toBeFalsy();
  });
});
