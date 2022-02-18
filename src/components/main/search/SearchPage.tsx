import { Box } from '@mui/material'
import React from 'react'
import SearchForm from './SearchForm'
import SearchResults from './SearchResults'

const styles = {
    top: {

    }
}
const SearchPage: React.FC = () => {
    return (
        <Box >
            <Box sx={styles.top} pt={2} pb={2} mb={2}>
                <SearchForm />
            </Box>
            <Box pl={2} pr={2}>
                <SearchResults />
            </Box>
        </Box>
    )
}

export default SearchPage