import React from 'react'
import Icon from '@mdi/react';
import { mdiAccountGroup, mdiAccessPointOff, mdiThumbUp, mdiThumbDown, mdiClockAlert } from '@mdi/js';
import { Space, Card, Col, Row, Avatar } from 'antd'
import './index.scss';


export default function StatusEmployee() {
    return (
        <Space direction='vertical' style={{ display: 'flex' }}>
            <Row gutter={[8, 8]} style={{ backgroundColor: '#fff' }}>
                <Col xs={12} sm={6} md={6} lg={6}
                    className="gutter-row" span={3} >
                    <Card style={{ color: '#096481', backgroundColor: 'transparent' }} bordered={false} className='text-center' >
                        <div className='overlayStatus' style={{ border: '3px solid #096481' }}>
                            <div className='contentStatus'>
                                <Icon path={mdiAccountGroup} size={2} />
                                <div className='contentStatus_child'>
                                    <p className='contentStatus_child_num'>25</p>
                                    <p className='contentStatus_child_text'>Employees</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}
                    className="gutter-row" span={3} >
                    <Card style={{ color: '#ed7d31', backgroundColor: 'transparent' }} bordered={false} className='text-center' >
                        <div className='overlayStatus' style={{ border: '3px solid #ed7d31' }}>
                            <div className='contentStatus'>
                                <Icon path={mdiThumbUp} size={2} />
                                <div className='contentStatus_child'>
                                    <p className='contentStatus_child_num'>25</p>
                                    <p className='contentStatus_child_text'>Employees</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}
                    className="gutter-row" span={3} >
                    <Card style={{ color: '#70ac48', backgroundColor: 'transparent' }} bordered={false} className='text-center' >
                        <div className='overlayStatus' style={{ border: '3px solid #70ac48' }}>
                            <div className='contentStatus'>
                                <Icon path={mdiThumbDown} size={2} />
                                <div className='contentStatus_child'>
                                    <p className='contentStatus_child_num'>25</p>
                                    <p className='contentStatus_child_text'>Employees</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}
                    className="gutter-row" span={3} >
                    <Card style={{ color: '#16b7eb', backgroundColor: 'transparent' }} bordered={false} className='text-center' >
                        <div className='overlayStatus' style={{ border: '3px solid #16b7eb' }}>
                            <div className='contentStatus'>
                                <Icon path={mdiClockAlert} size={2} />
                                <div className='contentStatus_child'>
                                    <p className='contentStatus_child_num'>25</p>
                                    <p className='contentStatus_child_text'>Employees</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>

            <Row gutter={[8, 8]} style={{ backgroundColor: '#fff' }}>
                <Col className="gutter-row" span={24} >
                    <Card style={{ color: '#096481', backgroundColor: 'transparent' }} bordered={false} className='text-center' >
                        <a data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="true" aria-controls="collapseExample1" class="btn btn-primary btn-block py-2 shadow-sm with-chevron">
                            <p class="d-flex align-items-center justify-content-between mb-0 px-3 py-2"><strong class="text-uppercase">Collapse Panel</strong><i class="fa fa-angle-down"></i></p>
                        </a>
                        <div id="collapseExample1" class="collapse shadow-sm show">
                            <div class="card">
                                <div class="card-body">
                                    <p class="font-italic mb-0 text-muted">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>

        </Space>
    )
}
