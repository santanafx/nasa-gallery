import { createStore, combineReducers, applyMiddleware } from "redux";
import { data } from "../redux/reducers/data";
import logger from "redux-logger";

const rootReducer = combineReducers({ data });

export const store = createStore(rootReducer, applyMiddleware(logger));
