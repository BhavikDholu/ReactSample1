import { legacy_createStore } from "redux";
import { Reducer } from "./reducer.js";

export const store = legacy_createStore(Reducer);
