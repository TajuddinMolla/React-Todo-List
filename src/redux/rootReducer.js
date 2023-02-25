import { combineReducers } from "redux";
import todoReducer from "./todos/reducer";
import filterReducer from './filters/reducer'

export const rootReducer = combineReducers({
    todos: todoReducer,
    filters: filterReducer
});