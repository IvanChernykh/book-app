import { SortBy } from "../../../../components/main/search/SearchForm";
import { IBookItem } from "../../../../types";

export interface ISearchState {
    searchResults: ISearcResults | null
    currentSearch: ICurrentSearch | null
    relatedResults: IRelatedResults | null
    recentQueries: IRecentQuery[] | []
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
export interface IRecentQuery {
    query: string
    sortBy: SortBy
    bookId: string
}