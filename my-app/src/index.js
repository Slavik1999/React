import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./components/reducers";
import App from "./components/app";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// import { createStore } from "redux";
// import * as actions from "./components/actions";
// import reducer from "./components/reducers";

// const store = createStore(reducer);

// const update = () => {
//   console.log(store.getState());
// };

// store.subscribe(update);
// store.dispatch(actions.rnd(Math.floor(Math.random() * 10)));
// store.dispatch(actions.inc());
// store.dispatch(actions.dec());
