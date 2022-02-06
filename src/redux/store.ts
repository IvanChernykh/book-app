import { combineReducers, createStore } from "redux"
import reducer from "./reducers/reducer"

const rootReducer = combineReducers({
    search: reducer
})

export const store = createStore(rootReducer)


type RootReducer = typeof rootReducer
export type TState = ReturnType<RootReducer>