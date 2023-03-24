import React from 'react'
import Icon from '@mdi/react';
import { mdiAccountGroup, mdiAccessPointOff, mdiThumbUp, mdiThumbDown, mdiClockAlert } from '@mdi/js';
import { Space, Card, Col, Row, Avatar } from 'antd'


export default function StatusEmployee() {
    return (
            <Row gutter={24} style={{ backgroundColor: '#fff' }} className='statusEmployee m-0'>
                <Col xs={12} sm={12} md={12} lg={6}
                    className="gutter-row" span={3} >
                    <Card style={{ color: '#096481', backgroundColor: 'transparent' }} bordered={false} className='text-center' >
                        <div className='overlayStatus' style={{ border: '3px solid #096481' }}>
                            <div className='contentStatus'>
                                <Icon path={mdiAccountGroup} size={1.5} />
                                <div className='contentStatus_child'>
                                    <p className='contentStatus_child_num'>25</p>
                                    <p className='contentStatus_child_text'>Employees</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}
                    className="gutter-row" span={3} >
                    <Card style={{ color: '#ed7d31', backgroundColor: 'transparent' }} bordered={false} className='text-center' >
                        <div className='overlayStatus' style={{ border: '3px solid #ed7d31' }}>
                            <div className='contentStatus'>
                                <Icon path={mdiThumbUp} size={1.5} />
                                <div className='contentStatus_child'>
                                    <p className='contentStatus_child_num'>25</p>
                                    <p className='contentStatus_child_text'>Present</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}
                    className="gutter-row" span={3} >
                    <Card style={{ color: '#70ac48', backgroundColor: 'transparent' }} bordered={false} className='text-center' >
                        <div className='overlayStatus' style={{ border: '3px solid #70ac48' }}>
                            <div className='contentStatus'>
                                <Icon path={mdiThumbDown} size={1.5} />
                                <div className='contentStatus_child'>
                                    <p className='contentStatus_child_num'>25</p>
                                    <p className='contentStatus_child_text'>Absent</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={12} lg={6}
                    className="gutter-row" span={3} >
                    <Card style={{ color: '#16b7eb', backgroundColor: 'transparent' }} bordered={false} className='text-center' >
                        <div className='overlayStatus' style={{ border: '3px solid #16b7eb' }}>
                            <div className='contentStatus'>
                                <Icon path={mdiClockAlert} size={1.5} />
                                <div className='contentStatus_child'>
                                    <p className='contentStatus_child_num'>25</p>
                                    <p className='contentStatus_child_text'>Latecomers</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
    )
}
