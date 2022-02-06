import { ActionTypes } from "./types/actionTypes"
import { IState } from "./types/stateTypes"

const initialState: IState = {}

const reducer = (state = initialState, action: ActionTypes) => {
    switch (action.type) {
        default: {
            return state
        }
    }
}

export default reducer