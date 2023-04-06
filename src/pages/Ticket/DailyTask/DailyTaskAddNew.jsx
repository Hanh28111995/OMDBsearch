import React, { useEffect, useState } from 'react'
import {
    Form,
    Select,
    Col,
    Row,
    Space,
    Input,
    Button,
    InputNumber,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setTitleHeader } from '../../../store/actions/user.action';
import { NavLink } from 'react-router-dom';

const { Option } = Select;
const { TextArea } = Input;

export default function DailyTaskAddNew(props) {
    const [collapsible, setCollapsible] = useState(false)
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer)
    useEffect(() => {
        dispatch(setTitleHeader(props.title))
    }, [userState.titleHeader])

    const onOk = (value) => {
        console.log('onOk: ', value);
    };

    function handleChange(value) { console.log(`Selected ${value}`); }

    return (
        <Space direction='vertical' className='bg-form pb-5 w-100' >
            <Space direction='vertical' className='bg-form-header w-100'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h4>Create Task Today</h4>
                    </div>
                    <NavLink to='/admin/daily_task'>
                        <Button className='back-btn'>
                            Back
                        </Button>
                    </NavLink>
                </div>

            </Space>
            <Form
                name='new-miss-punchs'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                layout="horizontal"
                disabled={props.deactive}
                style={{ maxWidth: '100%' }}
                autoComplete='off'
            >
                <Row gutter={24}>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Project Name"
                            name="pjname"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input project name!",
                                },
                            ]}
                        >
                            <Input placeholder="Enter Project Name" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Task Name"
                            name="taskName"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input task name!",
                                },
                            ]}
                        >
                            <Input placeholder="Enter Task Name" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Priority"
                            name="priority"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select priority!",
                                },
                            ]}>
                            <Select
                                className='w-100'
                                placeholder="Select Priority"
                                onChange={handleChange}
                            >
                                <Option value='High'>High</Option>
                                <Option value='Medium'>Medium</Option>
                                <Option value='Low'>Low</Option>
                                <Option value='Lowest'>Lowest</Option>
                            </Select>

                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Task Type"
                            name="taskType"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select Task Type!",
                                },
                            ]}>
                            <Select
                                className='w-100'
                                placeholder="Select Task Type"
                                onChange={handleChange}
                            >
                                <Option value='Bug'>Bug</Option>
                                <Option value='New Task'>New Task</Option>
                            </Select>

                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Original Estimate (hour)"
                            name="time_estimate"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input Original Estimate!",
                                }
                            ]}
                        >
                            <InputNumber type='number' className='w-100' placeholder="Select Original Estimate" />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Row gutter={24}>
                            <Col xs={24} sm={24} md={12} lg={12} >
                                <Form.Item
                                    label="Time Spent"
                                    name="time_spent"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input Time Spent!",
                                        }
                                    ]}
                                >
                                    <InputNumber type='number' className='w-100' placeholder="Select Time Spent" />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} >
                                <Form.Item
                                    label="Time Remain"
                                    name="time_remain"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input Time Remain!",
                                        }
                                    ]}
                                >
                                    <InputNumber type='number' className='w-100' placeholder="Select Time Remain" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>





                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Space className='d-flex justify-content-end'>
                            <Button htmlType="submit" className='create_new_btn'>Submit</Button>
                        </Space>
                    </Col>
                </Row>
            </Form >
        </Space>

    )
}
