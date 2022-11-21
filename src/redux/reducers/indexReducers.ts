import { combineReducers } from "redux";
import carReducer from "./carReducers";
import userReducer from "./userReducers";

const reducers = combineReducers({carReducer, userReducer});

export default reducers;
export type RootState = ReturnType<typeof reducers>;