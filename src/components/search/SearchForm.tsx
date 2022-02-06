import React, { useState } from 'react'
import { Button, Paper, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { getBooksBySearch } from '../../redux/reducers/thunks'

interface IProps {
    getBooksBySearch: (data: any) => any
}

const styles = {
    paper: {
        position: 'relative'
    },
    input: {
        input: {
            paddingRight: '64px'
        }
    },
    clearButton: {
        position: 'absolute',
        right: '0',
        height: '100%'
    }
}

const SearchForm: React.FC<IProps> = ({ getBooksBySearch }) => {

    const { register, handleSubmit, reset } = useForm()
    const [hasValue, setHasValue] = useState(false)


    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length) setHasValue(true)
        if (!e.target.value.length) setHasValue(false)
    }
    const clearInputHandler = () => {
        reset()
        setHasValue(false)
    }

    const onSubmit = (data: any) => {
        console.log(data)
        getBooksBySearch(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Paper sx={styles.paper} >
                <TextField {...register('query')} placeholder="Search for books..." sx={styles.input} onInput={inputHandler} />
                {hasValue && (
                    <Button sx={styles.clearButton} onClick={clearInputHandler}>
                        <CloseIcon />
                    </Button>
                )}
            </Paper>
        </form>
    )
}

export default connect(null, { getBooksBySearch })(SearchForm)
