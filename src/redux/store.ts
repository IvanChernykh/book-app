import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import searchReducer from "./reducers/searchReducer";

const reducer = combineReducers({
    searchData: searchReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

type rootReducer = typeof reducer
export type state = ReturnType<rootReducer>
export default store