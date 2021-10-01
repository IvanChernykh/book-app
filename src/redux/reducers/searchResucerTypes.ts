import { ThunkAction } from "redux-thunk"

export const GET_SEARCH_DATA: string = 'GET_SEARCH_DATA'
export const GET_MORE_RESULTS: string = 'GET_MORE_RESULTS'
export const SET_CURRENT_SEARCH: string = 'GET_CURRENT_SEARCH'
export const SET_IS_OPEN: string = 'SET_ISOPEN'
export const FILTER_BY_CATEGORY: string = 'GET_CATEGORY'
export const TOGGLE_IS_FETCHING: string = 'TOGGLE_IS_FETCHING'

export interface IBook {
    title: string
    authors: string[]
    id: string
    category: string[]
    description: string
    imageUrl: string
    isOpen: boolean
}
export interface IState {
    totalItems: number
    bookItems: IBook[]
    isFetching: {
        search: boolean
        loadMore: boolean
    }
    currentSearch: {
        value: string
        category: string
        sort: string
        step: number
        startIndex: number
    }
}
export type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    payload: {
        search: boolean
        loadMore: boolean
    }
}
export type getCategoryType = {
    type: typeof FILTER_BY_CATEGORY
    payload: { category: string }
}
export type setIsOpenType = {
    type: typeof SET_IS_OPEN,
    payload: { id: string }
}
export type getSearchDataType = {
    type: typeof GET_SEARCH_DATA
    payload: any
}
export type getMoreResultsType = {
    type: typeof GET_MORE_RESULTS
    payload: any
}
export type setCurrentSearchType = {
    type: typeof SET_CURRENT_SEARCH
    payload: {
        value: string
        category: string
        sort: string
    }
}
export type actionsTypes = getMoreResultsType | setCurrentSearchType | getSearchDataType | setIsOpenType | getCategoryType | toggleIsFetchingType
export type ThunkType = ThunkAction<void, IState, unknown, actionsTypes>