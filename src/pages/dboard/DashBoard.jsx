import React from 'react'
import { Card, Col, Row, Avatar, Space } from 'antd'
import Icon from "@mdi/react";
import { mdiAccessPoint, mdiAccessPointOff } from "@mdi/js";
import StatusEmployee from '../../modules/dboard/StatusEmployee';
import StatusGroup from '../../modules/dboard/StatusGroup';
import StatusEvent from '../../modules/dboard/StatusEvent';
const { Meta } = Card;


export default function DashBoard() {
    return (
        <div className='dashboard '>
            <Space direction='horizontal'>
                <Space direction='vertical' >
                    <StatusEmployee />
                    <StatusGroup />
                </Space>
                <Space direction='vertical'>
                    <StatusEvent />
                    <StatusEvent />
                    <StatusEvent />
                </Space>
            </Space>
        </div>
    )
}
