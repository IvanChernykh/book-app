import { Grid, Typography } from '@mui/material'
import React from 'react'

import BookCard from '../../ui/BookCard'

import { ISearcResults } from '../../../redux/reducers/types/stateTypes'

type Props = {
    searchResults: ISearcResults
}

const styles = {
    title: {
        fontWeight: '700'
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

            <Grid container spacing={2}>
                {Results}
            </Grid>
        </>
    )
}

export default SearchResults