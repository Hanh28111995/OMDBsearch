import React, { useEffect } from 'react'
import { Card, Col, Row, Avatar, Space } from 'antd'
import Icon from "@mdi/react";
import { mdiAccessPoint, mdiAccessPointOff } from "@mdi/js";
import StatusEmployee from '../../modules/dboard/StatusEmployee';
import StatusGroup from '../../modules/dboard/StatusGroup';
import StatusEvent from '../../modules/dboard/StatusEvent';
import { useDispatch, useSelector } from 'react-redux';
import { setTitleHeader } from '../../store/actions/user.action';
const { Meta } = Card;


export default function DashBoard(props) {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer)
    useEffect(()=>{
        dispatch(setTitleHeader(props.title))
    },[userState.titleHeader])
    
    
    return (
        <div className='dashboard '>
            <Space direction='horizontal' className='w-100'>
                <Space direction='vertical' className='w-100'>
                    <StatusEmployee />
                    <StatusGroup />
                </Space>
                {/* <Space direction='vertical'>
                    <StatusEvent />
                    <StatusEvent />
                    <StatusEvent />
                </Space> */}
            </Space>
        </div>
    )
}
