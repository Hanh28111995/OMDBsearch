import React, { useRef, useState } from 'react'
import { AutoComplete } from 'antd';
import { fetchDetailMovieAPI, fetchListMovieAPI } from '../services/getMethod';
import { OMDB_API_KEY } from '../constants/common';
import { useDispatch, useSelector } from 'react-redux';
// import { userReducer } from '../MovieStore/reducers/user.reducer';
import { setMovieDetail, setMovieList } from '../MovieStore/actions/user.action';

export default function SearchInput() {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer)
    const [value, setValue] = useState('')

    const fetchAutocompleteListMovie = async (keyword) => {
        if (keyword) {
            const result = await fetchListMovieAPI(`?apikey=${OMDB_API_KEY}&s=${keyword}`);
            dispatch(setMovieList(result.data.Search))
        }
        else {
            dispatch(setMovieList([]))
            dispatch(setMovieDetail({}))
        }
    };

    const fetchGetDetailMovie = async (title) => {
        const result = await fetchDetailMovieAPI(`?apikey=${OMDB_API_KEY}&t=${title}`)
        dispatch(setMovieDetail(result.data))
    }

    const searchRef = useRef(null)
    return (
        <div className='input_block'>
            <div className='title_block'>
                <h1 >Movie Search</h1>
            </div>

            <AutoComplete
                placeholder="Search Movie Title"
                options={userState.movieList?.map((movieS, index) => {
                    return { value: movieS.Title.toString(), label: movieS.Title, key: Math.random() }
                })}
                value={value}
                onChange={(text) => {
                    setValue(text)
                }}
                onSearch={(value) => {
                    if (searchRef.current) {
                        clearTimeout(searchRef.current)
                    }
                    searchRef.current = setTimeout(() => {
                        fetchAutocompleteListMovie(value)
                    }, 200)
                }}
                onSelect={(options) => {
                    fetchGetDetailMovie(options);
                }}
            />
        </div>
    )
}
