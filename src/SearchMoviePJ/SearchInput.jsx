import React, { useRef, useState } from 'react'
import { AutoComplete } from 'antd';
import { fetchListMovieAPI } from '../services/getMethod';
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
            dispatch(setMovieList(result.data.Search || []))
        }
        else {
            dispatch(setMovieList([]))
            dispatch(setMovieDetail({}))
        }
    };

    const searchRef = useRef(null)
    return (
        <div className='input_block'>
            <div className='title_block'>
                <h1 >Movie Search</h1>
            </div>

            <AutoComplete
                placeholder="Search Movie Title"
                options={userState.movieList?.map((movieS) => {
                    return { value: movieS.imdbID, label: movieS.Title, key: movieS.imdbID }
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
                onSelect={(imdbID) => {
                    const selectedMovie = userState.movieList.find((movie) => movie.imdbID === imdbID)
                    if (selectedMovie) {
                        setValue(selectedMovie.Title)
                        dispatch(setMovieDetail(selectedMovie))
                    }
                }}
            />
        </div>
    )
}
