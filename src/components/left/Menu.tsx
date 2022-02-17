import React, { useState } from 'react'
import { Box } from '@mui/material'
import ResizeBar from '../ui/ResizeBar'

const styles = {
    container: {
        background: '#000',
        height: '100%',
        display: 'flex'
    }
}

const Menu: React.FC = () => {
    const [width, setWidth] = useState('100')
    return (
        <Box sx={{ ...styles.container, width: `${width}px` }} component="nav">
            <Box sx={{ width: '100%' }}>this is menu</Box>
            <ResizeBar setWidth={setWidth} />
        </Box>
    )
}

export default Menu