import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { getSearchDataThunk } from '../redux/reducers/searchReducer'

type headerProps = {
    getSearchDataThunk: (value: string, startIndex: number, sort: string, category: string) => void
}

const Header: React.FC<headerProps> = ({ getSearchDataThunk }) => {
    const ref = useRef<HTMLInputElement>(null)
    const [sort, setSort] = useState<string>('relevance')
    const [category, setCategory] = useState<string>('all')
    const submitHandler = (e: React.FormEvent): void => {
        e.preventDefault()
        getSearchDataThunk(ref.current!.value.trim(), 0, sort, category)
        ref.current!.value = ''
    }
    const categories: string[] = ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry']
    return (
        <header className='header '>
            <div className='header__inner'>
                <h1 className='text-center'>Search for books</h1>
                <form className='row search-form' onSubmit={(e: React.FormEvent) => submitHandler(e)}>
                    <div className='col-12 search-form__input'>
                        <input ref={ref} placeholder='Search for books' />
                        <button type='submit' >Search</button>
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='sort'>Sort By</label>
                        <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSort(e.target.value)} id='sort'>
                            <option value='relevance'>Relevance</option>
                            <option value='newest'>Newest</option>
                        </select>
                    </div>
                    <div className='col-md-6'>
                        <label htmlFor='category'>Categories</label>
                        <select onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)} id='categories'>
                            {categories.map(c => <option key={c} value={c}>{c}</option>)}
                        </select>
                    </div>
                </form>
            </div>
        </header>
    )
}

export default connect(null, { getSearchDataThunk })(Header)
