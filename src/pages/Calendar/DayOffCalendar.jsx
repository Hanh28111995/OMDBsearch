import React, { useEffect, useState } from 'react'
import { Modal, Calendar } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { setTitleHeader } from '../../store/actions/user.action';
import ModalDayOffCalendar from '../../modules/dayOffCalendar/ModalDayOffCalendar';

export default function DayOffCalendar(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer)
    useEffect(() => {
        dispatch(setTitleHeader(props.title))
    }, [userState.titleHeader])

    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className='day-off-calendar'>
            <Calendar onSelect={onPanelChange} />
            <Modal title="FRI 13" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width='fit-content'>
                <ModalDayOffCalendar />
            </Modal>
        </div>

    )
}
