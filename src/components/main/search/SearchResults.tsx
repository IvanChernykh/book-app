import React from 'react'
import { Grid, Typography, Box } from '@mui/material'

import BookCard from '../../ui/BookCard'

import { ISearcResults } from '../../../redux/reducers/types/stateTypes'
import PaginationControl from '../../ui/Pagination'

type Props = {
    searchResults: ISearcResults
}

const styles = {
    title: {
        fontWeight: '700'
    },
    pagination: {
        display: 'flex',
        justifyContent: 'center'
    }
}

const SearchResults: React.FC<Props> = ({ searchResults }) => {

    const Results = searchResults?.items.map(item => {
        return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={item.id}>
                <BookCard key={item.id} item={item} />
            </Grid>
        )
    })

    return (
        <>
            <Typography variant="h4" sx={styles.title} mb={4}>Результати</Typography>

            <Grid container spacing={2} mb={4}>
                {Results}
            </Grid>
            <Box sx={styles.pagination}>
                <PaginationControl />
            </Box>
        </>
    )
}

export default SearchResults