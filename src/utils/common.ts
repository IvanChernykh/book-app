import { IBookItem, ResponseBookItem } from "../types"

export const setBookItem = (item: ResponseBookItem): IBookItem => {
    const publishedDate = item.volumeInfo.publishedDate?.split('-')[0]

    return {
        id: item.id,
        authors: item.volumeInfo.authors,
        categories: item.volumeInfo.categories,
        description: item.volumeInfo.description,
        imageLinks: item.volumeInfo.imageLinks,
        language: item.volumeInfo.language,
        publishedDate,
        subtitle: item.volumeInfo.subtitle,
        title: item.volumeInfo.title,
    }
}