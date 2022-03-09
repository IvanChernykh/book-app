import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { Box } from '@mui/material'

import TextInput from '../../ui/TextInput'
import RadioButtons from '../../ui/RadioButtons'

import { getBooksBySearch } from '../../../redux/reducers/search/searchThunks'
import { collectFormData } from '../../../utils/collectFormData'
import { clearSearchResults } from '../../../redux/reducers/search/searchReducer'
import { IClearSearchResults } from '../../../redux/reducers/search/types/searchActionTypes'
import { TStore } from '../../../redux/store'


export type SortBy = 'relevance' | 'newest'
export interface ISearchForm {
    query: string
    sortBy: SortBy
}
type TFormFileds = keyof ISearchForm

type Props = {
    startIndex: number | undefined
    getBooksBySearch: (data: any, startIndex: number) => any
    clearSearchResults: () => IClearSearchResults
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


const SearchForm: React.FC<Props> = ({ startIndex, getBooksBySearch, clearSearchResults }) => {

    const { register, resetField, getValues, handleSubmit } = useForm<ISearchForm>()
    const [hasValue, setHasValue] = useState(false)
    const [onInput, setOnInput] = useState(false)

    useEffect(() => {
        if (hasValue && !onInput) {
            if (startIndex && startIndex !== 0) clearSearchResults()

            const data = collectFormData(formFields, getValues)
            getBooksBySearch(data, 0)
        }
    }, [onInput])

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length) setHasValue(true)
        if (!e.target.value.length) setHasValue(false)
        setOnInput(true)
        setTimeout(() => {
            setOnInput(false)
        }, 600)
    }
    const clearInputHandler = () => {
        resetField('query')
        setHasValue(false)
    }
    const onSubmit = (data: ISearchForm) => {
        if (hasValue && !onInput) {
            if (startIndex && startIndex !== 0) clearSearchResults()
            getBooksBySearch(data, 0)
        }
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
const mapStateToProps = (state: TStore) => ({
    startIndex: state.search.currentSearch?.startIndex
})

export default connect(mapStateToProps, { getBooksBySearch, clearSearchResults })(SearchForm)
