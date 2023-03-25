import React, { useEffect } from 'react'
import { Calendar } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { setTitleHeader } from '../../store/actions/user.action';

export default function DayOffCalendar(props) {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer)
    useEffect(() => {
        dispatch(setTitleHeader(props.title))
    }, [userState.titleHeader])

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    return (
        <Calendar onPanelChange={onPanelChange} />
    )
}
