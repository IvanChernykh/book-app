import axios from "axios"
import { API_KEY } from "../config"

//get books: volumes?q=${query}&maxResults=30&startIndex=${startIndex}&orderBy=${sort}&key=${api.apiKey}

const axiosInstane = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/'
})

export const api = {
    searchForBooks: (data: any) => {
        const url = `volumes?q=${data.query}&&key=${API_KEY}`

        return axiosInstane.get(url)
            .catch(err => err.response)
    }
}