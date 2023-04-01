import React from 'react'
import { Col, Row } from 'antd'
import { useSelector } from 'react-redux'

export default function ModalDayOffCalendar() {
    const userState = useSelector((state) => state.userReducer)
    return (
        <>
            <div className='modal-calendar-header'></div>
            <div className='modal-calendar-content'>
                <Row gutter={24} >
                    <Col xs={24} sm={24} md={8} lg={8} className='fullday-list'>
                        <table className="table table-bordered">
                            <thead>
                                <tr className='bg-success'>
                                    <th colSpan="2">Full Day</th>
                                </tr>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Department</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userState.detailDayOff.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                {(item.typeDayOff === 'full day') &&
                                                    <>
                                                        <td>{item.name}</td>
                                                        <td>{item.department}</td>
                                                    </>
                                                }
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} className='halfday-list'>
                        <table className="table table-bordered">
                            <thead>
                                <tr className='bg-warning'>
                                    <th colSpan="3">Half Day</th>
                                </tr>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userState.detailDayOff.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                {(item.typeDayOff === 'half day') &&
                                                    <>
                                                        <td>{item.name}</td>
                                                        <td>{item.department}</td>
                                                        <td>{item.detail}</td>
                                                    </>
                                                }
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8} className='nonwork-list'>
                        <table className="table table-bordered">
                            <thead>
                                <tr className='bg-danger'>
                                    <th colSpan="3">Non-Work</th>
                                </tr>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Type</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userState.detailDayOff.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                {(item.typeDayOff === 'non-work') &&
                                                    <>
                                                        <td>{item.name}</td>
                                                        <td>{item.department}</td>
                                                        <td>{item.detail}</td>
                                                    </>
                                                }
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </div>
        </>
    )
}
