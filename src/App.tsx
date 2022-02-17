import React from 'react'
import { Box } from '@mui/material'
import Menu from './components/left/Menu'
import Main from './components/main/Main'


const styles = {
    box: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        height: '100vh',
        overflow: 'hidden',
    }
}

const App: React.FC = () => {
    return (
        <Box sx={styles.box}>
            <Menu />
            <Main />
        </Box>
    )
}

export default App
