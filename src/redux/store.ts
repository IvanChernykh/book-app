import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"

import mainReducer from "./reducers/main/mainReducer"
import searchReducer from "./reducers/search/searchReducer"

const rootReducer = combineReducers({
    main: mainReducer,
    search: searchReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))


type RootReducer = typeof rootReducer
export type TStore = ReturnType<RootReducer>

//@ts-ignore
window.store = store