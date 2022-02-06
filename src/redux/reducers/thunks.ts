import { ThunkAction } from "redux-thunk";
import { api } from "../../api/api";
import { ActionTypes } from "./types/actionTypes";
import { IState } from "./types/stateTypes";

type ThunkType = ThunkAction<void, IState, unknown, ActionTypes>

export const getBooksBySearch = (data: any): ThunkType => async dispatch => {
    const res = await api.searchForBooks(data)
    console.log(res)
}