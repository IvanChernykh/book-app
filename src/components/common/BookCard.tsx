import React from 'react'
import { Grid, Typography } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

import BookImage from '../ui/BookImage'

import { IBookItem } from '../../types'
import { setBookPage } from '../../redux/reducers/main/mainReducer'
import { ISetBookPage } from '../../redux/reducers/main/types/mainActionTypes'
import { routes } from '../../config'
import styles from './_BookCard.module.scss'


type Props = {
    item: IBookItem
    setBookPage: (book: IBookItem, pathname: string) => ISetBookPage
}

const BookCard: React.FC<Props> = ({ item, setBookPage }) => {

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const authors = item.authors?.length > 1 ? item.authors.join(', ') : item.authors

    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setBookPage(item, pathname)
        navigate(`${routes.book.value}/${item.id}`)
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <div className={styles.container} onClick={clickHandler}>
                <BookImage item={item} size="small" />
                <Typography className={styles.title} mb={1}>
                    {item.title}
                </Typography>
                <Typography className={styles.authors}>
                    {authors}
                </Typography>
            </div>
        </Grid >
    )
}

export default connect(null, { setBookPage })(BookCard)