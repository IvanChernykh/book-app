import React from 'react'
import { AppBar, Container, Toolbar } from '@mui/material'

import SearchForm from './SearchForm'

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '1rem 0 !important'
    }
}

const SearchBlock: React.FC = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Container sx={styles.container}>
                    <SearchForm />
                </Container>
            </Toolbar>
        </AppBar>
    )
}

export default SearchBlock
