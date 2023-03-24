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
    useEffect(() => {
        dispatch(setTitleHeader(props.title))
    }, [userState.titleHeader])


    return (
        <div className='dashboard '>
            <Row gutter={24} >
                <Col xs={24} sm={24} md={18} lg={18}>
                    <StatusEmployee />
                    <StatusGroup />
                </Col>
                <Col xs={24} sm={24} md={6} lg={6}>
                    <StatusEvent eventType='birthday'/>
                    <StatusEvent eventType='newEmployee'/>
                </Col>
            </Row>
        </div >
    )
}
