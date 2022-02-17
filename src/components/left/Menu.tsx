import React, { useState } from 'react'
import { Box } from '@mui/material'
import ResizeBar from '../ui/ResizeBar'
import MenuList from './MenuList'
import Logo from './Logo'

const styles = {
    container: {
        background: '#000',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    inner: {
        width: '100%'
    }
}

const WIDTH = 200

const Menu: React.FC = () => {
    const [width, setWidth] = useState(WIDTH)

    return (
        <Box sx={{ ...styles.container, width: `${width}px` }} component="nav">
            <Box sx={styles.inner} pl={2} pr={2}>
                <Logo />
                <MenuList />
            </Box>
            <ResizeBar setWidth={setWidth} />
        </Box>
    )
}

export default Menu