import React, { useState } from 'react'
import { RadioGroup, FormControlLabel, FormControl, Radio } from '@mui/material'
import { UseFormRegister } from 'react-hook-form'

import styles from './_RadioButtons.module.scss'

interface IRadioItems {
    value: string
    name: string
}
type Props = {
    items: IRadioItems[]
    name: string
    register: UseFormRegister<any>
}

const RadioButtons: React.FC<Props> = ({ name, items, register }) => {
    const [value, setValue] = useState(items[0].value)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const Buttons = items.map(item => {
        const classNames = value === item.value ? `${styles.label} ${styles.active}` : styles.label
        return (
            <FormControlLabel
                {...register(name)}
                key={item.value}
                value={item.value}
                control={<Radio className={styles.radio} onChange={changeHandler} />}
                label={item.name}
                className={classNames}
            />
        )
    })

    return (
        <FormControl>
            <RadioGroup row className={styles.container} defaultValue={items[0].value} >
                {Buttons}
            </RadioGroup>
        </FormControl>
    )
}

export default React.memo(RadioButtons)