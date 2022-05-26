import { combineReducers } from "redux";
import home, { initialState as homeInitial } from "../Home/Application/slice";

export const initialState = {
  home: homeInitial,
};

export default combineReducers({ home });
