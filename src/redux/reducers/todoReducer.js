import { ADD_TODO, MARK_TODO, REMOVE_TODO } from "../constants";
const initialState = []


export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: 
            return [...state, action.payload]
        case REMOVE_TODO:
            console.log(state)
            return state.filter(todo=> todo.id !== action.payload )
        case MARK_TODO:
            return state.map(todo => {
                if (todo.id === action.payload) {
                    console.log(state)
                    return {...todo, completed: !todo.completed}
                } else {
                    return todo
                }
            })
        default:
            return state
    }
}