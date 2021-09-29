import React from 'react'
import BookCard from './common/BookCard'

const BooksResults: React.FC = () => {
    return (
        <div className='container books-results'>
            <p className='text-center'>Found 460 results</p>
            <div className='row'>
                <BookCard />
            </div>
        </div>
    )
}

export default BooksResults
