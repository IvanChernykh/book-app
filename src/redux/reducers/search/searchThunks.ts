import { ThunkAction } from "redux-thunk"

import { api } from "../../../api/api"

import { ISearchForm } from "../../../components/main/search/SearchForm"
import { MAX_SEARCH_RESULTS } from "../../../config"
import { ISearchForBooksResponseData } from "../../../types"
import { setSearchResults, setCurrentSearch } from "./searchReducer"
import { ActionTypes } from "./types/searchActionTypes"
import { IState } from "./types/searchStateTypes"


type ThunkType = ThunkAction<void, IState, unknown, ActionTypes>

export const getBooksBySearch = (data: ISearchForm, startIndex: number): ThunkType => async dispatch => {
    const res = await api.searchForBooks(data, startIndex)

    const resData: ISearchForBooksResponseData = res.data

    if (res.status === 200 && resData.items) {
        dispatch(setSearchResults(resData))
        dispatch(setCurrentSearch({ ...data, startIndex }))
    }
    if (res.status === 200 && !resData.items) {
        dispatch(getBooksBySearch(data, startIndex - MAX_SEARCH_RESULTS))
    }
}

