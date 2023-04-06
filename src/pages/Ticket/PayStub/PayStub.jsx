import React from 'react'
import { Space, Form, DatePicker, Button } from 'antd'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTitleHeader } from '../../../store/actions/user.action'

export default function PayStub(props) {
    const dispatch = useDispatch()
    const userState = useSelector((state) => state.userReducer)
    useEffect(() => {
        dispatch(setTitleHeader(props.title))
    }, [userState.titleHeader])

    return (
        <Space direction='vertical' className='bg-form pb-5 w-100' >
            <Space direction='vertical' className='bg-form-header w-100'>
                <div className='d-flex justify-content-between'>
                    <div>
                        <h4>Pay Stub Check</h4>
                    </div>
                </div>

            </Space>
            <Form
                name='pay-stub-check'
                className='mt-4'
                labelCol={{ span: 24 }}
                wrapperCol={{ span: 24 }}
                layout="horizontal"
                disabled={props.deactive}
                style={{ maxWidth: '100%' }}
                autoComplete='off'
            >
                <div className='d-flex'>
                    <Form.Item label="" style={{ textAlign: 'left' }} name='paystub_time'  >
                        <DatePicker picker="month" placeholder='Select Month and Year' style={{width:'200px'}}/>
                    </Form.Item>

                    <Button className='search-btn' >Search</Button>
                </div>
            </Form >
        </Space>
    )
}
