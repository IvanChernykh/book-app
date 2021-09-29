const SEARCH: string = 'SEARCH'

const initialState = {

}

const searchReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SEARCH:
            return { ...state }
        default:
            return state
    }
}
export const search = (quary: any) => ({ action: SEARCH, quary })
export default searchReducer