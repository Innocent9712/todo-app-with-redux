import { ADD_TODO, REMOVE_TODO } from "../constants";
const initialState = []


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: 
            return [...state, action.payload]
        case REMOVE_TODO:
            console.log(state)
            return state.filter(todo=> todo.id !== action.payload )
        default:
            return state
    }
}