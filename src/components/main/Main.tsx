import React from 'react'
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

import SearchPage from './search/SearchPage'

import { routes } from '../../config'


const Main: React.FC = () => {
    return (
        <Box>
            <Routes>
                <Route path={routes.home} element={<>home</>} />
                <Route path={routes.search} element={<SearchPage />} />
                <Route path={routes.favorites} element={<>favorites</>} />
            </Routes>
        </Box>
    )
}

export default Main