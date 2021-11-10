import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {  STORE } from "./constants";
import reducers from "./reducers/rootReducer";

const store = () => {
    let initialState = localStorage.getItem(STORE)
    if (initialState) {
        initialState = JSON.parse(initialState)
    } else {
        initialState = {}
    }

    const persistStoreState = (store) => (next) => (action)  => {
        const result =  next(action)
        const state = store.getState()
        localStorage.setItem(STORE, JSON.stringify(state))
        return result
    }

    return createStore(
        reducers,
        initialState,
        applyMiddleware(persistStoreState, thunk)
    )
}

export default store();