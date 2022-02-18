import { IVolumeInfo } from "../../../types";

export interface IState {
    searchResults: ISearcResults | null
}
export interface ISearcResults {
    totalItems: number
    items: IBookItem[]
}
export interface IBookItem extends IVolumeInfo {
    id: string
}