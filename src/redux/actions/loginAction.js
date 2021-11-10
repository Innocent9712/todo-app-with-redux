import { LOGIN } from "../constants";

export const loginAction = (payload) => (dispatch) => {
    dispatch({
        type: LOGIN,
        payload
    })
}