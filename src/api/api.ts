import axios from "axios"

interface IApi {
    apiKey: string
    search: (query: string, startIndex: number, sort: string) => void
}

const api: IApi = {
    apiKey: process.env.REACT_APP_API_KEY as string,
    search: (query, startIndex, sort) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=30&startIndex=${startIndex}&orderBy=${sort}&key=${api.apiKey}`)
            .then(res => res.data)
    },
}
export default api