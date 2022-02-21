import React from 'react'
import { IBookItem } from '../../types'

import styles from './_BookImage.module.scss'

type TSize = 'small' | 'large'
type Props = {
    item: IBookItem
    size: TSize
}

const BookImage: React.FC<Props> = ({ item, size }) => {

    const innerClassName = size === 'large' ? styles.img_inner_large : styles.img_inner_small

    return (
        <div className={styles.img_container}>
            <div className={innerClassName}>
                <img
                    src={item.imageLinks?.thumbnail}
                    alt={item.title}
                    className={styles.img}
                />
            </div>
        </div>
    )
}

export default BookImage