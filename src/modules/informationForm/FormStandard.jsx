import { InputNumber, Space, Form, Row, Col, Input, Select, Radio, DatePicker, Button, Upload, message } from 'antd'
import React from 'react'
import { UploadOutlined } from '@ant-design/icons';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data_user_detail, data_user_detail_default } from '../../constants/detailUser'
import { useState } from 'react';
const AliyunOSSUpload = ({ value, onChange }) => {
    const [OSSData, setOSSData] = useState();
    const mockGetOSSData = () => ({
        dir: 'user-dir/',
        expire: '1577811661',
        host: '//www.mocky.io/v2/5cc8019d300000980a055e76',
        accessId: 'c2hhb2RhaG9uZw==',
        policy: 'eGl4aWhhaGFrdWt1ZGFkYQ==',
        signature: 'ZGFob25nc2hhbw==',
    });
    const init = async () => {
        try {
            const result = await mockGetOSSData();
            setOSSData(result);
        } catch (error) {
            message.error(error);
        }
    };
    useEffect(() => {
        init();
    }, []);
    const handleChange = ({ fileList }) => {
        console.log('Aliyun OSS:', fileList);
        onChange?.([...fileList]);
    };
    const onRemove = (file) => {
        const files = (value || []).filter((v) => v.url !== file.url);
        if (onChange) {
            onChange(files);
        }
    };
    const getExtraData = (file) => ({
        key: file.url,
        OSSAccessKeyId: OSSData?.accessId,
        policy: OSSData?.policy,
        Signature: OSSData?.signature,
    });
    const beforeUpload = async (file) => {
        if (!OSSData) return false;
        const expire = Number(OSSData.expire) * 1000;
        if (expire < Date.now()) {
            await init();
        }
        const suffix = file.name.slice(file.name.lastIndexOf('.'));
        const filename = Date.now() + suffix;
        // @ts-ignore
        file.url = OSSData.dir + filename;
        return file;
    };
    const uploadProps = {
        name: 'file',
        fileList: value,
        action: OSSData?.host,
        onChange: handleChange,
        onRemove,
        data: getExtraData,
        beforeUpload,
    };
    return (
        <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
    );
};



export default function FormStandard(props) {
    const param = useParams()
    const [form] = Form.useForm()
    const Dpm = ['IT', 'Sale', 'Warehouse', '-- Inventory', '-- Rework', '-- Shipping Clerk', '-- QC', '-- Front Operation', 'Accounting', 'Export', 'HR', 'Import', 'Transportation', 'Ecommerce', 'Other', 'CEO'];
    const location = ['US-MLK', 'US-CTR', 'VN-NT', 'VN-HCM', 'US-RLD'];
    const render = (x) => {
        return x.map((option, index) => (
            <Select.Option key={index} value={option}>{option}</Select.Option>
        ));
    }
    const renderedDpmObject = render(Dpm);
    const renderedLocationObject = render(location);
    const option_department_roles =
        [
            {
                label: 'Role',
                options: [
                    {
                        label: 'Manager',
                        value: 'Manager',
                    },
                    {
                        label: 'Lead',
                        value: 'Lead',
                    },
                ],
            },
            {
                label: 'Department',
                options: [
                    {
                        label: 'Receiving',
                        value: 'Receiving',
                    },
                    {
                        label: "15'Minute",
                        value: "15'Minute",
                    },
                    {
                        label: 'VAS',
                        value: 'VAS',
                    },
                    {
                        label: 'CSR Shipping',
                        value: 'CSR Shipping',
                    },
                ],
            }]
    useEffect(() => {
        if (param.username)
            form.setFieldsValue({
                ...data_user_detail[0],
            })
    }, [param])



    return (
        <Form
            form={form}
            labelCol={{ span: 24 }}
            wrapperCol={{ span: 24 }}
            layout="horizontal"
            disabled={props.deactive}
            style={{ maxWidth: '100%' }}
            autoComplete='off'
            initialValues={data_user_detail_default}
        >
            <Row gutter={24}>
                {!props.deactive &&
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Photos" name="photos">
                            <AliyunOSSUpload />
                        </Form.Item>
                    </Col>
                }
                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item
                        label="User Name"
                        name="username"
                        // rules={[{ required: true, message: 'Please input your User Name!' }]}
                    >
                        <Input autoComplete='new-password' />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item
                        label="Full Name"
                        name="fullname"
                        // rules={[{ required: true, message: 'Please input your Full Name!' }]}
                    >
                        <Input autoComplete='new-password' />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item
                        label="Passport"
                        name="passport"
                        // rules={[{ required: true, message: 'Please input your Passport!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item
                        label="Nick Name"
                        name="nickname"
                        // rules={[{ required: true, message: 'Please input your Nick Name!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item
                        name="email"
                        label="Email"
                        // rules={[
                        //     {
                        //         type: 'email',
                        //         message: 'The input is not valid E-mail!',
                        //     },
                        //     {
                        //         required: true,
                        //         message: 'Please input your E-mail!',
                        //     },
                        // ]}
                    >
                        <Input autoComplete='new-password' />
                    </Form.Item>
                </Col>


                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item
                        label="Phone"
                        name="phone"
                        // rules={[{ required: true, message: 'Please input your Phone!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item
                        label="Address"
                        name="address"
                        // rules={[{ required: true, message: 'Please input your Address!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item
                        label="ZipCode"
                        name="zipcode"
                        // rules={[{ required: true, message: 'Please input your ZipCode!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>


                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item label="EEO" name="eeo">
                        <Select >
                            <Select.Option value="asian">Asian</Select.Option>
                            <Select.Option value="american">American</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item
                        label="Position"
                        name="position"
                        // rules={[{ required: true, message: 'Please input your Position!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item label="Location" name="location">
                        <Select>
                            {renderedLocationObject}
                        </Select>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item label="Gender" name='gender'>
                        <Radio.Group>
                            <Radio value="Male"> Male </Radio>
                            <Radio value="Female"> Female </Radio>
                        </Radio.Group>
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item label="Department" name="department" >
                        <Select
                            listHeight={700}
                        >
                            {renderedDpmObject}
                        </Select>
                    </Form.Item>
                </Col>
                {!props.deactive &&
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Confirm"
                            name="confirm"
                            // rules={[{ required: true, message: 'Please input your Confirm Number!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                }
                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item
                        label="Contract Type"
                        name="contract"
                        // rules={[{ required: true, message: 'Please select your Contract Type!' }]}
                    >
                        <Select >
                            <Select.Option value="fulltime">Full Time</Select.Option>
                            <Select.Option value="partime">Part Time</Select.Option>
                            <Select.Option value="probationary">Probationary</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>
                {!props.deactive &&
                    < Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Card Number"
                            name="cardnumber"
                            // rules={[{ required: true, message: 'Please input Card Number!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                }
                <Col xs={24} sm={24} md={12} lg={12}>
                    <Form.Item label="Birth Day" >
                        <DatePicker className='w-100' />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item
                        label="Marital"
                        name="marital"
                        // rules={[{ required: true, message: 'Please input Marital Status!' }]}
                    >
                        <Select >
                            <Select.Option value="single">Single</Select.Option>
                            <Select.Option value="mariage">Mariage</Select.Option>
                        </Select>
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12}>
                    <Form.Item
                        label="Date Start"
                        name='datestart'
                        // rules={[{ required: true, message: 'Please input Date Start!' }]}
                    >
                        <DatePicker className='w-100' />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item
                        label="Sick Hrs Avail"
                        name="sha"
                        // rules={[{ required: true, message: 'Please input your Sick Hrs Avail!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>

                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item
                        label="Vacation Hrs Avail"
                        name="vha"
                        // rules={[{ required: true, message: 'Please input your Vacation Hrs Avail!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item
                        label="DKP"
                        name="dkp"
                        // rules={[{ required: true, message: 'Please input your DKP!' }]}
                    >
                        <Input />
                    </Form.Item>
                </Col>
                {!props.deactive &&
                    <>
                        <Col xs={24} sm={24} md={12} lg={12} >
                            <Form.Item
                                label="Net Salary"
                                name="netsalary"
                                // rules={[{ required: true, message: 'Please input your DKP!' }]}
                            >
                                <InputNumber className='w-100' />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12} >
                            <Form.Item
                                label="Gross Salary"
                                name="grosssalary"
                                // rules={[{ required: true, message: 'Please input your DKP!' }]}
                            >
                                <InputNumber className='w-100' />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12} >
                            <Form.Item
                                label="Status"
                                name="status"
                                // rules={[{ required: true, message: 'Please Select Status!' }]}
                            >
                                <Select >
                                    <Select.Option value="Active">Active</Select.Option>
                                    <Select.Option value="Locked">Locked</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24} md={12} lg={12}>
                            <Form.Item
                                label="Date Created"
                                name="datecreated"
                                // rules={[{ required: true, message: 'Please Select Date Created!' }]}
                            >
                                <DatePicker className='w-100' />
                            </Form.Item>
                        </Col>
                    </>
                }
                <Col xs={24} sm={24} md={12} lg={12} >
                    <Form.Item
                        label="Department Roles"
                        name="departmentroles"
                        // rules={[{ required: true, message: 'Please Select Department Roles!' }]}
                    >
                        <Select options={option_department_roles}>
                        </Select>
                    </Form.Item>
                </Col>
                {!props.deactive &&
                    <>
                        <Col xs={24} sm={24} md={12} lg={12} >
                            <Form.Item
                                label="Note"
                                name="note"
                                // rules={[{ required: true, message: 'Please input your Note!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={24} md={24} lg={24} >
                            <Space className='d-flex justify-content-end'>
                                {(param.username) &&
                                    <Form.Item>
                                        <Button className='create_new_btn' htmlType="submit">
                                            Reset Password
                                        </Button>
                                    </Form.Item>
                                }
                                <Form.Item>
                                    <Button className='create_new_btn' htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Space>
                        </Col>
                    </>
                }
            </Row>
        </Form >
    )
}
