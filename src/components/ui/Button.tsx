import React from 'react'
import styles from './_Button.module.scss'


type Props = {
    children: React.ReactChild
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<Props> = ({ children, onClick }) => {
    return (
        <button
            className={styles.button}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button