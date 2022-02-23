import React from 'react'
import { Typography } from '@mui/material'

import { IBookItem } from '../../../types'


type Props = {
    bookItem: IBookItem
}

const getAuthors = (authors: string[]) => {
    if (authors.length === 1) return authors
    return authors.join(', ')
}

const BookDescription: React.FC<Props> = ({ bookItem }) => {
    return (
        <>
            <Typography variant="h4" mb={bookItem.subtitle ? 2 : 4}>
                {bookItem.title}
            </Typography>

            {bookItem.subtitle && <Typography mb={4} sx={{ color: '#bbb' }} >{bookItem.subtitle}</Typography>}

            <Typography mb={4} variant="h5">
                {bookItem.authors && <>{getAuthors(bookItem.authors)} &bull;</>} {bookItem.publishedDate}
            </Typography>

            {bookItem.description && <Typography>{bookItem.description}</Typography>}
        </>
    )
}

export default BookDescription