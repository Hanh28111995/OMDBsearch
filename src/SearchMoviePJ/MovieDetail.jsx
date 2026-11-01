import React, { useState } from 'react';
import { Button, Space, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetailMovieAPI } from '../services/getMethod';
import { OMDB_API_KEY } from '../constants/common';
import { setMovieDetail, setModal } from '../MovieStore/actions/user.action';

export default function MovieDetail() {
    const userState = useSelector((state) => state.userReducer)
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false)

    const showMovieDetails = async () => {
        if (!userState.movieDetail.imdbID) return

        setLoading(true)
        try {
            const result = await fetchDetailMovieAPI(
                `?apikey=${OMDB_API_KEY}&i=${encodeURIComponent(userState.movieDetail.imdbID)}`
            )
            if (result.data.Response === 'False') {
                message.error(result.data.Error || 'Unable to load movie details.')
                return
            }

            dispatch(setMovieDetail(result.data))
            dispatch(setModal(true))
        } catch (error) {
            message.error(error.response?.data?.Error || error.message || 'Unable to load movie details.')
        } finally {
            setLoading(false)
        }
    };

    return (
        <div className='output_block mb-5'>
            <div className='title_block'>
                <h1 >Movie Detail</h1>
            </div>
            {userState.movieDetail.imdbID && (
                <Space direction="vertical">
                    <div className='content_detail'>
                        <div className='content_detail_item'>
                            <img className='img-fluid' src={userState.movieDetail.Poster} alt={userState.movieDetail.Title} />
                        </div>
                        <div className='content_detail_item'>
                            <h3>{userState.movieDetail.Title}</h3>
                        </div>
                        <div className='content_detail_item'>
                            <h3>{userState.movieDetail.Year}</h3>
                        </div>
                    </div>
                    <Button type="primary" loading={loading} onClick={showMovieDetails}>
                        Detail
                    </Button>
                </Space>
            )}
        </div>
    )
}
