
import { LOGIN, SIGN_UP } from "../constants"

const authReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGN_UP:
            return {...state, userDetails : action.payload}
        case LOGIN:
            return {...state}
        default: 
            return state
    }
}

export default authReducer;