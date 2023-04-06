import React, { useEffect, useState } from 'react'
import {
    Form,
    Select,
    DatePicker,
    Col,
    Row,
    Space,
    Input,
    Button,
    Radio
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setTitleHeader } from '../../../store/actions/user.action';
import { NavLink } from 'react-router-dom';
import { data_default_day_off } from '../../../constants/defaultValueTimeOffForm';

const { TextArea } = Input;

export default function TimeOffAddNew(props) {
    const [form] = Form.useForm()
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

    const options = [];
    for (let i = 10; i < 36; i++) {
        options.push({
            value: i.toString(36) + i,
            label: i.toString(36) + i,
        });
    }
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    useEffect(() => {
        if (props.daySelected)
            form.resetFields()
        form.setFieldsValue({
            startDate: props.daySelected,
            // location: 'VN',
        })
        console.log('value props', props.daySelected)
    }, [props.daySelected])

    return (
        <Space direction='vertical' className='bg-form pb-5' >
            <Space direction='vertical' className='bg-form-header w-100'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h4>Create New Time Off</h4>
                    </div>
                    {
                        props.hideBtn &&
                        <NavLink to='/admin/ticket/time-off'>
                            <Button className='back-btn'>
                                Back
                            </Button>
                        </NavLink>
                    }
                </div>

            </Space>
            <Form
                name='new-time-off'
                form={form}
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                layout="horizontal"
                disabled={props.deactive}
                style={{ maxWidth: '100%' }}
                autoComplete='off'
                initialValues={data_default_day_off}
            >
                <Row gutter={24}>

                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item label="Location :"  labelCol={{ span: 4 }} name='location'
                            rules={[
                                {
                                    required: true,
                                    message: "Please select Location!",
                                },
                            ]}>
                            <Radio.Group  >
                                <Radio value="MLK1"> MLK1 </Radio>
                                <Radio value="CTR1"> CTR1 </Radio>
                                <Radio value="LML1"> LML1 </Radio>
                                <Radio value='VN'> VN </Radio>
                            </Radio.Group>
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Time Off Start" name="startDate"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select Time Off Start!",
                                },
                            ]}>
                            <DatePicker
                                className='w-100'
                                placeholder='Select Date'
                                format='MM-DD-YYYY'
                                onChange={onChange1}
                                onOk={onOk} />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Time Off End" name="endDate"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select Time Off End!",
                                },
                            ]}>
                            <DatePicker
                                className='w-100'
                                placeholder='Select Date'
                                format='MM-DD-YYYY'
                                onChange={onChange1}
                                onOk={onOk} />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Cover Worker" name="coverWorker"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select Cover Worker!",
                                },
                            ]}>
                            <Select
                                className='w-100'
                                placeholder="Select Your Co-Worker"
                                onChange={handleChange}
                                options={options}
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Manager" name="manager"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select Manager!",
                                },
                            ]}>

                            <Select
                                className='w-100'
                                placeholder="Select Your Manager"
                                onChange={handleChange}
                                options={options}
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Pay Type" name="paytype"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select Pay Type!",
                                },
                            ]}>
                            <Select
                                className='w-100'
                                placeholder="Select Pay Type"
                                onChange={handleChange}
                                options={options}
                            />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Shift Day" name="shiftday"
                            rules={[
                                {
                                    required: true,
                                    message: "Please select Shift day!",
                                },
                            ]}>
                            <Select
                                className='w-100'
                                placeholder="Select Shift Day"
                                onChange={handleChange}
                                options={options}
                            />
                        </Form.Item>
                    </Col>



                    <Col xs={24} sm={24} md={24} lg={24} >
                        <Form.Item label="Other Reason" name="reason"
                        >
                            <TextArea rows={4} placeholder="Other Reason" maxLength={6} />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={24} style={{ padding: '12px', justifyContent: 'right' }}>
                    <Form.Item>
                        <Button className='create_new_btn' htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Row>
            </Form >
        </Space >

    )
}
