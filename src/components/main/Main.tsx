import React, { useEffect, useRef } from 'react'
import { Box } from '@mui/material'
import { Route, Routes, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'

import SearchPage from './search/SearchPage'
import BookPage from './book/BookPage'

import { routes } from '../../config'
import { TStore } from '../../redux/store'



interface Props {
    searchIndex: number | undefined
}

const Main: React.FC<Props> = ({ searchIndex }) => {

    const ref: any = useRef()
    const { pathname } = useLocation()

    useEffect(() => {
        ref.current.scroll(0, 0)
    }, [searchIndex, pathname])

    return (
        <Box pl={2} pr={2} pb={8} sx={{ overflow: 'auto' }} ref={ref} >
            <Routes>
                <Route path={routes.home} element={<>home</>} />
                <Route path={routes.search} element={<SearchPage />} />
                <Route path={routes.favorites} element={<>favorites</>} />
                <Route path={routes.book.optional} element={<BookPage />} />
            </Routes>
        </Box>
    )
}
const mapStateToProps = (state: TStore) => ({
    searchIndex: state.search.currentSearch?.startIndex
})

export default connect(mapStateToProps)(Main)