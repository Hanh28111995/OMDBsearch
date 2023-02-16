import { useDispatch, useSelector } from 'react-redux'
import React from 'react';
import { Space } from 'antd';
import { setModal } from '../MovieStore/actions/user.action';

export default function MovieDetail() {
    const userState = useSelector((state) => state.userReducer)
    const dispatch = useDispatch();
    const onModel = () => {
        dispatch(setModal(true))
    }
    return (
        <>
            <div className='output_block mb-5'>
                <div className='title_block'>
                    <h1 >Movie Detail</h1>
                </div>
                <Space onClick={() => onModel()}>
                    <div className='content_detail'>
                        <div className='content_detail_item'>
                            <img className='img-fluid' src={userState.movieDetail.Poster} alt={userState.movieDetail.Title} />
                        </div>
                        <div className='content_detail_item'>
                            <h3>{userState.movieDetail.Title}</h3>
                        </div>
                        <div className='content_detail_item'>
                            <h3>{userState.movieDetail.Released}</h3>
                        </div>
                    </div>
                </Space>
            </div>
        </>
    )
}
