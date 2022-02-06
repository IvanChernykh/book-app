import axios from "axios"

//get books: volumes?q=${query}&maxResults=30&startIndex=${startIndex}&orderBy=${sort}&key=${api.apiKey}

const axiosInstane = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/'
})

export const api = {
    searchForBooks: () => {
        const url = ``
        return axiosInstane.get(url)
            .catch(err => err.response)
    }
}