import React from 'react'
import { Col, Row } from 'antd'

export default function FooterContent() {
    return (
        <div className='footer'>
            <Row className='pt-3'>
                <Col xs={24} sm={16} md={16} lg={16}>
                    <p style={{marginLeft:'30px'}}>© <a className="border-bottom" href="#">2022 WorldCraft Logistics LLC</a>, All Rights Reserved.</p>
                </Col>
                <Col xs={24} sm={8} md={8} lg={8} className='text-right'>
                    <ul className='footer-social' style={{ display: 'inline-flex' }}>
                        <li style={{ marginRight: '50px' }}><a href="#"><i className='fab fa-facebook-f'></i></a></li>
                        <li><a href="#"><i className='fab fa-linkedin-in'></i></a></li>
                        <li><a href="#"><i className='fab fa-youtube'></i></a></li>
                    </ul>
                </Col>
            </Row>
        </div>

    )
}
