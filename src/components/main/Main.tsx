import React, { useEffect, useRef } from 'react'
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'

import SearchPage from './search/SearchPage'

import { routes } from '../../config'
import { connect } from 'react-redux'
import { TStore } from '../../redux/store'



interface Props {
    searchIndex: number | undefined
}

const Main: React.FC<Props> = ({ searchIndex }) => {
    const ref: any = useRef()

    useEffect(() => {
        if (searchIndex) ref.current.scroll(0, 0)
    }, [searchIndex])

    return (
        <Box pl={2} pr={2} sx={{ overflow: 'auto' }} ref={ref} >
            <Routes>
                <Route path={routes.home} element={<>home</>} />
                <Route path={routes.search} element={<SearchPage />} />
                <Route path={routes.favorites} element={<>favorites</>} />
            </Routes>
        </Box>
    )
}
const mapStateToProps = (state: TStore) => ({
    searchIndex: state.search.currentSearch?.startIndex
})
export default connect(mapStateToProps)(Main)