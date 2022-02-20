import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { connect } from 'react-redux'

import BookCard from '../../ui/BookCard'
import PaginationControl from '../../ui/Pagination'

import { ICurrentSearch, ISearcResults } from '../../../redux/reducers/search/types/searchStateTypes'
import { TStore } from '../../../redux/store'
import { ISearchForm } from './SearchForm'
import { MAX_SEARCH_RESULTS } from '../../../config'
import { getBooksBySearch } from '../../../redux/reducers/search/searchThunks'


type Props = {
    searchResults: ISearcResults
    currentSearch: ICurrentSearch | null
    getBooksBySearch: (data: ISearchForm, startIndex: number) => void
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

const SearchResults: React.FC<Props> = ({ searchResults, currentSearch, getBooksBySearch }) => {

    const changeResultPage = (currentPage: number) => {
        const startIndex = (currentPage - 1) * MAX_SEARCH_RESULTS
        getBooksBySearch(currentSearch!, startIndex)
    }

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
                {searchResults.totalItems > MAX_SEARCH_RESULTS
                    &&
                    (<PaginationControl
                        setCurrentPage={changeResultPage}
                        pagesCount={searchResults.pagesCount}
                    />
                    )}
            </Box>
        </>
    )
}
const mapStateToProps = (state: TStore) => ({
    currentSearch: state.search.currentSearch
})
export default connect(mapStateToProps, { getBooksBySearch })(SearchResults)