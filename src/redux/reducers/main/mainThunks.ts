import { ThunkAction } from "redux-thunk"

import { api } from "../../../api/api"

import { setBookItem } from "../../../utils/searchReducer"
import { setBookPage } from "./mainReducer"
import { ActionTypes } from "./types/mainActionTypes"
import { ResponseBookItem } from "../../../types"
import { IMainState } from "./types/mainStateTypes"



type ThunkType = ThunkAction<void, IMainState, unknown, ActionTypes>

export const getSpecificBook = (id: string): ThunkType => async dispatch => {
    const res = await api.getSpecificBook(id)

    const resData: ResponseBookItem = res.data
    if (res.status === 200) {
        const item = setBookItem(resData)
        dispatch(setBookPage(item))
    }
}

