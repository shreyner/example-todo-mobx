import { inject, observer } from 'mobx-react';
import { TodoCounter } from './TodoCounter';

export default inject(({todoStore}) => ({
  count: todoStore.countTodos
}))(observer(TodoCounter));
