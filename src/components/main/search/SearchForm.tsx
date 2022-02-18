import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Box } from '@mui/material'

import TextInput from '../../ui/TextInput'
import RadioButtons from '../../ui/RadioButtons'

import { getBooksBySearch } from '../../../redux/reducers/thunks'
import { collectFormData } from '../../../utils/collectFormData'


export interface ISearchForm {
    query: string
    sortBy: string
}
type TFormFileds = keyof ISearchForm

type Props = {
    getBooksBySearch: (data: any) => any
}


const styles = {
    box: {
        display: 'flex',
        alignItems: 'center',
        gap: '4rem'
    }
}


const formFields: TFormFileds[] = ['query', 'sortBy']

const sortOptions = [
    {
        value: 'relevance',
        name: 'Сортувати за релевантністю'
    },
    {
        value: 'newest',
        name: 'Сортувати за новизною'
    },
]


const SearchForm: React.FC<Props> = ({ getBooksBySearch }) => {

    const { register, resetField, getValues, handleSubmit } = useForm<ISearchForm>()
    const [hasValue, setHasValue] = useState(false)
    const [onInput, setOnInput] = useState(false)

    useEffect(() => {
        if (hasValue && !onInput) {
            const data = collectFormData(formFields, getValues)
            getBooksBySearch(data)
        }
    }, [onInput])

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length) setHasValue(true)
        if (!e.target.value.length) setHasValue(false)
        setOnInput(true)
        setTimeout(() => {
            setOnInput(false)
        }, 500)
    }
    const clearInputHandler = () => {
        resetField('query')
        setHasValue(false)
    }
    const onSubmit = (data: ISearchForm) => {
        if (hasValue && !onInput) getBooksBySearch(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={styles.box}>
                <TextInput
                    name="query"
                    hasValue={hasValue}
                    placeholder="Шукайте книги..."
                    register={register}
                    clearInputHandler={clearInputHandler}
                    inputHandler={inputHandler}
                />
                <RadioButtons
                    items={sortOptions}
                    register={register}
                    name="sortBy"
                />
            </Box>
        </form>
    )
}

export default connect(null, { getBooksBySearch })(SearchForm)
