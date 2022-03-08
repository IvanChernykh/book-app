import { ThunkAction } from "redux-thunk"

import { api } from "../../../api/api"

import { ISearchForm } from "../../../components/main/search/SearchForm"
import { MAX_SEARCH_RESULTS } from "../../../config"
import { ISearchForBooksResponseData } from "../../../types"
import { setSearchResults, setCurrentSearch, setRelatedResults, setRecentQueries } from "./searchReducer"
import { ActionTypes } from "./types/searchActionTypes"
import { ISearchState } from "./types/searchStateTypes"


type ThunkType = ThunkAction<void, ISearchState, unknown, ActionTypes>

export const getBooksBySearch = (data: ISearchForm, startIndex: number): ThunkType => async dispatch => {
    const res = await api.searchForBooks(data, startIndex)

    const resData: ISearchForBooksResponseData = res.data

    if (res.status === 200 && resData.items) {
        dispatch(setSearchResults(resData))
        dispatch(setCurrentSearch({ ...data, startIndex }))
        dispatch(setRecentQueries({ query: data.query, bookId: resData.items[0].id }))
    }
    if (res.status === 200 && !resData.items) {
        dispatch(getBooksBySearch(data, startIndex - MAX_SEARCH_RESULTS))
    }
}

export const getRelatedBooksBySearch = (data: ISearchForm, startIndex: number): ThunkType => async dispatch => {
    const res = await api.searchForBooks(data, startIndex)

    const resData: ISearchForBooksResponseData = res.data

    if (res.status === 200) {
        dispatch(setRelatedResults(resData.items))
    }
}