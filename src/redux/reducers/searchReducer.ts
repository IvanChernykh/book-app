const GET_SEARCH_DATA: string = 'GET_SEARCH_DATA'

interface IBook {
    title: string
    author: string[]
    id: string
    category: string[]
    description: string
    imageUrl: string
}
interface IState {
    bookItems: IBook[],
    totalItems: number
}
const initialState: IState = {
    bookItems: [],
    totalItems: 0
}

const searchReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_SEARCH_DATA:
            return { ...state }
        default:
            return state
    }
}
export const getSearchData = (data: any) => ({ action: GET_SEARCH_DATA, data })
export default searchReducer