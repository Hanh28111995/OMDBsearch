import { InputNumber, Space, Form, Row, Col, Input, Select, Radio, DatePicker, Button, Modal } from 'antd'
import React from 'react'
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { data_user_detail, data_user_detail_default } from '../../../constants/detailUser'
import FormStandard from '../../../modules/informationForm/FormStandard';


export default function CreateNewInforUser(props) {
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
        <Space direction='vertical' className='bg-form pb-5'>
            <Space direction='vertical' className='bg-form-header w-100'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h4>{props.title}  {param.username} </h4>
                    </div>
                    <NavLink to='/admin/hr/user-management'>
                        <Button className='back-btn'>
                            Back
                        </Button>
                    </NavLink>
                </div>
            </Space>
            <FormStandard deactive={props.deactive}/>
        </Space>
    )
}
