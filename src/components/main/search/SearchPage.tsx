import { Box } from '@mui/material'
import React from 'react'
import SearchForm from './SearchForm'

const styles = {
    top: {

    }
}
const SearchPage: React.FC = () => {
    return (
        <>
            <Box sx={styles.top} pt={2} pb={2} pl={2}>
                <SearchForm />
            </Box>
        </>
    )
}

export default SearchPage