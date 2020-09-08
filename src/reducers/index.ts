import { History } from "history";
import { combineReducers } from "redux";
import { Todo } from "../model";
import * as todoReducer from "./issue";

export interface RootState {
	todoList: Todo[];
}

export default (history: History) =>
	combineReducers({
		...todoReducer,
	});
