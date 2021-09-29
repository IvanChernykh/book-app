import axios from "axios"

interface IApi {
    apiKey: string
    search: (query: string) => void
}

const api: IApi = {
    apiKey: 'AIzaSyC6jeisnRdSmhK6q3VAMGtuDmf3Kaogv-M',
    search: (query) => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query.trim()}&key=${api.apiKey}&maxResults=30`)
    },
}
export default api