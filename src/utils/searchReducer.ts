import { IBookItem, ResponseBookItem } from "../types"
import { ISetRecentQueries } from "../redux/reducers/search/types/searchActionTypes"
import { IRecentQuery, ISearchState } from "../redux/reducers/search/types/searchStateTypes"

//bookItem
export const setBookItem = (item: ResponseBookItem): IBookItem => {
    const publishedDate = item.volumeInfo.publishedDate?.split('-')[0]

    return {
        id: item.id,
        authors: item.volumeInfo.authors,
        categories: item.volumeInfo.categories,
        description: item.volumeInfo.description,
        imageLinks: item.volumeInfo.imageLinks,
        language: item.volumeInfo.language,
        publishedDate,
        subtitle: item.volumeInfo.subtitle,
        title: item.volumeInfo.title,
    }
}

//searchQueries
const filterQueries = (queriesArr: IRecentQuery[], item: IRecentQuery) => {
    return queriesArr.filter(el => item.query !== el.query)
}
const wordsCount = (str: string) => str.split(' ').length


export const filterSearchQueries = (state: ISearchState, action: ISetRecentQueries) => {
    const MAX_QUERIES = 6
    const query = action.payload.query
    let recentQueries = [...state.recentQueries]

    state.recentQueries.forEach(item => {
        if (query.startsWith(item.query) && wordsCount(query) > 1) {
            recentQueries = filterQueries(recentQueries, item)
        }
        if (query.startsWith(item.query) && (wordsCount(query) === 1 && wordsCount(item.query) === 1)) {
            recentQueries = filterQueries(recentQueries, item)
        }
        if (item.query === query) {
            recentQueries = filterQueries(recentQueries, item)
        }
    })

    if (query.length >= 3) recentQueries.push(action.payload)

    if (recentQueries.length > MAX_QUERIES) recentQueries = recentQueries.slice(-MAX_QUERIES)

    return recentQueries
}