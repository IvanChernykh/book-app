import React, { useEffect, useState } from 'react'

import styles from './_ResizeBar.module.scss'

type Props = {
    minWidth: number
    setWidth: React.Dispatch<React.SetStateAction<number>>
}

const resizeStyles = { borderRight: '1px solid #777' }

const ResizeBar: React.FC<Props> = ({ setWidth, minWidth }) => {
    const [onResize, setOnResize] = useState(false)
    const [style, setStyle] = useState({})

    useEffect(() => {
        if (onResize) {
            window.addEventListener('mousemove', resize)
            window.addEventListener('mouseup', stopResize)
        }
        return () => {
            window.removeEventListener('mousemove', resize)
            window.removeEventListener('mouseup', stopResize)
        }
    }, [onResize])

    const resize = (e: MouseEvent) => {
        setStyle(resizeStyles)

        if (e.clientX <= minWidth) setWidth(minWidth)
        if (e.clientX > minWidth) setWidth(e.clientX)
    }
    const stopResize = () => {
        setStyle({})
        setOnResize(false)
    }
    const mouseDownHandler = (e: React.MouseEvent) => setOnResize(true)

    return (
        <div className={styles.resize_bar} onMouseDown={mouseDownHandler} style={style} />
    )
}

export default ResizeBar