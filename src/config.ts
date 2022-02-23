export const API_KEY = process.env.REACT_APP_API_KEY

export const MAX_SEARCH_RESULTS = 36

export const BASE_URL = '/book-app'

export const routes = {
    home: `${BASE_URL}/`,
    search: `${BASE_URL}/search`,
    favorites: `${BASE_URL}/favorites`,
    book: {
        value: `${BASE_URL}/book`,
        optional: `${BASE_URL}/book/:id`
    }
}