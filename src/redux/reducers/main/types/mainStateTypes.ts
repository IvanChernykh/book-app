import { IBookItem } from "../../../../types";


export interface IMainState {
    bookPage: IBookPage
    location: ILocation | null
    isFetching: boolean
}

export interface IBookPage {
    isOpen: boolean
    item: IBookItem | null
}
export interface ILocation {
    current: string
    previous: string
}