import { IBookItem } from "../../../../types"
import { actions } from "../mainActions"
import { ILocation } from "./mainStateTypes"

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
export interface ISetLocation {
    type: typeof actions.SET_LOCATION
    payload: ILocation
}
export type ActionTypes = ISetBookPage | IClearBookPage | ISetLocation