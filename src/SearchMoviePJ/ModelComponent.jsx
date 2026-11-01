import React from 'react'
import { Descriptions, Modal } from 'antd';
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
    const movie = userState.movieDetail
    const details = [
        ['Year', movie.Year],
        ['Rated', movie.Rated],
        ['Released', movie.Released],
        ['Runtime', movie.Runtime],
        ['Genre', movie.Genre],
        ['Director', movie.Director],
        ['Writer', movie.Writer],
        ['Actors', movie.Actors],
        ['Plot', movie.Plot],
        ['Language', movie.Language],
        ['Country', movie.Country],
        ['Awards', movie.Awards],
        ['IMDb rating', movie.imdbRating],
        ['IMDb votes', movie.imdbVotes],
        ['Metascore', movie.Metascore],
        ['Box office', movie.BoxOffice],
        ['Production', movie.Production],
        ['Website', movie.Website],
        ['Type', movie.Type],
        ['DVD', movie.DVD],
        ['IMDb ID', movie.imdbID],
    ].filter(([, value]) => value && value !== 'N/A')
    const ratings = movie.Ratings?.map(({ Source, Value }) => `${Source}: ${Value}`).join(' | ')

    return (

        <Modal
            title={movie.Title || "Movie's Information"}
            open={userState.openModel}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
            className="movie-detail-modal"
        >
            <div className='model_detail'>
                <div
                    className='model_detail_item1'
                    style={{ backgroundImage: movie.Poster && movie.Poster !== 'N/A' ? `url(${movie.Poster})` : 'none' }}
                />
                <Descriptions bordered column={1} size="small">
                    <Descriptions.Item label="Title">{movie.Title}</Descriptions.Item>
                    {details.map(([label, value]) => (
                        <Descriptions.Item key={label} label={label}>{value}</Descriptions.Item>
                    ))}
                    {ratings && <Descriptions.Item label="Ratings">{ratings}</Descriptions.Item>}
                </Descriptions>
            </div>
        </Modal>
    )
}
