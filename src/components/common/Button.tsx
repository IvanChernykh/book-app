import React from 'react'
import { IState } from '../../redux/reducers/searchResucerTypes'
import Preloader from '../Preloader'

type ButtonProps = {
    isFetching: boolean,
    onClickHandler: (books: IState) => void
    books: IState
}
const Button: React.FC<ButtonProps> = ({ isFetching, books, onClickHandler }) => {
    return isFetching
        ? <Preloader />
        : <button onClick={() => onClickHandler(books)} className='books-button more-button'> Load more</button>
}

export default Button
