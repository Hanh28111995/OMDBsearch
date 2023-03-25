import React from 'react'
import {
    Row,
    Col,
    Avatar
}
    from 'antd'
import logo from '../../../src/assets/imgs/Logo_no_bg.png'
export default function PanelContent() {
    return (
        <Row gutter={24} >
            <Col xs={24} sm={12} md={8} lg={4} xl={3}>
                <div className='card pt-2'>
                    <Avatar src={logo} size={64} alt="user avatar" className='m-auto img-fluid' />
                    <div className='card-body p-1'>
                        <p>Hanh Tran</p>
                        <p>Front End Dev</p>
                    </div>
                    <div className='onl_status text-primary' style={{ position: 'absolute', top: '1%', left: '2%' }}>
                        <i className="fa-regular fa-circle-up"></i>
                    </div>
                </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4} xl={3}>
                <div className='card pt-2'>
                    <Avatar src={logo} size={64} alt="user avatar" className='m-auto' />
                    <div className='card-body p-1'>
                        <p>Hanh Tran</p>
                        <p>Front End Dev</p>
                    </div>
                    <div className='onl_status text-danger ' style={{ position: 'absolute', top: '1%', left: '2%' }}>
                        <i className="fa-regular fa-circle-down"></i>
                    </div>
                </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4} xl={3}>
                <div className='card pt-2'>
                    <Avatar src={logo} size={64} alt="user avatar" className='m-auto' />
                    <div className='card-body p-1'>
                        <p>Hanh Tran</p>
                        <p>Front End Dev</p>
                    </div>
                    <div className='onl_status text-muted' style={{ position: 'absolute', top: '1%', left: '2%' }}>
                        <i className="fa-regular fa-circle-xmark"></i>
                    </div>
                </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4} xl={3}>
                <div className='card pt-2'>
                    <Avatar src={logo} size={64} alt="user avatar" className='m-auto' />
                    <div className='card-body p-1'>
                        <p>Hanh Tran</p>
                        <p>Front End Dev</p>
                    </div>
                    <div className='onl_status text-primary' style={{ position: 'absolute', top: '1%', left: '2%' }}>
                        <i className="fa-regular fa-circle-up"></i>
                    </div>
                </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4} xl={3}>
                <div className='card pt-2'>
                    <Avatar src={logo} size={64} alt="user avatar" className='m-auto' />
                    <div className='card-body p-1'>
                        <p>Hanh Tran</p>
                        <p>Front End Dev</p>
                    </div>
                    <div className='onl_status text-danger ' style={{ position: 'absolute', top: '1%', left: '2%' }}>
                        <i className="fa-regular fa-circle-down"></i>
                    </div>
                </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4} xl={3}>
                <div className='card pt-2'>
                    <Avatar src={logo} size={64} alt="user avatar" className='m-auto' />
                    <div className='card-body p-1'>
                        <p>Hanh Tran</p>
                        <p>Front End Dev</p>
                    </div>
                    <div className='onl_status text-primary' style={{ position: 'absolute', top: '1%', left: '2%' }}>
                        <i className="fa-regular fa-circle-up"></i>
                    </div>
                </div>
            </Col>
            <Col xs={24} sm={12} md={8} lg={4} xl={3}>
                <div className='card pt-2'>
                    <Avatar src={logo} size={64} alt="user avatar" className='m-auto' />
                    <div className='card-body p-1'>
                        <p>Hanh Tran</p>
                        <p>Front End Dev</p>
                    </div>
                    <div className='onl_status text-danger ' style={{ position: 'absolute', top: '1%', left: '2%' }}>
                        <i className="fa-regular fa-circle-down"></i>
                    </div>
                </div>
            </Col>

        </Row>
    )
}
