import React from 'react'
import { Card, Col, Row, Avatar } from 'antd'
import Icon from "@mdi/react";
import { mdiAccessPoint, mdiAccessPointOff } from "@mdi/js";
import StatusEmployee from '../../modules/dboard/StatusEmployee';
import StatusGroup from '../../modules/dboard/StatusGroup';
import StatusEvent from '../../modules/dboard/StatusEvent';
const { Meta } = Card;


export default function DashBoard() {
    return (
        <div className='dashboard row col-12'>
            <div className='col-8 bg-white pr-5'>
                <StatusEmployee />
                <StatusGroup />
            </div>
            <div className='col-4'>
                <StatusEvent />
            </div>
        </div>
    )
}
