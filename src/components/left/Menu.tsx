import React, { useState } from 'react'
import { Box } from '@mui/material'

import ResizeBar from '../ui/ResizeBar'
import MenuList from './MenuList'
import Logo from './Logo'

const styles = {
    container: {
        position: 'relative',
        background: '#000',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between'
    },
    inner: {
        width: '100%'
    }
}

const BLOCK_WIDTH = 220
const BLOCK_MIN_WIDTH = 160
const BLOCK_MAX_WIDTH = 360

const Menu: React.FC = () => {
    const [width, setWidth] = useState(BLOCK_WIDTH)

    return (
        <Box sx={{ ...styles.container, width: `${width}px` }} component="nav">
            <Box sx={styles.inner} pl={2} pr={2}>
                <Logo />
                <MenuList />
            </Box>
            <ResizeBar setWidth={setWidth} minWidth={BLOCK_MIN_WIDTH} maxWidth={BLOCK_MAX_WIDTH} />
        </Box>
    )
}

export default Menu