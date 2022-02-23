export const API_KEY = process.env.REACT_APP_API_KEY

export const MAX_SEARCH_RESULTS = 36

export const routes = {
    home: '/',
    search: '/search',
    favorites: '/favorites',
    book: {
        value: '/book',
        optional: '/book/:id'
    }
}