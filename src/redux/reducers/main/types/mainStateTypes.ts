import { IBookItem } from "../../../../types";


export interface IState {
    bookPage: IBookPage
    location: ILocation | null
}

export interface IBookPage {
    isOpen: boolean
    item: IBookItem | null
}
export interface ILocation {
    current: string
    previous: string
}