import { ThunkAction } from "redux-thunk"
import api from "../../api/api"

const GET_SEARCH_DATA: string = 'GET_SEARCH_DATA'
const GET_MORE_RESULTS: string = 'GET_MORE_RESULTS'

interface IBook {
    title: string
    authors: string[]
    id: string
    category: string[]
    description: string
    imageUrl: string
}
interface IState {
    bookItems: IBook[],
    totalItems: number
}
type getSearchDataType = {
    type: typeof GET_SEARCH_DATA
    data: any
}
type actionsTypes = getSearchDataType
type ThunkType = ThunkAction<void, IState, unknown, actionsTypes>

const initialState: IState = {
    bookItems: [],
    totalItems: 0
}

const searchReducer = (state = initialState, action: actionsTypes): IState => {
    switch (action.type) {
        case GET_SEARCH_DATA:
            const bookItems = action.data.items.map((item: any) => {
                return {
                    id: item.id,
                    title: item.volumeInfo.title,
                    authors: item.volumeInfo.authors,
                    category: item.volumeInfo.categories,
                    description: item.description,
                    imageUrl: item.volumeInfo.imageLinks.thumbnail
                }
            })
            return { ...state, totalItems: action.data.totalItems, bookItems }
        default:
            return state
    }
}
const getSearchData = (data: any): getSearchDataType => ({ type: GET_SEARCH_DATA, data })

export const getSearchDataThunk = (value: string, startIndex: number, sort: string): ThunkType => async dispatch => {
    const response = await api.search(value, startIndex, sort)
    console.log(response)
    dispatch(getSearchData(response))
}

export default searchReducer