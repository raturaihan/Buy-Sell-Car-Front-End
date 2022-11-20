import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/indexReducers";
import applyMiddleware from './middleware'


const store = createStore(reducers, composeWithDevTools(applyMiddleware));

export default store;
