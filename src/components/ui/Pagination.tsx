import React from 'react'
import usePagination, { UsePaginationItem } from '@mui/material/usePagination/usePagination'

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import styles from './_Pagination.module.scss'


type Props = {
    pagesCount: number
    setCurrentPage: (...params: any) => void
}

const generatePaginationItems = (items: UsePaginationItem[], pagesCount: number, setCurrentPage: React.Dispatch<React.SetStateAction<number>>) => {
    return items.map(({ page, type, selected, ...item }, index) => {

        let children = null

        const onClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            item.onClick(e)
            setCurrentPage(page)
        }

        if (type === 'start-ellipsis' || type === 'end-ellipsis') {
            children = <span className={styles.ellipsis}>…</span>;
        } else if (type === 'page') {
            children = (
                <button
                    {...item}
                    type="button"
                    disabled={selected ? true : false}
                    className={selected ? `${styles.button} ${styles.active}` : styles.button}
                    onClick={onClickHandler}
                >
                    {page}
                </button>
            )
        } else if (type === 'next') {
            children = (
                <button
                    {...item}
                    type="button"
                    className={page === pagesCount + 1 ? styles.disabled : styles.button}
                    onClick={onClickHandler}
                >
                    <ArrowForwardIosIcon className={styles.icon} />
                </button>
            )
        } else if (type === 'previous') {
            children = (
                <button
                    {...item}
                    type="button"
                    className={page === 0 ? styles.disabled : styles.button}
                    onClick={onClickHandler}
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

const PaginationControl: React.FC<Props> = ({ pagesCount, setCurrentPage }) => {

    const { items } = usePagination({ count: pagesCount }) //count: totalPages - calculate from totalItems

    const PaginationItems = generatePaginationItems(items, pagesCount, setCurrentPage)

    return (
        <nav>
            <ul className={styles.list}>
                {PaginationItems}
            </ul>
        </nav >
    )
}
export default PaginationControl