import React, { useEffect, useState } from 'react'

import classNames from './_ResizeBar.module.scss'

type Props = {
    setWidth: React.Dispatch<React.SetStateAction<string>>
}

const resizeStyles = { borderRight: '1px solid #777' }

const ResizeBar: React.FC<Props> = ({ setWidth }) => {
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
        setWidth(e.clientX.toString())
    }
    const stopResize = () => {
        setStyle({})
        setOnResize(false)
    }
    const mouseDownHandler = (e: React.MouseEvent) => setOnResize(true)

    return (
        <div className={classNames.resize_bar} onMouseDown={mouseDownHandler} style={style} />
    )
}

export default ResizeBar