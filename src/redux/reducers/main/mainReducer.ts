import { IBookItem } from "../../../types"
import { actions } from "./mainActions"
import { ActionTypes, IClearBookPage, ISetBookPage, ISetIsFetching, ISetLocation } from "./types/mainActionTypes"
import { IMainState } from "./types/mainStateTypes"

const initialState: IMainState = {
    isFetching: false,
    location: null,
    bookPage: {
        isOpen: false,
        item: null
    }
}

const mainReducer = (state = initialState, action: ActionTypes): IMainState => {
    switch (action.type) {
        case actions.SET_LOCATION: {
            return { ...state, location: action.payload }
        }
        case actions.SET_IS_FETCHING: {
            return {
                ...state, isFetching: action.payload
            }
        }
        case actions.SET_BOOK_PAGE: {
            return {
                ...state, bookPage: action.payload
            }
        }
        case actions.CLEAR_BOOK_PAGE: {
            return {
                ...state, bookPage: { isOpen: false, item: null }
            }
        }
        default: {
            return state
        }
    }
}

export const setLocation = (previous: string, current: string): ISetLocation => ({
    type: actions.SET_LOCATION,
    payload: {
        current,
        previous
    }
})
export const setIsFetching = (isFetching: boolean): ISetIsFetching => ({
    type: actions.SET_IS_FETCHING,
    payload: isFetching
})
export const setBookPage = (book: IBookItem): ISetBookPage => ({
    type: actions.SET_BOOK_PAGE,
    payload: {
        isOpen: true,
        item: book
    }
})
export const clearBookPage = (): IClearBookPage => ({ type: actions.CLEAR_BOOK_PAGE })

export default mainReducer