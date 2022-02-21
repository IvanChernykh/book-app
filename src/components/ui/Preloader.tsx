import React from 'react'
import { Box, CircularProgress } from '@mui/material'

const styles = {
    box: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    preloader: {
        color: '#bbb'
    }
}

const Preloader: React.FC = () => {
    return (
        <Box sx={styles.box}>
            <CircularProgress sx={styles.preloader} size={50} />
        </Box>
    )
}

export default Preloader