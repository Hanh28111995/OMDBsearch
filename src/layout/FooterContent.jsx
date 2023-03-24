import React from 'react'
import { Space, Card, Col, Row } from 'antd'

export default function FooterContent() {
    return (
        <div className='container-fluid'>
            <Row gutter={24}>
                <Col xs={24} sm={12} md={12} lg={8}>
                    <div>
                        <h5>SERVICES</h5>
                        <ul className='footer-service'>
                            <li><a href="#">Air Freight Services</a></li>
                            <li><a href="#">Sea Freight Services</a></li>
                            <li><a href="#">Land Transportation Services</a></li>
                            <li><a href="#">Amazon FBA Preparation Center</a></li>
                            <li><a href="#">Warehouse And Small Packages</a></li>
                            <li><a href="#">Project And Oversize Cargo</a></li>
                        </ul>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={8}>
                    <div>
                        <h5>QUICK LINKS</h5>
                        <ul className='footer-quick-link'>
                            <li><a href="#"><i className="fa-solid fa-chevron-right mr-2"></i>Request A Rate</a></li>
                            <li><a href="#"><i className="fa-solid fa-chevron-right mr-2"></i>Contact Us</a></li>
                            <li><a href="#"><i className="fa-solid fa-chevron-right mr-2"></i>Hiring</a></li>
                            <li><a href="#"><i className="fa-solid fa-chevron-right mr-2"></i>Term Of Use</a></li>
                            <li><a href="#"><i className="fa-solid fa-chevron-right mr-2"></i>Privacy Policy</a></li>
                        </ul>
                    </div>
                </Col>
                <Col xs={24} sm={12} md={12} lg={8}>
                    <div>
                        <h5>CONTACT INFO</h5>
                        <ul className='footer-contact'>
                            <li><span>Worldcraft Logistics LLC</span></li>
                            <li><i className="fa fa-map-marker-alt mr-2"></i>MLK1: 8595 Milliken Ave, Suite#101, Rancho Cucamonga, CA 91730.</li>
                            <li><i className="fa fa-map-marker-alt mr-2"></i>CTR1: 9180 Center Ave, Suite#B, Rancho Cucamonga, CA 91730.</li>
                            <li><i className="fa fa-phone-alt mr-2"></i>TEL: (909) 632-1643</li>
                            <li><i className='fas fa-fax mr-2'></i>FAX: (909) 632-1208</li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <hr color='white'/>
            <Row gutter={24} className='pt-3'>
                <Col xs={24} sm={12} md={12} lg={8}>
                    <p>© <a class="border-bottom" href="#">2022 WorldCraft Logistics LLC</a>, All Rights Reserved.</p>
                </Col>
                <Col xs={24} sm={12} md={12} lg={8}></Col>
                <Col xs={24} sm={12} md={12} lg={8}>
                    <ul className='footer-social' style={{ display: 'inline-flex' }}>
                        <li><a href="#"><i className='fab fa-facebook-f'></i></a></li>
                        <li><a href="#"><i className='fab fa-linkedin-in'></i></a></li>
                        <li><a href="#"><i className='fab fa-youtube'></i></a></li>
                    </ul>
                </Col>
            </Row>
        </div>

    )
}
