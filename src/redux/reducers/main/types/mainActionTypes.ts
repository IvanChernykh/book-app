import { IBookItem } from "../../../../types"
import { actions } from "../mainActions"

export interface ISetBookPage {
    type: typeof actions.SET_BOOK_PAGE
    payload: {
        isOpen: boolean
        item: IBookItem
    }
}
export interface IClearBookPage {
    type: typeof actions.CLEAR_BOOK_PAGE
}
export type ActionTypes = ISetBookPage | IClearBookPage