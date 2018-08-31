import * as React from 'react';
import * as render from 'react-test-renderer';
import { TodoCounter } from './TodoCounter';

test('Render TodoCounter', () => {
  const treeJson = render.create(
    <TodoCounter count={10} />
  ).toJSON();

  expect(treeJson).toMatchSnapshot();
});
