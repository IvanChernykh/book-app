import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

import MenuItem from '../ui/MenuItem'
import { routes } from '../../config'



export interface IMenuItem {
    text: string
    icon: JSX.Element
    path: string
    isActive: boolean
}

const styles = {
    icon: {
        width: '30px',
        height: 'auto'
    },
    box: {
        width: '100%'
    },
}

const menuItems: IMenuItem[] = [
    {
        text: 'Головна',
        icon: <HomeRoundedIcon sx={styles.icon} />,
        path: routes.home,
        isActive: false
    },
    {
        text: 'Пошук',
        icon: <SearchIcon sx={styles.icon} />,
        path: routes.search,
        isActive: false
    },
    {
        text: 'Обране',
        icon: <FavoriteBorderIcon sx={styles.icon} />,
        path: routes.favorites,
        isActive: false
    }
]

const MenuList: React.FC = () => {
    const [items, setItems] = useState(menuItems)

    const location = useLocation()

    useEffect(() => {
        setItems(prevState => {
            return prevState.map(elem => {
                if (elem.path === location.pathname) return { ...elem, isActive: true }
                return { ...elem, isActive: false }
            })
        })
    }, [location.pathname])

    const MenuItems = items.map(item => <MenuItem key={item.path} item={item} />)
    return (
        <Box sx={styles.box}>
            {MenuItems}
        </Box>
    )
}

export default MenuList