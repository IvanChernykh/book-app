export interface ISearchForBooksResponseData {
    items: ResponseBookItem[]
    kind: string
    totalItems: number
}
export interface ResponseBookItem {
    id: string
    volumeInfo: IVolumeInfo
}
export interface IVolumeInfo {
    authors: string[]
    categories: string[]
    description: string
    imageLinks: {
        smallThumbnail: string,
        thumbnail: string
    }
    language: string
    publishedDate: string
    subtitle: string
    title: string
}