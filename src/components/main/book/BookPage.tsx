import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { connect } from 'react-redux'
import { Location, useLocation } from 'react-router-dom'

import BookImage from '../../ui/BookImage'
import Preloader from '../../ui/Preloader'
import BookDescription from './BookDescription'

import { clearBookPage } from '../../../redux/reducers/main/mainReducer'
import { getSpecificBook } from '../../../redux/reducers/main/mainThunks'

import { IClearBookPage } from '../../../redux/reducers/main/types/mainActionTypes'
import { TStore } from '../../../redux/store'
import { IBookItem } from '../../../types'




type Props = {
    bookItem: IBookItem | null
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

const getBookIdFromUrl = (location: Location) => location.pathname.split('book/')[1]


const BookPage: React.FC<Props> = ({ bookItem, clearBookPage, getSpecificBook }) => {

    const location = useLocation()

    useEffect(() => {
        if (!bookItem) getSpecificBook(getBookIdFromUrl(location))
        return () => {
            clearBookPage()
        }
    }, [])

    return bookItem ? (
        <>
            <Grid container pt={10}>
                <Grid item xs={12} sm={12} md={4} mb={4} sx={styles.left}>
                    <BookImage item={bookItem!} size="large" />
                </Grid>
                <Grid item xs={12} sm={12} md={8} pl={2} pr={2}>
                    <BookDescription bookItem={bookItem} />
                </Grid>
            </Grid>
            {/* <RelatedBooks/> - component with list of related items */}
        </>
    ) : <Preloader />
}
const mapStateToProps = (state: TStore) => ({
    bookItem: state.main.bookPage.item
})

export default connect(mapStateToProps, { clearBookPage, getSpecificBook })(BookPage)