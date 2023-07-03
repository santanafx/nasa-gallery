import { createStore, combineReducers, applyMiddleware } from "redux";
import { teste } from "../redux/reducers/teste";
import logger from "redux-logger";

const rootReducer = combineReducers({ teste });

export const store = createStore(rootReducer, applyMiddleware(logger));
