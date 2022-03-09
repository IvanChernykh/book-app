import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { connect } from 'react-redux'

import { api } from '../../api/api'
import { IRecentQuery } from '../../redux/reducers/search/types/searchStateTypes'
import { ISearchForm } from '../main/search/SearchForm'
import { getBooksBySearch } from '../../redux/reducers/search/searchThunks'
import styles from './_SearchCard.module.scss'


type Props = {
    queryItem: IRecentQuery

    getBooksBySearch: (data: ISearchForm, startIndex: number) => any
}

const SearchCard: React.FC<Props> = ({ queryItem, getBooksBySearch }) => {
    const [imageLinks, setImageLinks] = useState<any>(null)
    useEffect(() => {
        const getBookItem = async () => {
            const res = await api.getSpecificBook(queryItem.bookId)
            setImageLinks(res.data.volumeInfo.imageLinks)
        }
        getBookItem()
    }, [])

    const clickHandler = () => {
        getBooksBySearch({ query: queryItem.query, sortBy: queryItem.sortBy }, 0)
    }

    return (
        <Grid item xs={12} sm={6} lg={4}>
            <div className={styles.container} onClick={clickHandler}>
                <div className={styles.img_container}>
                    {imageLinks && (
                        <img
                            src={imageLinks.smallThumbnail ? imageLinks.smallThumbnail : imageLinks.thumbnail}
                            alt={queryItem.query}
                            className={styles.img}
                        />
                    )}
                </div>
                <Typography pl={2} className={styles.text}>{queryItem.query}</Typography>
            </div>
        </Grid>
    )
}
export default connect(null, { getBooksBySearch })(SearchCard)