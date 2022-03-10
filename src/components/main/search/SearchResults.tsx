import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import { connect } from 'react-redux'

import BookCard from '../../common/BookCard'
import PaginationControl from '../../ui/Pagination'

import { ICurrentSearch, ISearcResults } from '../../../redux/reducers/search/types/searchStateTypes'
import { TStore } from '../../../redux/store'
import { ISearchForm } from './SearchForm'
import { MAX_SEARCH_RESULTS } from '../../../config'
import { getBooksBySearch } from '../../../redux/reducers/search/searchThunks'




type Props = {
    isFetching: boolean
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
    },
    hide: {
        opacity: 0,
        pointerEvents: 'none'
    }
}

const SearchResults: React.FC<Props> = ({ searchResults, currentSearch, isFetching, getBooksBySearch }) => {

    const changeResultPage = (currentPage: number) => {
        const startIndex = (currentPage - 1) * MAX_SEARCH_RESULTS
        getBooksBySearch(currentSearch!, startIndex)
    }

    const Results = searchResults?.items.map(item => {
        return (
            <BookCard item={item} key={item.id} />
        )
    })

    return (
        <>
            {!isFetching && (
                <>
                    <Typography variant="h4" sx={styles.title} mb={4}>Результати</Typography>

                    <Grid container spacing={2} mb={4}>
                        {Results}
                    </Grid>
                </>
            )}
            <Box sx={isFetching ? { ...styles.pagination, ...styles.hide } : styles.pagination}>
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
    currentSearch: state.search.currentSearch,
    isFetching: state.main.isFetching
})
export default connect(mapStateToProps, { getBooksBySearch })(SearchResults)