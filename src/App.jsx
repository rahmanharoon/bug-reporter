import Home from "./screens";
import store from "./redux/store";
import { Provider } from "react-redux";
import React, { useEffect } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

const App = () => {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};

export default App;
