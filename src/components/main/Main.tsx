import { Box } from '@mui/material'
import React from 'react'
import Menu from '../left/Menu'


const styles = {
    box: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        height: '100vh',
        overflow: 'hidden',
    }
}

const Main: React.FC = () => {
    return (
        <Box sx={styles.box}>
            <Menu />
            <div>right</div>
        </Box>
    )
}

export default Main