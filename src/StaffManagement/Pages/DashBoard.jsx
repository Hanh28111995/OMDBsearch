import React from 'react'
import { Card, Col, Row, Avatar } from 'antd'
import './dashboard.scss'
import Icon from "@mdi/react";
import { mdiAccessPoint, mdiAccessPointOff } from "@mdi/js";
const { Meta } = Card;


export default function DashBoard() {
    return (
        <div className='dashboard'>
            <Row gutter={12} style={{width:'100%'}}>
                <Col span={6} sm={4} md={4} lg={2}>
                    <Card title="Card title" style={{ color: 'red' }} bordered={false} className='text-center'>
                        <Avatar src="https://admin.worldcraftlogistics.net/img/avatar/hanhT__2023-03-04-01-23-53-990.jpg" shape="circle" size={65} />
                        <div className='status_staft'>
                            <Icon path={mdiAccessPointOff} size={1} />
                            Off
                        </div>
                        <p>Ext:</p>
                    </Card>
                </Col>
                <Col span={6} sm={4} md={4} lg={2}>
                    <Card title="Card title" style={{ color: 'red' }} bordered={false} className='text-center'>
                        <Avatar src="https://admin.worldcraftlogistics.net/img/avatar/hanhT__2023-03-04-01-23-53-990.jpg" shape="circle" size={65} />
                        <div className='status_staft'>
                            <Icon path={mdiAccessPointOff} size={1} />
                            Off
                        </div>
                        <p>Ext:</p>
                    </Card>
                </Col>
                <Col span={6} sm={4} md={4} lg={2}>
                    <Card title="Card title" style={{ color: 'red' }} bordered={false} className='text-center'>
                        <Avatar src="https://admin.worldcraftlogistics.net/img/avatar/hanhT__2023-03-04-01-23-53-990.jpg" shape="circle" size={65} />
                        <div className='status_staft'>
                            <Icon path={mdiAccessPointOff} size={1} />
                            Off
                        </div>
                        <p>Ext:</p>
                    </Card>
                </Col>
                <Col span={6} sm={4} md={4} lg={2}>
                    <Card title="Card title" style={{ color: 'red' }} bordered={false} className='text-center'>
                        <Avatar src="https://admin.worldcraftlogistics.net/img/avatar/hanhT__2023-03-04-01-23-53-990.jpg" shape="circle" size={65} />
                        <div className='status_staft'>
                            <Icon path={mdiAccessPointOff} size={1} />
                            Off
                        </div>
                        <p>Ext:</p>
                    </Card>
                </Col>
                <Col span={6} sm={4} md={4} lg={2}>
                    <Card title="Card title" style={{ color: 'red' }} bordered={false} className='text-center'>
                        <Avatar src="https://admin.worldcraftlogistics.net/img/avatar/hanhT__2023-03-04-01-23-53-990.jpg" shape="circle" size={65} />
                        <div className='status_staft'>
                            <Icon path={mdiAccessPointOff} size={1} />
                            Off
                        </div>
                        <p>Ext:</p>
                    </Card>
                </Col>
                <Col span={6} sm={4} md={4} lg={2}>
                    <Card title="Card title" style={{ color: 'red' }} bordered={false} className='text-center'>
                        <Avatar src="https://admin.worldcraftlogistics.net/img/avatar/hanhT__2023-03-04-01-23-53-990.jpg" shape="circle" size={65} />
                        <div className='status_staft'>
                            <Icon path={mdiAccessPointOff} size={1} />
                            Off
                        </div>
                        <p>Ext:</p>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
