import { combineReducers } from "redux";
import carReducer from "./carReducers";
import favoriteReducer from "./favoriteReducers";
import userReducer from "./userReducers";

const reducers = combineReducers({carReducer, userReducer, favoriteReducer});

export default reducers;
export type RootState = ReturnType<typeof reducers>;