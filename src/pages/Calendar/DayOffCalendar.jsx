import React, { useEffect, useState } from 'react'
import { Modal, Calendar, Badge } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { setDetailDayOff, setTitleHeader } from '../../store/actions/user.action';
import ModalDayOffCalendar from '../../modules/dayOffCalendar/ModalDayOffCalendar';
import { dataUserOff } from '../../constants/dataUserOff';
import moment from 'moment';
import TimeOffAddNew from '../Ticket/TimeOff/TimeOffAddNew';
import dayjs from 'dayjs';
export default function DayOffCalendar(props) {
    const [ModalCreate, setModalCreate] = useState(false)
    const [ModalDetail, setModalDetail] = useState(false)
    const [value, setValue] = useState(() => dayjs(''));
    const [selectedMonth, setSelectedMonth] = useState(moment());
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer)
    useEffect(() => {
        dispatch(setTitleHeader(props.title))
    }, [userState.titleHeader])

    useEffect(() => {

    }, [selectedMonth])

    const dataUser = dataUserOff;

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setModalCreate(false);
        setModalDetail(false)
    };

    const getMonthData = (value) => {
        if (value.month() === 8) {
            return 1394;
        }
    };

    const monthCellRender = (value) => {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    };
    // {`form-login-1 ${styleLogin ? "hide" : ""}  p-3`}
    const getListData = (value) => {
        let listData = []
        let event = dataUser.filter((item) => moment(item.day).format("MM") === selectedMonth.format('MM'));
        for (let i = 0; i < event.length; i++) {
            if (value.format("MM/DD") === moment(event[i].day).format("MM/DD")) {
                for (let y = 0; y < (event[i].user).length; y++) {
                    listData.push(
                        {
                            type: `${(event[i].user[y].typeDayOff === 'half day') ? "warning" : ((event[i].user[y].typeDayOff === 'full day') ? "success" : "error")}`,
                            content: event[i].user[y].name,
                            detail: event[i].user,
                        }
                    )
                }
            }
        }
        return listData || [];
    }

    const dateCellRender = (value) => {
        const listData = getListData(value);
        return (
            <ul
                className='events' style={{ maxHeight: '100%' }}
            >
                {
                    listData.map((item) => (
                        <li
                            key={item.content}
                            onClick={() => {
                                dispatch(setDetailDayOff(listData[0].detail));
                                setIsModalOpen(true);
                                setModalDetail(true)
                            }}
                        >
                            <Badge status={item.type} text={item.content} />
                        </li>
                    ))
                }
            </ul>
        )
    }

    const handlePanelChange = (value, mode) => {
        if (mode === 'month') {
            setSelectedMonth(value);
        }
    };

    return (
        <div className='day-off-calendar'>
            <div className='calendar-header'>
                <h4>Select Day Off</h4>
                <p>Click to the date box of Calendar to create your Time Off.<br></br>
                    Click to the event in the date box  to see detail.
                </p>
            </div>
            <Calendar
                onSelect={(newValue) => {
                    setValue(newValue);
                    setIsModalOpen(true);
                    setModalCreate(true);
                    
                }}
                onPanelChange={(newValue) => handlePanelChange(newValue)}
                dateCellRender={dateCellRender}
                monthCellRender={monthCellRender} />
            <Modal
                title={value.format('MMMM Do YYYY')} open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                className='model-calendar'
                footer={null}
                width={1000}
            >

                {
                    ModalDetail &&
                    <ModalDayOffCalendar />
                }
                {
                    ((!ModalDetail) && (ModalCreate)) &&
                    < TimeOffAddNew
                        hideBtn={false}
                        daySelected={value}
                    />
                }
            </Modal>
            {/* <p>{selectedMonth.format('MM')}</p> */}
        </div>
    )
}
