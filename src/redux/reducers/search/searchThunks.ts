import { ThunkAction } from "redux-thunk"

import { api } from "../../../api/api"

import { ISearchForm } from "../../../components/main/search/SearchForm"
import { MAX_SEARCH_RESULTS } from "../../../config"
import { ISearchForBooksResponseData } from "../../../types"
import { setIsFetching } from "../main/mainReducer"
import { setSearchResults, setCurrentSearch, setRelatedResults, setRecentQueries } from "./searchReducer"
import { ActionTypes } from "./types/searchActionTypes"
import { ISearchState } from "./types/searchStateTypes"


type ThunkType = ThunkAction<void, ISearchState, unknown, any>

export const getBooksBySearch = (data: ISearchForm, startIndex: number): ThunkType => async dispatch => {
    dispatch(setIsFetching(true))
    const res = await api.searchForBooks(data, startIndex)

    const resData: ISearchForBooksResponseData = res.data

    if (res.status === 200 && resData.items) {
        dispatch(setSearchResults(resData))
        dispatch(setCurrentSearch({ ...data, startIndex }))
        dispatch(setRecentQueries({ ...data, bookId: resData.items[0].id }))
    }
    if (res.status === 200 && !resData.items) {
        dispatch(getBooksBySearch(data, startIndex - MAX_SEARCH_RESULTS))
    }
    dispatch(setIsFetching(false))
}

export const getRelatedBooksBySearch = (data: ISearchForm, startIndex: number): ThunkType => async dispatch => {
    const res = await api.searchForBooks(data, startIndex)

    const resData: ISearchForBooksResponseData = res.data

    if (res.status === 200) {
        dispatch(setRelatedResults(resData.items))
    }
}