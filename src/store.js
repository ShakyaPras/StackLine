import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./reducers/data";

const store = configureStore(
  { reducer: { data: dataReducer } },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store
