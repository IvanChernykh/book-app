import { ThunkAction } from "redux-thunk"
import api from "../../api/api"

const GET_SEARCH_DATA: string = 'GET_SEARCH_DATA'
const GET_MORE_RESULTS: string = 'GET_MORE_RESULTS'
const SET_CURRENT_SEARCH: string = 'GET_CURRENT_SEARCH'
const SET_IS_OPEN: string = 'SET_ISOPEN'

export interface IBook {
    title: string
    authors: string[]
    id: string
    category: string[]
    description: string
    imageUrl: string
    isOpen: boolean
}
interface IState {
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
type setIsOpenType = {
    type: typeof SET_IS_OPEN,
    id: number
}
type getSearchDataType = {
    type: typeof GET_SEARCH_DATA
    data: any
}
type getMoreResultsType = {
    type: typeof GET_MORE_RESULTS
    data: any
}
type setCurrentSearchType = {
    type: typeof SET_CURRENT_SEARCH
    value: string
    category: string
    sort: string
    data?: any
}
type actionsTypes = getMoreResultsType | setCurrentSearchType | getSearchDataType | setIsOpenType
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

const searchReducer = (state = initialState, action: any): IState => {
    switch (action.type) {
        case SET_IS_OPEN:
            const books = state.bookItems.map(book => {
                if (book.id === action.id) book.isOpen = !book.isOpen
                return book
            })
            return { ...state, bookItems: books }
        case SET_CURRENT_SEARCH:
            const stepAndIndex = (state.currentSearch.value === action.value
                && state.currentSearch.category === action.category
                && state.currentSearch.sort === action.sort
            ) ? {
                startIndex: state.currentSearch.startIndex += 30, // booksToShow = 30
                step: state.currentSearch.step += 1
            }
                : { startIndex: 0, step: 1 }
            return {
                ...state, currentSearch: {
                    value: action.value,
                    category: action.category,
                    sort: action.sort,
                    ...stepAndIndex
                }
            }
        case GET_SEARCH_DATA:
            const bookItems = action.data.items.length ? action.data.items.map((item: any) => {
                return {
                    id: item.id,
                    title: item.volumeInfo.title,
                    authors: item.volumeInfo.authors,
                    category: item.volumeInfo.categories,
                    description: item.description,
                    imageUrl: item.volumeInfo.imageLinks?.thumbnail,
                    isOpen: false
                }
            }) : []
            return { ...state, totalItems: action.data.totalItems, bookItems }
        case GET_MORE_RESULTS:
            const newItems = action.data.items ? action.data.items.map((item: any) => {
                return {
                    id: item.id,
                    title: item.volumeInfo.title,
                    authors: item.volumeInfo.authors,
                    category: item.volumeInfo.categories,
                    description: item.description,
                    imageUrl: item.volumeInfo.imageLinks?.thumbnail,
                    isOpen: false
                }
            }) : []
            return { ...state, bookItems: [...state.bookItems, ...newItems] }
        default:
            return state
    }
}

export const setIsOpen = (id: number): setIsOpenType => ({ type: SET_IS_OPEN, id })
const getSearchData = (data: any): getSearchDataType => ({ type: GET_SEARCH_DATA, data })
const getMoreResults = (data: any): getMoreResultsType => ({ type: GET_MORE_RESULTS, data })
const setCurrentSearch = (value: string, category: string, sort: string): setCurrentSearchType => ({ type: SET_CURRENT_SEARCH, value, category, sort })

export const getSearchDataThunk = (value: string, startIndex: number, sort: string, category: string): ThunkType => async dispatch => {
    dispatch(setCurrentSearch(value, category, sort))
    const response = await api.search(value, startIndex, sort)
    dispatch(getSearchData(response))
}
export const getMoreResultsThunk = (data: any): ThunkType => async dispatch => {
    dispatch(setCurrentSearch(data.currentSearch.value, data.currentSearch.category, data.currentSearch.sort))
    const response = await api.search(data.currentSearch.value, data.currentSearch.startIndex, data.currentSearch.sort)
    dispatch(getMoreResults(response))
}

export default searchReducer