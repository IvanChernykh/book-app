import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { Select, MenuItem, SelectChangeEvent } from '@mui/material'

import styles from './_SelectInput.module.scss'


interface ISelectItems {
    value: string | number
    name: string
}
type Props = {
    name: string
    optionItems: ISelectItems[]
    value: string | number
    setValue: React.Dispatch<React.SetStateAction<string>>
    register: UseFormRegister<any>
}


const SelectInput: React.FC<Props> = ({ name, optionItems, value, setValue, register }) => {

    const Options = optionItems.map(item => {
        return (
            <MenuItem key={item.value} value={item.value}>
                {item.name}
            </MenuItem>
        )
    })
    const handleChange = (e: SelectChangeEvent<any>) => {
        setValue(e.target.value)
    }

    return (
        <Select
            className={styles.select}
            value={value}
            {...register(name)}
            onChange={handleChange}
        >
            {Options}
        </Select>
    )
}

export default SelectInput