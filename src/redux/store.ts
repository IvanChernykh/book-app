import { combineReducers, createStore } from "redux";
import searchReducer from "./reducers/searchReducer";

const reducer = combineReducers({
    search: searchReducer
})
const store = createStore(reducer)
export default store