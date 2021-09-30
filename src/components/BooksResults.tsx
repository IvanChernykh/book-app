import React from 'react'
import { connect } from 'react-redux'
import { getMoreResultsThunk } from '../redux/reducers/searchReducer'
import BookCard from './BookCard'
type BooksResultsProps = {
    books: any
    getMoreResultsThunk: (data: any) => void
}
const BooksResults: React.FC<BooksResultsProps> = ({ books, getMoreResultsThunk }) => {
    return (
        <div className='container books-results'>
            {!!books.bookItems.length
                && <>
                    <p className='text-center'>Found {books.totalItems} results</p>
                    <div className='row book-results__items'>
                        {books.bookItems.map((item: any, i: number) => <BookCard key={i} book={item} />)}
                    </div>
                    {books.totalItems - books.currentSearch.startIndex <= 30 ? null
                        : <button onClick={() => getMoreResultsThunk(books)} className='books-results__button'> Load more</button>}
                </>
            }
        </div>
    )
}
const mapStateToProps = (state: any) => ({ books: state.searchData })

export default connect(mapStateToProps, { getMoreResultsThunk })(BooksResults)
