import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { connect } from 'react-redux'

import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

import { clearSearchResults } from '../../../redux/reducers/search/searchReducer'
import { ISearcResults } from '../../../redux/reducers/search/types/searchStateTypes'
import { IClearSearchResults } from '../../../redux/reducers/search/types/searchActionTypes'
import { TStore } from '../../../redux/store'


type Props = {
    isBookOpen: boolean
    searchResults: ISearcResults | null
    clearSearchResults: () => IClearSearchResults
}
const SearchPage: React.FC<Props> = ({ isBookOpen, searchResults, clearSearchResults }) => {

    useEffect(() => {
        return () => {
            //if (!isBookOpen) 
            clearSearchResults()
        }
    }, [])

    return (
        <Box>
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
    searchResults: state.search.searchResults,
    isBookOpen: state.main.bookPage.isOpen
})

export default connect(mapStateToProps, { clearSearchResults })(SearchPage)