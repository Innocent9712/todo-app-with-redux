import { ADD_TODO, MARK_TODO, REMOVE_TODO } from "../constants"

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

export const todoStatus = (payload) => {
    return (dispatch) => {
        dispatch({
            type: MARK_TODO,
            payload
        })
    }
}