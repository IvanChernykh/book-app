import { ISearchForBooksResponseData } from "../../../types"
import { actions } from "../actions"
import { ICurrentSearch } from "./stateTypes"

export interface ISetSearchResults {
    type: typeof actions.SET_SEARCH_RESULTS
    payload: ISearchForBooksResponseData
}
export interface ISetCurrentSearch {
    type: typeof actions.SET_CURRENT_SEARCH
    payload: ICurrentSearch
}
export interface IClearSearchResults {
    type: typeof actions.CLEAR_SEARCH_RESULTS
}


export type ActionTypes = ISetSearchResults | IClearSearchResults | ISetCurrentSearch