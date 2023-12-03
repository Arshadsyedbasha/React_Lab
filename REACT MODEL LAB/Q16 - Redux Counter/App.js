import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Counter from "./components/redux/counter";
import store from "./components/redux/store";
import Fetching from "./components/fetchingjson/fetching";
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
export default App;
