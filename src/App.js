/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import { useDispatch } from "react-redux";
import { updateData } from "./actions/index";
import data from "./assets/json/data.json";

function App() {
  const dispatch = useDispatch();

  dispatch(updateData(data[0]));

  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}

export default App;
