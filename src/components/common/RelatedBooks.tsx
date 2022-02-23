import { Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import BookCard from './BookCard'

import { getRelatedBooksBySearch } from '../../redux/reducers/search/searchThunks'
import { TStore } from '../../redux/store'
import { ISearchForm } from '../main/search/SearchForm'
import { IBookItem } from '../../types'


type Props = {
    query: string
    items: IBookItem[] | undefined
    getRelatedBooksBySearch: (data: ISearchForm) => any
}

const styles = {
    grid: {
        height: '350px',
        overflow: 'hidden'
    }
}

const mapBookItems = (items: IBookItem[]) => {
    return items.map((item, i) => {
        if (i >= 6) return
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
                <BookCard item={item} />
            </Grid>
        )
    })
}

const RelatedBooks: React.FC<Props> = ({ query, items, getRelatedBooksBySearch }) => {

    useEffect(() => {
        const data: ISearchForm = { query, sortBy: 'relevance' }
        getRelatedBooksBySearch(data)
    }, [query])

    const Items = items ? mapBookItems(items) : null

    return (
        <>
            <Typography variant="h4" mb={4}>Схоже на автора {query}</Typography>
            <Grid container spacing={2} sx={styles.grid}>
                {Items}
            </Grid>
        </>
    )
}
const mapStateToProps = (state: TStore) => ({
    items: state.search.relatedResults?.items
})

export default connect(mapStateToProps, { getRelatedBooksBySearch })(RelatedBooks)