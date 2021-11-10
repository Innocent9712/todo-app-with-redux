import { SIGN_UP } from "../constants"

export const  signUpAction = (payload) => {
    return (dispatch) => {
        dispatch({
            type: SIGN_UP,
            payload
        })
    }
}