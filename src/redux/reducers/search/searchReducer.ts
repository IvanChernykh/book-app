import { MAX_SEARCH_RESULTS } from "../../../config"
import { actions } from "./searchActions"

import { IBookItem, ISearchForBooksResponseData, ResponseBookItem } from "../../../types"
import { ActionTypes, IClearSearchResults, ISetCurrentSearch, ISetRecentQueries, ISetRelatedResults, ISetSearchResults } from "./types/searchActionTypes"
import { ICurrentSearch, IRecentQuery, ISearchState } from "./types/searchStateTypes"

import { filterSearchQueries, setBookItem } from "../../../utils/searchReducer"


const initialState: ISearchState = {
    searchResults: null,
    currentSearch: null,
    relatedResults: null,
    recentQueries: []
}

const searchReducer = (state = initialState, action: ActionTypes): ISearchState => {
    switch (action.type) {
        case actions.SET_SEARCH_RESULTS: {
            const pagesCount = Math.ceil(action.payload.totalItems / MAX_SEARCH_RESULTS)

            const items: IBookItem[] = action.payload.items.map(item => setBookItem(item))

            return {
                ...state,
                searchResults: {
                    totalItems: action.payload.totalItems,
                    items,
                    pagesCount
                }
            }
        }
        case actions.SET_CURRENT_SEARCH: {
            return {
                ...state, currentSearch: action.payload
            }
        }
        case actions.SET_RELATED_RESULTS: {
            const items: IBookItem[] = action.payload.map(item => setBookItem(item))

            return {
                ...state, relatedResults: { items }
            }
        }
        case actions.SET_RECENT_QUERIES: {
            const recentQueries = filterSearchQueries(state, action)

            return {
                ...state, recentQueries
            }
        }
        case actions.CLEAR_SEARCH_RESULTS: {
            return {
                ...state, searchResults: null, currentSearch: null
            }
        }
        default: {
            return state
        }
    }
}

export const setSearchResults = (data: ISearchForBooksResponseData): ISetSearchResults => ({
    type: actions.SET_SEARCH_RESULTS,
    payload: data
})
export const setCurrentSearch = (data: ICurrentSearch): ISetCurrentSearch => ({
    type: actions.SET_CURRENT_SEARCH,
    payload: data
})
export const setRelatedResults = (data: ResponseBookItem[]): ISetRelatedResults => ({
    type: actions.SET_RELATED_RESULTS,
    payload: data
})
export const setRecentQueries = (data: IRecentQuery): ISetRecentQueries => ({
    type: actions.SET_RECENT_QUERIES,
    payload: data
})

export const clearSearchResults = (): IClearSearchResults => ({ type: actions.CLEAR_SEARCH_RESULTS })


export default searchReducer