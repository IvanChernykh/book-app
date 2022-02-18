import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

import { clearSearchResults } from '../../../redux/reducers/reducer'
import { ISearcResults } from '../../../redux/reducers/types/stateTypes'
import { TStore } from '../../../redux/store'


type Props = {
    searchResults: ISearcResults | null
    clearSearchResults: () => any
}
const SearchPage: React.FC<Props> = ({ searchResults, clearSearchResults }) => {
    useEffect(() => {
        return () => {
            clearSearchResults()
        }
    }, [])

    return (
        <Box >
            <Box pt={2} pb={2} mb={2}>
                <SearchForm />
            </Box>
            <Box pl={2} pr={2} pb={8}>
                {searchResults && <SearchResults searchResults={searchResults} />}
            </Box>
        </Box>
    )
}

const mapStateToProps = (state: TStore) => ({
    searchResults: state.search.searchResults
})

export default connect(mapStateToProps, { clearSearchResults })(SearchPage)