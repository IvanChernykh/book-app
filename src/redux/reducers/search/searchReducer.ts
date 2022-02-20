import { MAX_SEARCH_RESULTS } from "../../../config"
import { actions } from "./searchActions"

import { IBookItem, ISearchForBooksResponseData } from "../../../types"
import { ActionTypes, IClearSearchResults, ISetCurrentSearch, ISetSearchResults } from "./types/searchActionTypes"
import { ICurrentSearch, IState } from "./types/searchStateTypes"


const initialState: IState = {
    searchResults: null,
    currentSearch: null
}

const searchReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        case actions.SET_SEARCH_RESULTS: {
            const pagesCount = Math.ceil(action.payload.totalItems / MAX_SEARCH_RESULTS)

            const items: IBookItem[] = action.payload.items.map(item => ({
                id: item.id,
                authors: item.volumeInfo.authors,
                categories: item.volumeInfo.categories,
                description: item.volumeInfo.description,
                imageLinks: item.volumeInfo.imageLinks,
                language: item.volumeInfo.language,
                publishedDate: item.volumeInfo.publishedDate,
                subtitle: item.volumeInfo.subtitle,
                title: item.volumeInfo.title,
            }))

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
export const clearSearchResults = (): IClearSearchResults => ({ type: actions.CLEAR_SEARCH_RESULTS })

export default searchReducer