import React from 'react'
import { connect } from 'react-redux'
import BookCard from './common/BookCard'
type BooksResultsProps = {
    booksData: any
}
const BooksResults: React.FC<BooksResultsProps> = ({ booksData }) => {
    return (
        <div className='container books-results'>
            {!!booksData.bookItems.length
                && <>
                    <p className='text-center'>Found {booksData.totalItems} results</p>
                    <div className='row book-results__items'>
                        {booksData.bookItems.map((item: any) => {
                            return <BookCard key={item.id} book={item} />
                        })}
                    </div>
                    <button className='books-results__button'>Load more</button>
                </>
            }
        </div>
    )
}
const mapStateToProps = (state: any) => ({ booksData: state.searchData })

export default connect(mapStateToProps, {})(BooksResults)
