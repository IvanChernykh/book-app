import { IBookItem } from "../../../../types";


export interface IState {
    bookPage: {
        isOpen: boolean
        item: IBookItem | null
    }
}
