import React, { useRef } from 'react'
import api from '../api/api'

const Header: React.FC = () => {
    const ref = useRef<HTMLInputElement>(null)
    const submitHandler = (e: React.FormEvent): void => {
        e.preventDefault()
        api.search(ref.current!.value)
        ref.current!.value = ''
    }
    return (
        <header className='header '>
            <div className='header__inner'>
                <h1 className='text-center'>Search for books</h1>
                <div className='row search'>
                    <form className='col-12 search-form' onSubmit={(e) => submitHandler(e)}>
                        <input ref={ref} placeholder='Search for books' />
                        <button type='submit' >Search</button>
                    </form>
                    <div className='col-sm-6'>1</div>
                    <div className='col-sm-6'>2</div>
                </div>
            </div>
        </header>
    )
}

export default Header
