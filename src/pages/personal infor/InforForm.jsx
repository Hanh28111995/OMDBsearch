import React from 'react'
import {
    Form,
    Input,
    Radio,
    Select,
    DatePicker,
    Col,
    Row,
    Space,
    Button
} from 'antd';
const Dpm = ['IT', 'Sale', 'Warehouse', '-- Inventory', '-- Rework', '-- Shipping Clerk', '-- QC', '-- Front Operation', 'Accounting', 'Export', 'HR', 'Import', 'Transportation', 'Ecommerce', 'Other', 'CEO'];
const location = ['US-MLK', 'US-CTR', 'VN-NT', 'VN-HCM', 'US-RLD'];
const render = (x) => {
    return x.map((option, index) => (
        <Select.Option key={index} value={option}>{option}</Select.Option>
    ));
}

const renderedDpmObject = render(Dpm);

const renderedLocationObject = render(location);
const { RangePicker } = DatePicker;
const { TextArea } = Input;
export default function InforForm(props) {
    return (
        <Space direction='vertical' className='bg-form pb-5'>
            <Space direction='vertical' className='bg-form-header'>
                <div className='d-flex row col-12 '>
                    <div className='col-md-6 col-sm-12 p-0 '>
                        <h4 >INFORMATION</h4>
                    </div>
                    <div className='col-md-6 col-sm-12 text-right p-0'>
                        <Button type="primary">Injury Report</Button>
                    </div>

                </div>

                <p>Your personal information must be authentic, any changes in your personal information, please notify HR of the company for correction.
                    We would like to ensure that we only use your personal information for the company's work, all acts of disclosing your personal information to the outside are illegal.</p>
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

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Full Name"
                            name="fullname"
                            rules={[{ required: true, message: 'Please input your Full Name!' }]}
                        >
                            <Input autoComplete='new-password'/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Nick Name"
                            name="nickname"
                            rules={[{ required: true, message: 'Please input your Nick Name!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    type: 'email',
                                    message: 'The input is not valid E-mail!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                },
                            ]}
                        >
                            <Input autoComplete='new-password'/>
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Phone"
                            name="phone"
                            rules={[{ required: true, message: 'Please input your Phone!' }]}
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
                            label="Passport"
                            name="passport"
                            rules={[{ required: true, message: 'Please input your Passport!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Address"
                            name="address"
                            rules={[{ required: true, message: 'Please input your Address!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="ZipCode"
                            name="zipcode"
                            rules={[{ required: true, message: 'Please input your ZipCode!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Marital" name="marital">
                            <Select >
                                <Select.Option value="single">Single</Select.Option>
                                <Select.Option value="mariage">Mariage</Select.Option>
                            </Select>
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12}>
                        <Form.Item label="DatePicker" >
                            <DatePicker className='w-100' />
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

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Gender">
                            <Radio.Group>
                                <Radio value="male"> Male </Radio>
                                <Radio value="female"> Female </Radio>
                            </Radio.Group>
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
                        <Form.Item
                            label="Position"
                            name="position"
                            rules={[{ required: true, message: 'Please input your Position!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Vacation Hrs Avail"
                            name="vha"
                            rules={[{ required: true, message: 'Please input your Vacation Hrs Avail!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Contract"
                            name="contract"
                            rules={[{ required: true, message: 'Please input your Contract!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Sick Hrs Avail"
                            name="sha"
                            rules={[{ required: true, message: 'Please input your Sick Hrs Avail!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item label="Date Start">
                            <DatePicker className='w-100' />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="DKP"
                            name="dkp"
                            rules={[{ required: true, message: 'Please input your DKP!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                    <Col xs={24} sm={24} md={12} lg={12} >
                        <Form.Item
                            label="Note"
                            name="note"
                            rules={[{ required: true, message: 'Please input your Note!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Col>

                </Row>
            </Form >
        </Space>


        /* <Form.Item label="Select">
        <Select >
            <Select.Option value="demo">Demo</Select.Option>
        </Select>
    </Form.Item>
    <Form.Item label="TreeSelect">
        <TreeSelect 
            treeData={[
                { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
            ]}
        />
    </Form.Item>
    <Form.Item label="Cascader" >
        <Cascader
            options={[
                {
                    value: 'zhejiang',
                    label: 'Zhejiang',
                    children: [
                        {
                            value: 'hangzhou',
                            label: 'Hangzhou',
                        },
                    ],
                },
            ]}
        />
    </Form.Item>
    <Form.Item label="DatePicker">
        <DatePicker />
    </Form.Item>
    <Form.Item label="RangePicker">
        <RangePicker />
    </Form.Item>
    <Form.Item label="InputNumber">
        <InputNumber />
    </Form.Item>
    <Form.Item label="TextArea">
        <TextArea rows={4} />
    </Form.Item>
    <Form.Item label="Switch" valuePropName="checked">
        <Switch />
    </Form.Item> */



    )
}
