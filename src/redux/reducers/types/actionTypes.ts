import { ISearchForBooksResponseData } from "../../../types"
import { actions } from "../actions"

export interface ISetSearchResults {
    type: typeof actions.SET_SEARCH_RESULTS
    payload: ISearchForBooksResponseData
}
export interface IClearSearchResults {
    type: typeof actions.CLEAR_SEARCH_RESULTS
}

export type ActionTypes = ISetSearchResults | IClearSearchResults