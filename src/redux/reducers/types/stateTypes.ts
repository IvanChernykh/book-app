import { IVolumeInfo } from "../../../types";

export interface IState {
    searchResults: ISearcResults | null
    currentSearch: ICurrentSearch | null
}
export interface ISearcResults {
    totalItems: number
    pagesCount: number
    items: IBookItem[]
}
export interface IBookItem extends IVolumeInfo {
    id: string
}
export interface ICurrentSearch {
    query: string
    sortBy: string
    startIndex: number
}