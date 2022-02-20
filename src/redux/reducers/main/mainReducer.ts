import { actions } from "./mainActions"
import { ActionTypes } from "./types/mainActionTypes"
import { IState } from "./types/mainStateTypes"

const initialState: IState = {
    bookPage: {
        isOpen: false,
        item: null
    }
}

const mainReducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        default: {
            return state
        }
    }
}

export default mainReducer