import React, { useEffect } from 'react'
import {
    Form,
    Input,
    Radio,
    Select,
    DatePicker,
    Col,
    Row,
    Space,
} from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { setTitleHeader } from '../../store/actions/user.action';
import FormStandard from '../../modules/informationForm/FormStandard';
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

    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer)
    useEffect(() => {
        dispatch(setTitleHeader(props.title))
    }, [userState.titleHeader])

    return (
        <Space direction='vertical' className='bg-form pb-5 w-100'>
            <Space direction='vertical' className='bg-form-header w-100'>
                <div className='d-flex'>
                    <h4 >INFORMATION</h4>
                </div>
                <p>Your personal information must be authentic, any changes in your personal information, please notify HR of the company for correction.
                    We would like to ensure that we only use your personal information for the company's work, all acts of disclosing your personal information to the outside are illegal.</p>
            </Space>
            <FormStandard deactive={props.deactive}/>
        </Space>
    )
}
