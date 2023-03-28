import React from 'react'
import { Col, Row } from 'antd'

export default function ModalDayOffCalendar() {
    return (
        <>
            <div className='modal-calendar-header'></div>
            <div className='modal-calendar-content'>
                <Row gutter={24} >
                    <Col xs={24} sm={24} md={8} lg={8} className='fullday-list'>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th colSpan="2">Full Day</th>
                                </tr>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Department</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Khanh Nguyen</td>
                                    <td>IT</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} className='halfday-list'>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th colSpan="3">Half Day</th>
                                </tr>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Khanh Nguyen</td>
                                    <td>IT</td>
                                    <td>Late Half Day</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} className='nonwork-list'>
                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th colSpan="3">Non-Work</th>
                                </tr>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Khanh Nguyen</td>
                                    <td>IT</td>
                                    <td>Late Half Day</td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </div>
        </>
    )
}
