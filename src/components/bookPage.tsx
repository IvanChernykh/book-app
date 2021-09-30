import React from 'react'

type BookPageProps = {
    book: any
    setIsOpen: (id: number) => void
}
const BookPage: React.FC<BookPageProps> = ({ book, setIsOpen }) => {
    return (
        <div className='book-page row'>
            <div className='col-sm-6 book-page__img-container'>
                <img alt={book.title} src={book.imageUrl} />
            </div>
            <div className='col-sm-6 book-page_right'>
                <div>
                    <span className='category-text d-block'>{book.category?.join(', ')}</span>
                    <h2>{book.title}</h2>
                    <p>{book.authors?.join(', ')}</p>
                    <p>{book.description}</p>
                </div>
                <div>
                    <button onClick={() => setIsOpen(book.id)} className='books-button'>Back</button>
                </div>
            </div>
        </div>
    )
}

export default BookPage
