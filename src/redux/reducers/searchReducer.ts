import api from "../../api/api"
import { ThunkAction } from "redux-thunk"

const GET_SEARCH_DATA: string = 'GET_SEARCH_DATA'
const GET_MORE_RESULTS: string = 'GET_MORE_RESULTS'
const SET_CURRENT_SEARCH: string = 'GET_CURRENT_SEARCH'
const SET_IS_OPEN: string = 'SET_ISOPEN'
const FILTER_BY_CATEGORY: string = 'GET_CATEGORY'

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
    currentSearch: {
        value: string
        category: string
        sort: string
        step: number
        startIndex: number
    }
}
type getCategoryType = {
    type: typeof FILTER_BY_CATEGORY
    payload: { category: string }
}
type setIsOpenType = {
    type: typeof SET_IS_OPEN,
    payload: { id: number }
}
type getSearchDataType = {
    type: typeof GET_SEARCH_DATA
    payload: any
}
type getMoreResultsType = {
    type: typeof GET_MORE_RESULTS
    payload: any
}
type setCurrentSearchType = {
    type: typeof SET_CURRENT_SEARCH
    payload: {
        value: string
        category: string
        sort: string
    }
}
type actionsTypes = getMoreResultsType | setCurrentSearchType | getSearchDataType | setIsOpenType | getCategoryType
type ThunkType = ThunkAction<void, IState, unknown, actionsTypes>
const initialState: IState = {
    totalItems: 0,
    bookItems: [],
    currentSearch: {
        value: '',
        category: '',
        sort: '',
        step: 1,
        startIndex: 0,
    }
}
const searchReducer = (state = initialState, action: actionsTypes): IState => {
    switch (action.type) {
        case SET_IS_OPEN:
            const books = state.bookItems.map(book => {
                if (book.id === action.payload.id) book.isOpen = !book.isOpen
                return book
            })
            return { ...state, bookItems: books }
        case SET_CURRENT_SEARCH:
            const stepAndIndex = (state.currentSearch.value === action.payload.value
                && state.currentSearch.category === action.payload.category
                && state.currentSearch.sort === action.payload.sort
            ) ? {
                startIndex: state.currentSearch.startIndex += 30, // booksToShow = 30
                step: state.currentSearch.step += 1
            }
                : { startIndex: 0, step: 1 }
            return {
                ...state, currentSearch: {
                    value: action.payload.value,
                    category: action.payload.category,
                    sort: action.payload.sort,
                    ...stepAndIndex
                }
            }
        case GET_SEARCH_DATA:
            const bookItems = action.payload.items?.length ? action.payload.items.map((item: any) => {
                return {
                    id: item.id,
                    title: item.volumeInfo.title,
                    authors: item.volumeInfo.authors,
                    category: item.volumeInfo.categories,
                    description: item.volumeInfo.description,
                    imageUrl: item.volumeInfo.imageLinks?.thumbnail,
                    isOpen: false
                }
            }) : []
            return { ...state, totalItems: action.payload.totalItems, bookItems }
        case GET_MORE_RESULTS:
            const newItems = action.payload.items ? action.payload.items.map((item: any) => {
                return {
                    id: item.id,
                    title: item.volumeInfo.title,
                    authors: item.volumeInfo.authors,
                    category: item.volumeInfo.categories || 'all',
                    description: item.description,
                    imageUrl: item.volumeInfo.imageLinks?.thumbnail,
                    isOpen: false
                }
            }) : []
            return { ...state, bookItems: [...state.bookItems, ...newItems] }
        case FILTER_BY_CATEGORY:

            const filteredItems = state.bookItems.filter((book: IBook) => {
                if (action.payload.category === 'all') return book
                if (book.category?.[0].toLowerCase() === action.payload.category) return book
                return null
            })
            return { ...state, bookItems: filteredItems }
        default:
            return state
    }
}

export const setIsOpen = (id: number): setIsOpenType => ({ type: SET_IS_OPEN, payload: { id } })

const filterByCategory = (category: string): getCategoryType => ({ type: FILTER_BY_CATEGORY, payload: { category } })
const getSearchData = (payload: any): getSearchDataType => ({ type: GET_SEARCH_DATA, payload })
const getMoreResults = (payload: any): getMoreResultsType => ({ type: GET_MORE_RESULTS, payload })
const setCurrentSearch = (value: string, category: string, sort: string): setCurrentSearchType => (
    { type: SET_CURRENT_SEARCH, payload: { value, category, sort } })

export const getSearchDataThunk = (value: string, startIndex: number, sort: string, category: string): ThunkType => async dispatch => {
    dispatch(setCurrentSearch(value, category, sort))
    const response = await api.search(value, startIndex, sort)
    dispatch(getSearchData(response))
    dispatch(filterByCategory(category))
}
export const getMoreResultsThunk = (data: IState): ThunkType => async dispatch => {
    dispatch(setCurrentSearch(data.currentSearch.value, data.currentSearch.category, data.currentSearch.sort))
    const response = await api.search(data.currentSearch.value, data.currentSearch.startIndex, data.currentSearch.sort)
    dispatch(getMoreResults(response))
    dispatch(filterByCategory(data.currentSearch.category))
}
export default searchReducer