import { ADD_TODO, REMOVE_TODO } from "../constants"

export const addTodo = (payload) => {
    return (dispatch) => {
        dispatch ({
            type: ADD_TODO,
            payload
        })
    }
}

export const removeTodo = (payload) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_TODO,
            payload
        })
    }
}