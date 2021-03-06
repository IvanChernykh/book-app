import { ISearchForBooksResponseData, ResponseBookItem } from "../../../../types"
import { actions } from "../searchActions"
import { ICurrentSearch, IRecentQuery } from "./searchStateTypes"


export interface ISetSearchResults {
    type: typeof actions.SET_SEARCH_RESULTS
    payload: ISearchForBooksResponseData
}
export interface ISetCurrentSearch {
    type: typeof actions.SET_CURRENT_SEARCH
    payload: ICurrentSearch
}
export interface ISetRelatedResults {
    type: typeof actions.SET_RELATED_RESULTS
    payload: ResponseBookItem[]
}
export interface ISetRecentQueries {
    type: typeof actions.SET_RECENT_QUERIES
    payload: IRecentQuery
}
export interface IClearSearchResults {
    type: typeof actions.CLEAR_SEARCH_RESULTS
}

export type ActionTypes = ISetSearchResults | IClearSearchResults | ISetCurrentSearch | ISetRelatedResults | ISetRecentQueries