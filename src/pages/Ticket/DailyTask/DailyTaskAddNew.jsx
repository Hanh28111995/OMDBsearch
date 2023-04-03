import React, { useEffect, useState } from 'react'
import {
    Form,
    Select,
    DatePicker,
    Col,
    Row,
    Space,
    Input,
    Collapse,
    AutoComplete,
    Radio,
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
    const onChange1 = (value, dateString) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };
    const onOk = (value) => {
        console.log('onOk: ', value);
    };

    function handleChange(value) { console.log(`Selected ${value}`); }
    function handleBlur() { console.log('blur'); }
    function handleFocus() { console.log('focus'); }
    function handleSearch(value) { console.log('search:', value); }


    return (
        <Space direction='vertical' className='bg-form pb-5 w-100' >
            <Space direction='vertical' className='bg-form-header w-100'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h4>Create Task Today</h4>
                    </div>
                    <NavLink to='/admin/daily_task'>
                        <button className='btn back-btn'>
                            Back
                        </button>
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
                            placeholder="Enter Project Name"
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Task Name"
                            name="taskName"
                            placeholder="Enter Task Name"
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Priority" name="priority">
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
                        <Form.Item label="Task Type" name="taskType">
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
                            label="Original Estimate"
                            name="time_estimate"
                            placeholder=""
                        >
                            <InputNumber className='w-100' />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Row gutter={24}>
                            <Col xs={24} sm={24} md={12} lg={12} >
                                <Form.Item
                                    label="Time Spent"
                                    name="time_spent"
                                    placeholder=""
                                >
                                    <InputNumber className='w-100' />
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={12} >
                                <Form.Item
                                    label="Time Remain"
                                    name="time_remain"
                                    placeholder=""
                                >
                                    <InputNumber className='w-100' />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Col>





                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Space className='d-flex justify-content-end'>
                            <Button>Create</Button>
                        </Space>
                    </Col>
                </Row>
            </Form >
        </Space>

    )
}
