import React, { useEffect } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { connect } from 'react-redux'

import SearchCard from '../../common/SearchCard'

import { IRecentQuery } from '../../../redux/reducers/search/types/searchStateTypes'
import { TStore } from '../../../redux/store'




type Props = {
    recentQueries: IRecentQuery[] | []
    isFetching: boolean
}

const RecentQueries: React.FC<Props> = ({ recentQueries, isFetching }) => {

    const Items = recentQueries!.map((item, i) => <SearchCard queryItem={item} key={i} />)

    return isFetching ?
        null
        :
        (<>
            <Typography variant='h4' mb={4} >Останні пошукові запити</Typography>
            <Grid container spacing={2}>
                {Items}
            </Grid>
        </>
        )
}

const mapStateToProps = (state: TStore) => ({
    recentQueries: state.search.recentQueries,
    isFetching: state.main.isFetching
})

export default connect(mapStateToProps)(RecentQueries)