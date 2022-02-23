import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

import Menu from './components/left/Menu'
import Main from './components/main/Main'

import { ISetLocation } from './redux/reducers/main/types/mainActionTypes'
import { setLocation } from './redux/reducers/main/mainReducer'


type Props = {
    setLocation: (prev: string, current: string) => ISetLocation
}

const styles = {
    box: {
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        height: '100vh',
        overflow: 'hidden',
    }
}

const App: React.FC<Props> = ({ setLocation }) => {
    const { pathname } = useLocation()
    const [currentLocation, setCurrentLocation] = useState('')

    useEffect(() => {
        setCurrentLocation(pathname)
        setLocation(currentLocation, pathname)
    }, [pathname])

    return (
        <Box sx={styles.box}>
            <Menu />
            <Main />
        </Box>
    )
}
export default connect(null, { setLocation })(App)
