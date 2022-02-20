import { IBookItem } from "../../../../types";

export interface IState {
    searchResults: ISearcResults | null
    currentSearch: ICurrentSearch | null
}
export interface ISearcResults {
    totalItems: number
    pagesCount: number
    items: IBookItem[]
}

export interface ICurrentSearch {
    query: string
    sortBy: string
    startIndex: number
}