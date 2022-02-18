import React from 'react'
import { Typography } from '@mui/material'

import { IBookItem } from '../../redux/reducers/types/stateTypes'
import styles from './_BookCard.module.scss'


type Props = {
    item: IBookItem
}

const BookCard: React.FC<Props> = ({ item }) => {

    const authors = item.authors?.length > 1 ? item.authors.join(', ') : item.authors

    return (
        <div className={styles.container}>
            <div className={styles.img_container}>
                <div className={styles.img_inner}>
                    <img
                        src={item.imageLinks?.thumbnail}
                        alt={item.title}
                        className={styles.img}
                    />
                </div>
            </div>
            <Typography className={styles.title} mb={1}>
                {item.title}
            </Typography>
            <Typography className={styles.authors}>
                {authors}
            </Typography>
        </div>
    )
}

export default BookCard