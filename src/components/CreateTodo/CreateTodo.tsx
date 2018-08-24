import * as React from 'react';
import { inject, observer } from 'mobx-react';

export interface CreateTodoProps {
  onSave: (text: string) => void;
}

export interface CreateTodoState {
  text: string;
}

export class CreateTodo extends React.Component<
  CreateTodoProps,
  CreateTodoState
> {
  state = {
    text: ''
  };

  render() {
    const { text } = this.state;

    return (
      <div>
        <input
          value={text}
          onChange={this.handleChangeInput}
          onKeyDown={this.handleKeyDown}
        />
        <button onClick={this.addNewTodo}>Add</button>
      </div>
    );
  }

  handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    this.setState({ text });
  }

  handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.which === 13) {
      this.addNewTodo();
    }
  }

  addNewTodo = () => {
    const { text } = this.state;
    if (text.trim().length) {
      this.props.onSave(text);
      this.setState({ text: '' });
    }
  }
}

export default inject(store => ({
  onSave: store.todoStore.addTodo
}))(observer(CreateTodo));
