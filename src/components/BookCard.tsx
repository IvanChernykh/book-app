import React from 'react'

type BookCardProps = {
    book: any
    openHandler: (id: number) => void
}
const BookCard: React.FC<BookCardProps> = ({ book, openHandler }) => {
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 book-card'>
            <div onClick={() => openHandler(book.id)} className='book-card__inner'>
                <div className='book-card__img'>
                    <img alt={book.title} src={book.imageUrl} />
                </div>
                <div className='book-card__text'>
                    <p className='category-text'>{book.category?.[0] || 'All'}</p>
                    <h4>{book.title}</h4>
                    <p className='authors'>{book.authors?.join(', ') || ''}</p>
                </div>
            </div>
        </div>
    )
}

export default BookCard
