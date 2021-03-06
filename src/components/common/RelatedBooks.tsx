import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { connect } from 'react-redux'

import BookCard from './BookCard'
import Button from '../ui/Button'

import { getRelatedBooksBySearch } from '../../redux/reducers/search/searchThunks'
import { TStore } from '../../redux/store'
import { ISearchForm } from '../main/search/SearchForm'
import { IBookItem } from '../../types'



type ComponentType = 'author' | 'title'
type Props = {
    type: ComponentType
    query: string
    items: IBookItem[] | undefined
    getRelatedBooksBySearch: (data: ISearchForm, startIndex: number) => any
}

const styles = {
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}

const RESULTS_TO_SHOW = 6

const mapBookItems = (items: IBookItem[]) => {
    return items.map((item, i) => {
        if (i >= RESULTS_TO_SHOW) return
        return (
            <BookCard item={item} key={item.id} />
        )
    })
}

const RelatedBooks: React.FC<Props> = ({ type, query, items, getRelatedBooksBySearch }) => {

    const [init, setInit] = useState(false)
    const [startIndex, setStartIndex] = useState(0)

    const data: ISearchForm = { query, sortBy: 'relevance' }

    useEffect(() => {
        setInit(true)
    }, [items])

    useEffect(() => {
        setInit(false)
        setStartIndex(0)
        getRelatedBooksBySearch(data, 0)
    }, [query])

    const updateResults = () => {
        getRelatedBooksBySearch(data, startIndex + RESULTS_TO_SHOW)
        setStartIndex((prev) => prev + RESULTS_TO_SHOW)
    }

    const Items = items ? mapBookItems(items) : null

    return init ? (
        <>
            <Box sx={styles.box} mb={4}>
                <Typography variant="h4">
                    {type === 'author' && `Схоже на автора ${query}`}
                    {type === 'title' && `Схоже на ${query}`}
                </Typography>
                <Button onClick={updateResults}>
                    Оновити
                </Button>
            </Box>
            <Grid container spacing={2}>
                {Items}
            </Grid>
        </>
    ) : null
}
const mapStateToProps = (state: TStore) => ({
    items: state.search.relatedResults?.items
})

export default connect(mapStateToProps, { getRelatedBooksBySearch })(RelatedBooks)