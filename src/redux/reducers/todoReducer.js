import { ADD_TODO } from "../constants";


export const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO: {
            if (state.todos) {
                return {...state, todos: [...state.todos, action.payload]}
            } else {
                return {...state, todos: [action.payload]}
            }
        }
        default:
            return {state}
    }
}