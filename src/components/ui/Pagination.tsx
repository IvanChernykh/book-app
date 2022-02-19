import React, { useState } from 'react'
import usePagination, { UsePaginationItem } from '@mui/material/usePagination/usePagination'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import styles from './_Pagination.module.scss'


const generatePaginationItems = (items: UsePaginationItem[]) => {
    return items.map(({ page, type, selected, ...item }, index) => {
        let children = null

        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = <span className={styles.ellipsis}>…</span>;
        } else if (type === 'page') {
            children = (
                <button
                    type="button"
                    className={selected ? `${styles.button} ${styles.active}` : styles.button}
                    {...item}
                >
                    {page}
                </button>
            )
        } else if (type === 'next') {
            children = (
                <button
                    type="button"
                    className={selected ? `${styles.button} ${styles.active}` : styles.button}
                    {...item}
                >
                    <ArrowForwardIosIcon className={styles.icon} />
                </button>
            )
        } else if (type === 'previous') {
            children = (
                <button
                    type="button"
                    className={selected ? `${styles.button} ${styles.active}` : styles.button}
                    {...item}
                >
                    <ArrowBackIosIcon className={styles.icon} />
                </button>
            )
        } else {
            return
        }
        return <li key={index}>{children}</li>
    })
}

const PaginationControl: React.FC = () => {

    const { items } = usePagination({ count: 10 })
    /* const [page, setPage] = useState(1)
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }; */

    const PaginationItems = generatePaginationItems(items)

    return (
        <nav>
            <ul className={styles.list}>
                {PaginationItems}
            </ul>
        </nav >
    )
}
export default PaginationControl