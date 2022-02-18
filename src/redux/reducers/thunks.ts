import { ThunkAction } from "redux-thunk"

import { api } from "../../api/api"

import { ISearchForm } from "../../components/main/search/SearchForm"
import { setSearchResults } from "./reducer"
import { ActionTypes } from "./types/actionTypes"
import { IState } from "./types/stateTypes"


type ThunkType = ThunkAction<void, IState, unknown, ActionTypes>

export const getBooksBySearch = (data: ISearchForm): ThunkType => async dispatch => {
    const res = await api.searchForBooks(data)
    if (res.status === 200) {
        dispatch(setSearchResults(res.data))
    }
}

