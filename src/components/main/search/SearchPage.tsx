import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { connect } from 'react-redux'

import SearchForm from './SearchForm'
import SearchResults from './SearchResults'
import Preloader from '../../ui/Preloader'

import { clearSearchResults } from '../../../redux/reducers/search/searchReducer'
import { ISearcResults } from '../../../redux/reducers/search/types/searchStateTypes'
import { IClearSearchResults } from '../../../redux/reducers/search/types/searchActionTypes'
import { TStore } from '../../../redux/store'
import { ILocation } from '../../../redux/reducers/main/types/mainStateTypes'


type Props = {
    location: ILocation | null
    searchResults: ISearcResults | null

    clearSearchResults: () => IClearSearchResults
}
const SearchPage: React.FC<Props> = ({ location, searchResults, clearSearchResults }) => {
    const [isInit, setIsInit] = useState(false)

    useEffect(() => {
        if (location?.current.split('/').every(el => el !== 'book')) {
            clearSearchResults()
        }
        setIsInit(true)
    }, [])

    return (
        <Box>
            <Box pt={2} pb={2} mb={2}>
                <SearchForm />
            </Box>
            {isInit ? (
                <Box pl={2} pr={2} pb={8}>
                    {/* !searchResults && <LastSearchQueries> */}
                    {searchResults && <SearchResults searchResults={searchResults} />}
                </Box>)
                :
                <Preloader />
            }
        </Box>
    )
}

const mapStateToProps = (state: TStore) => ({
    searchResults: state.search.searchResults,
    location: state.main.location
})

export default connect(mapStateToProps, { clearSearchResults })(SearchPage)