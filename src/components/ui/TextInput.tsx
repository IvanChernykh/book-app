import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

import styles from './_TextInput.module.scss'


type Props = {
    name: string
    hasValue?: boolean
    placeholder?: string

    register: UseFormRegister<any>
    inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
    clearInputHandler: () => void
}

const TextInput: React.FC<Props> = ({ name, hasValue, placeholder, clearInputHandler, register, inputHandler }) => {
    return (
        <div className={styles.wrapper}>
            <SearchIcon className={`${styles.icon} ${styles.search_icon}`} />
            <input
                {...register(name)}
                type="text"
                placeholder={placeholder}
                className={styles.input}
                onInput={inputHandler}
            />
            {hasValue && (
                <CloseIcon
                    className={`${styles.icon} ${styles.clear_button}`}
                    onClick={clearInputHandler}
                />
            )}
        </div>
    )
}

export default TextInput