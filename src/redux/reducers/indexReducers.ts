import { combineReducers } from "redux";
import carReducer from "./carReducers";
import categoryReducer from "./categoryReducers";
import favoriteReducer from "./favoriteReducers";
import testdriveReducer from "./testdriveReducers";
import transactionReducer from "./transactionReducers";
import userReducer from "./userReducers";

const reducers = combineReducers({
  carReducer,
  userReducer,
  favoriteReducer,
  testdriveReducer,
  transactionReducer,
  categoryReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
