import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxPromise from "redux-promise";
import ReduxThunk from "redux-thunk";
import Reducers from "./reducers";
import AppRouter from "./components/routes/appRoutes";
import history from "./history";

export const store = createStore(
  Reducers,
  composeWithDevTools(applyMiddleware(ReduxPromise, ReduxThunk))
);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter history={history} />
  </Provider>,
  document.querySelector("#app")
);
