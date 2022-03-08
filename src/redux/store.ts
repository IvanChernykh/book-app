import { applyMiddleware, combineReducers, createStore } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"

import mainReducer from "./reducers/main/mainReducer"
import searchReducer from "./reducers/search/searchReducer"



const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['search', 'main']
}
const searchPersistConfig = {
    key: 'search',
    storage: storage,
    whitelist: ['recentQueries']
}

const rootReducer = combineReducers({
    main: mainReducer,
    search: persistReducer(searchPersistConfig, searchReducer),
})

export const store = createStore(persistReducer(persistConfig, rootReducer), applyMiddleware(thunk))
export const persistor = persistStore(store)


type RootReducer = typeof rootReducer
export type TStore = ReturnType<RootReducer>

//@ts-ignore
window.store = store