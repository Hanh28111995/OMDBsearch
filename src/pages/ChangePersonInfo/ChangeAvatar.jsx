import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTitleHeader } from '../../store/actions/user.action';

export default function ChangeAvatar(props) {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer)
    useEffect(() => {
        dispatch(setTitleHeader(props.title))
    }, [userState.titleHeader])

    return (
        <div className='change-avatar bg-form'>
            <h4>NOTE</h4>
            <p>Your personal information must be authentic, any changes in your personal information, please notify HR of the company for correction.
                We would like to ensure that we only use your personal information for the company's work, all acts of disclosing your personal information to the outside are illegal.
                Read more about company policy at: Policy.</p>

            <div className='d-flex justify-content-center'>
                <form method="post" encType="multipart/form-data" action="/admin/employee/change-avatar">
                    <div className="mb-3">
                        <img src='https://admin.worldcraftlogistics.net/img/Avatar/hanhT__2023-03-04-01-23-53-990.jpg' alt="Employee Avatar" style={{ maxHeight: 500, maxWidth: 500 }} />
                    </div>
                    <div className="mb-3">
                        <input className="form-control" type="file" name="Employee__Avatar" />
                    </div><div className="mb-3">
                        <button type="submit" className="btn btn-success">Change</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
