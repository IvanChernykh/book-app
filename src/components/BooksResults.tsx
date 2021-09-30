import React from 'react'
import { connect } from 'react-redux'
import { getMoreResultsThunk, setIsOpen } from '../redux/reducers/searchReducer'
import { IBook, IState } from '../redux/reducers/searchResucerTypes'
import { state } from '../redux/store'
import BookCard from './BookCard'
import BookPage from './BookPage'
import Preloader from './Preloader'

type BooksResultsProps = {
    books: IState
    getMoreResultsThunk: (data: any) => void
    setIsOpen: (id: string) => void
}
const BooksResults: React.FC<BooksResultsProps> = ({ books, getMoreResultsThunk, setIsOpen }) => {
    const isBookOpen: boolean = books.bookItems.some((book: IBook) => book.isOpen === true)
    return isBookOpen
        ? <BookPage book={books.bookItems.filter((book: IBook) => book.isOpen === true)[0]} setIsOpen={setIsOpen} />
        : (
            <div className='container books-results'>
                {(!books.bookItems.length && books.isFetching) && <Preloader />}
                {!!books.bookItems.length &&
                    <>
                        <p className='text-center'>
                            found {books.totalItems} results in all categories, showing results for the category {books.currentSearch.category}
                        </p>
                        <div className='row book-results__items'>
                            {books.bookItems.map((item: IBook, i: number) => <BookCard key={i} book={item} openHandler={setIsOpen} />)}
                        </div>
                        {books.totalItems - books.currentSearch.startIndex <= 30
                            ? null
                            : books.isFetching
                                ? <Preloader />
                                : <button onClick={() => getMoreResultsThunk(books)} className='books-button more-button'> Load more</button>}
                    </>
                }
            </div>
        )
}

const mapStateToProps = (state: state) => ({ books: state.searchData })

export default connect(mapStateToProps, { getMoreResultsThunk, setIsOpen })(BooksResults)
