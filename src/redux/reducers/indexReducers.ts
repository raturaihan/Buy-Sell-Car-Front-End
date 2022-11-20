import { combineReducers } from "redux";
import carReducer from "./carReducers";

const reducers = combineReducers({carReducer});

export default reducers;
export type RootState = ReturnType<typeof reducers>;