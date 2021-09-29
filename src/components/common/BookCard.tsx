import React from 'react'

const BookCard: React.FC = () => {
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 book-card'>
            <div className='book-card__inner'>
                <div className='book-card__img'>
                    <img alt='book' src='https://images-na.ssl-images-amazon.com/images/I/51DtMBkJTRL._SX327_BO1,204,203,200_.jpg' />
                </div>
                <div>
                    <p className='book-card_category'>Category name</p>
                    <h2>Book name</h2>
                    <p>Author name</p>
                </div>
            </div>
        </div>
    )
}

export default BookCard
