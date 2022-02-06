import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"

import reducer from "./reducers/reducer"

const rootReducer = combineReducers({
    search: reducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))


type RootReducer = typeof rootReducer
export type TState = ReturnType<RootReducer>