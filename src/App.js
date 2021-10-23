import React from "react";
import Routers from "../src/routers/routers"
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store/store";

function App() {
  return (
    <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routers/>
    </ConnectedRouter>
  </Provider>
  );
}

export default App;
