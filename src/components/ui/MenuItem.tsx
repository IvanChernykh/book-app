import React from 'react'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { IMenuItem } from '../left/MenuList'
import styles from './_MenuItem.module.scss'


type Props = {
    item: IMenuItem
}

const MenuItem: React.FC<Props> = ({ item }) => {

    const classNames = item.isActive ? `${styles.link} ${styles.active}` : styles.link

    return (
        <Link to={item.path} className={classNames}>
            {item.icon}
            <Typography className={styles.text}>{item.text}</Typography>
        </Link>
    )
}

export default MenuItem