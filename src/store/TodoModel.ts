import { types } from 'mobx-state-tree';

export default types
  .model('TodoModel', {
    id: types.number,
    text: types.string,
    completed: types.optional(types.boolean, false)
  })
  .actions(self => ({
    changeCompleted() {
      self.completed = !self.completed;
    }
  }));
