import axios from "axios"

import { ISearchForm } from "../components/main/search/SearchForm"
import { API_KEY, MAX_SEARCH_RESULTS } from "../config"

//get books:
//volumes?q=${query}&maxResults=30&startIndex=${startIndex}&orderBy=${sort}&key=${api.apiKey}

//get specific volume:
//https://www.googleapis.com/books/v1/volumes/bookId?key=yourAPIKey

const axiosInstane = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/'
})

export const api = {
    searchForBooks: (data: ISearchForm, startIndex: number) => {
        const url = `volumes?q=${data.query}&maxResults=${MAX_SEARCH_RESULTS}&startIndex=${startIndex}&orderBy=${data.sortBy}&key=${API_KEY}`

        return axiosInstane.get(url)
            .catch(err => err.response)
    },
    getSpecificBook: (bookId: string) => {
        const url = `volumes/${bookId}?key=${API_KEY}`

        return axiosInstane.get(url)
            .catch(err => err.response)
    }
}