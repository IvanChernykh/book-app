import React from 'react'
type BookCardProps = {
    book: any
}
const BookCard: React.FC<BookCardProps> = ({ book }) => {
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 book-card'>
            <div className='book-card__inner'>
                <div className='book-card__img'>
                    <img alt={book.title} src={book.imageUrl} />
                </div>
                <div className='book-card__text'>
                    <p className='book-card_category'>{book.category?.join(', ') || 'All'}</p>
                    <h4>{book.title}</h4>
                    <p>{book.authors?.join(', ') || 'No author'}</p>
                </div>
            </div>
        </div>
    )
}

export default BookCard
