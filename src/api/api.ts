import axios from "axios"

import { ISearchForm } from "../components/search/SearchForm"
import { API_KEY } from "../config"

//get books:
//volumes?q=${query}&maxResults=30&startIndex=${startIndex}&orderBy=${sort}&key=${api.apiKey}

//get specific volume:
//https://www.googleapis.com/books/v1/volumes/volumeId
//https://www.googleapis.com/books/v1/volumes/zyTCAlFPjgYC?key=yourAPIKey

const axiosInstane = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/'
})

export const api = {
    searchForBooks: (data: ISearchForm) => {
        const url = `volumes?q=${data.query}&&key=${API_KEY}`

        return axiosInstane.get(url)
            .catch(err => err.response)
    }
}