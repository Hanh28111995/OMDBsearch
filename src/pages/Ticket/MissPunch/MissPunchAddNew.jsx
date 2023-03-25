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
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setTitleHeader } from '../../../store/actions/user.action';
import { NavLink } from 'react-router-dom';

const { Option } = Select;
const { TextArea } = Input;
const { Panel } = Collapse;

export default function MissPunchAddNew(props) {
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
        <Space direction='vertical' className='bg-form pb-5' >
            <Space direction='vertical' className='bg-form-header w-100'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h4>Create New Miss Punch</h4>
                    </div>
                    <NavLink to='/admin/ticket/miss-punch'>
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

                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item label="Location :" style={{ textAlign: 'left' }} labelCol={{ span: 3 }} name='location' >
                            <Radio.Group>
                                <Radio value="MLK1"> MLK1 </Radio>
                                <Radio value="CTR1"> CTR1 </Radio>
                                <Radio value="LML1"> LML1 </Radio>
                                <Radio value="VN"> VN </Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Punch In" name="punchin">
                            <DatePicker
                                className='w-100'
                                placeholder='Select Date and Time'
                                showTime={{
                                    format: 'hh:mm A',
                                }}
                                format='MM-DD-YYYY  hh:mm A'
                                onChange={onChange1}
                                onOk={onOk} />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Lunch In" name="lunchin">
                            <DatePicker
                                className='w-100'
                                placeholder='Select Date and Time'
                                showTime={{
                                    format: 'hh:mm A',
                                }}
                                format='MM-DD-YYYY  hh:mm A'
                                onChange={onChange1}
                                onOk={onOk} />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Punch Out" name="punchout">
                            <DatePicker
                                className='w-100'
                                placeholder='Select Date and Time'
                                showTime={{
                                    format: 'hh:mm A',
                                }}
                                format='MM-DD-YYYY  hh:mm A'
                                onChange={onChange1}
                                onOk={onOk} />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Lunch Out" name="Lunchout">
                            <DatePicker
                                className='w-100'
                                placeholder='Select Date and Time'
                                showTime={{
                                    format: 'hh:mm A',
                                }}
                                format='MM-DD-YYYY  hh:mm A'
                                onChange={onChange1}
                                onOk={onOk} />
                        </Form.Item>
                    </Col>

                    {/* <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item label="Manager" name="manager">
                            <Select
                                showSearch style={{ width: 200 }}
                                placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onBlur={handleBlur}
                                onSearch={handleSearch}
                                filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0} >
                                <Option value="jack">Jack</Option>
                                <Option value="lucy">Lucy</Option>
                                <Option value="tom">Tom</Option>
                            </Select>,
                        </Form.Item>
                    </Col> */}

                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item label="Other Reason" name="reason">
                            <TextArea rows={4} placeholder="Other Reason" maxLength={6} />
                        </Form.Item>
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
