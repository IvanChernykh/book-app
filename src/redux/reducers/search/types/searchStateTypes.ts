import { SortBy } from "../../../../components/main/search/SearchForm";
import { IBookItem } from "../../../../types";

export interface IState {
    searchResults: ISearcResults | null
    currentSearch: ICurrentSearch | null
    relatedResults: IRelatedResults | null
}
export interface ISearcResults {
    totalItems: number
    pagesCount: number
    items: IBookItem[]
}

export interface ICurrentSearch {
    query: string
    sortBy: SortBy
    startIndex: number
}
export interface IRelatedResults {
    items: IBookItem[]
}