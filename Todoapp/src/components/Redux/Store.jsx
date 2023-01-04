import { createStore } from "redux";
import { reducer } from "./Reducers/TodoReducer";

export const store = createStore(reducer);
