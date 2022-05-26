import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducer";

export default configureStore({
  reducer: rootReducer,
  middleware: [thunkMiddleware],
});
