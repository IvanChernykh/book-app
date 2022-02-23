import { MAX_SEARCH_RESULTS } from "../../../config"
import { actions } from "./searchActions"

import { IBookItem, ISearchForBooksResponseData, ResponseBookItem } from "../../../types"
import { ActionTypes, IClearSearchResults, ISetCurrentSearch, ISetRelatedResults, ISetSearchResults } from "./types/searchActionTypes"
import { ICurrentSearch, IState } from "./types/searchStateTypes"

import { setBookItem } from "../../../utils/common"


const initialState: IState = {
    searchResults: null,
    currentSearch: null,
    relatedResults: null
}

const searchReducer = (state = initialState, action: ActionTypes): IState => {
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

export const clearSearchResults = (): IClearSearchResults => ({ type: actions.CLEAR_SEARCH_RESULTS })


export default searchReducer