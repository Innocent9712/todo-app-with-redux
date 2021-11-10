import { ADD_TODO, REMOVE_TODO } from "../constants"

export const addTodo = (payload) => {
    return (dispatch) => {
        dispatch ({
            type: ADD_TODO,
            payload
        })
    }
}

export const removeTodo = (state, payload) => {
    let todos = state
    let id = payload
    todos = todos.filter(todo => !todo[id])
    return (dispatch) => {
        dispatch({
            type: REMOVE_TODO,
            payload: todos
        })
    }
}