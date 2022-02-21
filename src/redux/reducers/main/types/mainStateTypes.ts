import { IBookItem } from "../../../../types";


export interface IState {
    bookPage: IBookPage
}

export interface IBookPage {
    isOpen: boolean
    item: IBookItem | null
}