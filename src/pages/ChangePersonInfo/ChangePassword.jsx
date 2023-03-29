import React, { useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { setTitleHeader } from '../../store/actions/user.action';

export default function ChangePassword(props) {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer)
    useEffect(() => {
        dispatch(setTitleHeader(props.title))
    }, [userState.titleHeader])

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='change-passwword bg-form'>
            <h4>NOTE</h4>
            <p>Your personal information must be authentic, any changes in your personal information, please notify HR of the company for correction.
                We would like to ensure that we only use your personal information for the company's work, all acts of disclosing your personal information to the outside are illegal.
                Read more about company policy at: Policy.</p>
            <div className='d-flex justify-content-center'>
                <Form
                    name="changePw"
                    labelCol={{ span: 24 }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Current Password"
                        name="current_password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password placeholder="Enter your current password" autoComplete='new-password' />
                    </Form.Item>
                    <Form.Item
                        label="New Password"
                        name="new_password"
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                        ]}
                    >
                        <Input.Password placeholder="Enter your new password" autoComplete='new-password' />
                    </Form.Item>
                    <Form.Item
                        label="Repeat New Password"
                        name="repeat_new_password"
                        rules={[
                            {
                                required: true,
                                message: "Please repeat your new password!",
                            },
                        ]}
                    >
                        <Input.Password placeholder="Repeat your new password" autoComplete='new-password' />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            type="primary"
                            htmlType="submit"
                            className='btn-login'
                            block
                        >
                            Change
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
