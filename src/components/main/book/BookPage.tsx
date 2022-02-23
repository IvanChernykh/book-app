import React, { useEffect } from 'react'
import { Box, Grid } from '@mui/material'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom'

import BookImage from '../../ui/BookImage'
import Preloader from '../../ui/Preloader'
import BookDescription from './BookDescription'

import { clearBookPage } from '../../../redux/reducers/main/mainReducer'
import { getSpecificBook } from '../../../redux/reducers/main/mainThunks'

import { IClearBookPage } from '../../../redux/reducers/main/types/mainActionTypes'
import { TStore } from '../../../redux/store'
import { IBookItem } from '../../../types'
import RelatedBooks from '../../common/RelatedBooks'




type Props = {
    book: IBookItem | null
    clearBookPage: () => IClearBookPage
    getSpecificBook: (id: string) => any
}

const styles = {
    left: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const getBookIdFromUrl = (pathname: string) => pathname.split('book/')[1]


const BookPage: React.FC<Props> = ({ book, clearBookPage, getSpecificBook }) => {

    const { pathname } = useLocation()
    const bookId = getBookIdFromUrl(pathname)

    useEffect(() => {
        if (!book) getSpecificBook(bookId)
        return () => {
            clearBookPage()
        }
    }, [])
    useEffect(() => {
        if (!book || bookId !== book.id) getSpecificBook(bookId)
    }, [pathname])

    return book ? (
        <Box pl={2} pr={2}>
            <Grid container pt={10} mb={12}>
                <Grid item xs={12} sm={12} md={4} mb={4} sx={styles.left}>
                    <BookImage item={book!} size="large" />
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <BookDescription bookItem={book} />
                </Grid>
            </Grid>
            {book.authors && <RelatedBooks query={book.authors[0]} />}
        </Box>
    ) : <Preloader />
}
const mapStateToProps = (state: TStore) => ({
    book: state.main.bookPage.item
})

export default connect(mapStateToProps, { clearBookPage, getSpecificBook })(BookPage)