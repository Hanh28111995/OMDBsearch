import React from 'react'
import { AutoComplete, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../MovieStore/actions/user.action';


export default function ModelComponent() {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer)

    const handleOk = () => {
        dispatch(setModal(false));
    };

    const handleCancel = () => {
        dispatch(setModal(false));
    };
    const { Title, Released, Runtime, Ratings, Plot, Actors } = userState.movieDetail
    return (

        <Modal title="Movie's Information" open={userState.openModel} onOk={handleOk} onCancel={handleCancel} footer={false} >
            <div className='model_detail'>
                <div className='model_detail_item1' style={{ backgroundImage: `url(${userState.movieDetail.Poster})` }}></div>
                <div className='model_detail_item2'>
                    <div className='model_detail_item3'>
                        <div className='item_title'><p>Title: </p>
                        </div>
                        <div className='item_value'> <p>{Title}</p>
                        </div>
                    </div>
                    <div className='model_detail_item4'>
                        <div className='item_title'><p>Released: </p>
                        </div>
                        <div className='item_value'><p>{Released}</p>
                        </div>
                    </div>
                    <div className='model_detail_item5'>
                        <div className='item_title'><p>Runtime: </p>
                        </div>
                        <div className='item_value'><p>{Runtime}</p>
                        </div>
                    </div>
                    <div className='model_detail_item6'>
                        <div className='item_title'><p>Ratings: </p>
                        </div>
                        <div className='item_value'><p>{Ratings?.map(item => { if (item.Source === "Internet Movie Database") return item.Value })}</p>
                        </div>
                    </div>
                    <div className='model_detail_item7'>
                        <div className='item_title'> <p>Summary: </p></div>
                        <div className='item_value'> <p>{Plot}</p></div>
                    </div>
                    <div className='model_detail_item8'>
                        <div className='item_title'><p>Cast members: </p></div>
                        <div className='item_value'><p>{Actors}</p></div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
