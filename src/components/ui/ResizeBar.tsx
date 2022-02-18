import React, { useEffect, useState } from 'react'

import styles from './_ResizeBar.module.scss'

type Props = {
    minWidth: number
    maxWidth: number
    setWidth: React.Dispatch<React.SetStateAction<number>>
}

const resizeStyles = { borderRight: '1px solid #777' }

const setBodyStyles = (onResize: boolean) => {
    document.body.style.cursor = onResize ? 'col-resize' : 'default'
    document.body.style.userSelect = onResize ? 'none' : 'auto'
}

const ResizeBar: React.FC<Props> = ({ setWidth, minWidth, maxWidth }) => {
    const [onResize, setOnResize] = useState(false)
    const [style, setStyle] = useState({})

    useEffect(() => {
        if (onResize) {
            window.addEventListener('mousemove', resize)
            window.addEventListener('mouseup', stopResize)
            setBodyStyles(true)
        }
        return () => {
            window.removeEventListener('mousemove', resize)
            window.removeEventListener('mouseup', stopResize)
            setBodyStyles(false)
        }
    }, [onResize])

    const resize = (e: MouseEvent) => {
        setStyle(resizeStyles)

        if (e.clientX <= minWidth) setWidth(minWidth)
        if (e.clientX > minWidth && e.clientX < maxWidth) setWidth(e.clientX)
        if (e.clientX >= maxWidth) setWidth(maxWidth)
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