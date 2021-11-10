import { combineReducers } from "redux";
import authReducer from "./authReducer";
import { todoReducer } from "./todoReducer";


const reducers = combineReducers({
    auth: authReducer,
    todos: todoReducer
})

export default reducers;