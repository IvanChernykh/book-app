import axios from "axios"

interface IApi {
    apiKey: string
    search: (query: string, startIndex: number, sort: string) => void
}

const api: IApi = {
    apiKey: 'AIzaSyC6jeisnRdSmhK6q3VAMGtuDmf3Kaogv-M',
    search: (query, startIndex = 0, sort) => {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${api.apiKey}&maxResults=30&start-index=${startIndex}&orderBy${sort}`)
            .then(res => res.data)
    },
}
export default api