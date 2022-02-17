import React from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { Box, Typography } from '@mui/material'

const styles = {
    box: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
    },
    logo: {
        color: '#fff',
        width: '40px',
        height: 'auto'
    },
    text: {
        fontSize: '1.5rem',
        marginTop: '5px',
    }
}

const Logo: React.FC = () => {
    return (
        <Box sx={styles.box} pt={2} pb={2} mb={2}>
            <MenuBookIcon sx={styles.logo} />
            <Typography sx={styles.text}>Books</Typography>
        </Box>
    )
}

export default Logo