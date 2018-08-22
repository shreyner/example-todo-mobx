import * as React from "react";
import { render } from "react-dom";
import { Provider } from "mobx-react";

import todoStore from "./store/store";
import App from "./components/App/App";

render(
  <Provider todoStore={todoStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
