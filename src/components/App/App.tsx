import * as React from "react";
import Header from "../Header/Header";
import MainSaction from "../MainSaction/MainSaction";
import Footer from "../Footer/Footer";

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <div>
//           <input onChange={this.handleChangeValue} />
//           <button onClick={this.handleAddTodo}>Add</button>
//         </div>
//         <ul>{this.renderTodoList(todoStore.filtratedTodo)}</ul>
//         <div>
//           <button onClick={() => todoStore.setFilter(TodoFilters.ALL)}>
//             ALL
//           </button>
//           <button onClick={() => todoStore.setFilter(TodoFilters.ACTIVE)}>
//             ACTIVE
//           </button>
//           <button onClick={() => todoStore.setFilter(TodoFilters.COMPLETED)}>
//             COMPLETED
//           </button>
//         </div>
//         <div>
//           <button onClick={() => todoStore.clearCompletedTodo()}>Clear</button>
//         </div>
//       </div>
//     );
//   }

//   renderTodoList = (todoList: Array<Todo>) =>
//     todoList.map(({ id, text, completed }) => (
//       <li
//         key={id}
//         style={{ textDecoration: completed ? "line-through" : "" }}
//         onClick={this.handleCompleted(id)}
//       >
//         {text}
//       </li>
//     ));

//   handleChangeValue = (event: any) => {
//     const text = event.target.value;
//     this.setState({ text });
//   };

//   handleCompleted = (id: number) => () => {
//     todoStore.changeComplete(id);
//   };

//   handleAddTodo = () => {
//     const { text } = this.state;
//     if (text.trim().length) {
//       todoStore.addTodo(this.state.text);
//       this.setState({ text: "" });
//     }
//   };
// }

export default function App() {
  return (
    <div>
      <Header />
      <MainSaction />
      <Footer />
    </div>
  );
}
