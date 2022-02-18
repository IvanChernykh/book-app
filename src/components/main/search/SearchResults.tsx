import { Typography } from '@mui/material'
import React from 'react'

const styles = {
    title: {
        fontWeight: '700'
    }
}

const SearchResults: React.FC = () => {
    return (
        <>
            <Typography variant="h4" sx={styles.title}>Результати</Typography>
        </>
    )
}

export default SearchResults