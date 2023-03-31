import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setTitleHeader } from '../../../store/actions/user.action';
import { Form, Space, Col, Select, Input, Row, Button } from 'antd'
const { TextArea } = Input;

export default function TimeoffNote(props) {
    const dispatch = useDispatch()
    const userState = useSelector((state) => state.userReducer)
    const param = useParams();
    useEffect(() => {
        dispatch(setTitleHeader(props.title))
    }, [userState.titleHeader])

    return (
        <Space direction='vertical' className='bg-form pb-5 w-100' >
            <Space direction='vertical' className='bg-form-header w-100' >
                <div className='d-flex w-100'>
                    <h4 >TIME OFF NOTE - {param.name} - {param.id}</h4>
                </div>
            </Space>
            <Form
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                layout="horizontal"
                disabled={props.deactive}
                style={{ maxWidth: '100%' }}
                autoComplete='off'
            >
                <Row gutter={24}>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item label="HR Note" name="hr_note">
                            <TextArea rows={4} placeholder="Other Reason" maxLength={6} />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item label="Co-Wo Status" name="coworker_status">
                            <Select >
                                <Select.Option value="single">Pending</Select.Option>
                                <Select.Option value="mariage">Accept</Select.Option>
                                <Select.Option value="single">UnAccept</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item label="Manager Status" name="manager_status">
                            <Select >
                                <Select.Option value="single">Pending</Select.Option>
                                <Select.Option value="mariage">Accept</Select.Option>
                                <Select.Option value="single">UnAccept</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item label="HR Status" name="hr_status">
                            <Select >
                                <Select.Option value="single">Pending</Select.Option>
                                <Select.Option value="mariage">Accept</Select.Option>
                                <Select.Option value="single">UnAccept</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Space className='d-flex justify-content-end'>
                            <Button>Save</Button>
                        </Space>
                    </Col>
                </Row>
            </Form >
        </Space >
    )
}
