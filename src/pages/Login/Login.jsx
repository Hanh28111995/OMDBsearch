import React, { useState } from "react";
import { Button, Space, Form, Input, Checkbox } from "antd";
import Icon from "@mdi/react";
import { mdiFormatQuoteClose, mdiFormatQuoteOpen } from "@mdi/js";
import { useDispatch } from "react-redux";
import { setUserInfor } from "../../store/actions/user.action";
import { useNavigate } from "react-router-dom";
import  logo from '../../assets/imgs/Logo__001_no_bg.png'

export default function Login() {
  const [forgetPass, setForgetPass] = useState(false);
  const [styleLogin, setstyleLogin] = useState(false);
  const [disBTN, setDisBTN] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    console.log("Success:", values);
    if((values.username === "hanhT")&&(values.password === "0163H"))
    {
      localStorage.setItem("WLC_LOGIN", JSON.stringify(values));
      dispatch(setUserInfor(values));
      navigate('/admin')
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const loginmethod = () => {
    setDisBTN(true);
    setstyleLogin(!styleLogin);
    setTimeout(() => {
      setDisBTN(false);
    }, 800);
  }
  return (
    <div className="wrapper">
      <div className="login-bg">
        <div className="block-element text-center py-5 px-3">
          <Space align="start">

            <Space.Compact direction="vertical">
              {
                !forgetPass
                  ? (<div className={`form-login-1 ${styleLogin ? "hide" : ""}  p-3`}>
                    <div>
                      <h4 className="mt-0">Sign In</h4>
                      <p className=" mb-4">Enter your user and password.</p>
                    </div>
                    <Form
                      disabled={disBTN}
                      name="basic1"
                      labelCol={{ span: 7 }}
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input placeholder="Enter your user" autoComplete="off" />
                      </Form.Item>

                      <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                        ]}
                      >
                        <Input.Password placeholder="Enter your password" autoComplete='new-password' />
                      </Form.Item>
                      <Space align="horizontal" style={{ alignItems: 'baseline' }}>
                        <Form.Item name="remember" valuePropName="checked">
                          <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <p  className="fpw" onClick={() => setForgetPass(!forgetPass)}>Forget the password</p>
                      </Space>

                      <Form.Item>
                        <Button
                          type="primary"
                          htmlType="submit"
                          className='btn-login'
                          block
                        >
                          Login
                        </Button>
                      </Form.Item>
                    </Form>

                    <div
                      className="btn-fake"
                      onClick={() => loginmethod()}
                    >
                      Login by ID Card
                    </div>
                  </div>)
                  : (<div className='fpw-banner p-3'>
                    <div>
                      <h4 className="mt-0">Forgot Password</h4>
                      <p className=" mb-4">Enter your user and email.</p>
                    </div>
                    <Form
                      name="basic3"
                      labelCol={{ span: 7 }}
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Form.Item
                        label="Username"
                        name="username_fwb"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input placeholder="Enter your username" />
                      </Form.Item>

                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                          {
                            type: 'email',
                            message: 'The input is not valid Email!',
                          },
                          {
                            required: true,
                            message: 'Please input your E-mail!',
                          },
                        ]}
                      >
                        <Input placeholder="Enter your email" />
                      </Form.Item>

                      <Form.Item>
                        <Button
                          block
                          type="primary"
                          htmlType="submit"
                          className='btn-login'
                          style={{marginTop:'55px'}}
                        >
                          CONFIRM
                        </Button>
                      </Form.Item>
                    </Form>

                    <div
                      className="btn-fake"
                      onClick={() => setForgetPass(false)}
                    >
                      Back to Login
                    </div>
                  </div>)
              }
            </Space.Compact>
            <Space.Compact direction="vertical">
              {
                !forgetPass
                  ? (<div className={`form-login-2 ${!styleLogin ? "hide" : ""} p-3`}>
                    <div>
                      <h4 className="mt-0">Sign In</h4>
                      <p className=" mb-4">Enter your Card ID.</p>
                    </div>
                    <Form
                      disabled={disBTN}
                      name="basic2"
                      labelCol={{ span: 7 }}
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Form.Item
                        label="Card ID"
                        name="ID"
                        rules={[
                          {
                            required: true,
                            message: "Please input your ID!",
                          },
                        ]}
                      >
                        <Input.Password placeholder="Enter your ID" autoComplete='new-password' />
                      </Form.Item>

                      <Space align="horizontal" style={{ alignItems: 'baseline' }}>
                        <Form.Item name="remember" valuePropName="checked">
                          <Checkbox className="text-light">Remember me</Checkbox>
                        </Form.Item>
                        <p  className="fpw" onClick={() => setForgetPass(!forgetPass)}>Forget the password</p>
                      </Space>
                      <Form.Item>
                        <Button
                          block
                          className='btn-login'
                          type="primary"
                          htmlType="submit"
                          style={{
                            marginTop: "55px",
                          }}
                        >
                          Login
                        </Button>
                      </Form.Item>
                    </Form>
                    <div
                      className="btn-fake"
                      onClick={() => loginmethod()}
                    >
                      Login by User
                    </div>
                  </div>)
                  : (<div className='fpw-banner p-3'>
                    <div>
                      <h4 className="mt-0">Forgot Password</h4>
                      <p className=" mb-4">Enter your user and email.</p>
                    </div>
                    <Form
                     name="basic4"
                     labelCol={{ span: 7 }}
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Form.Item
                        label="Username"
                        name="username_fwb"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input placeholder="Enter your username" />
                      </Form.Item>

                      <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                          {
                            type: 'email',
                            message: 'The input is not valid Email!',
                          },
                          {
                            required: true,
                            message: 'Please input your E-mail!',
                          },
                        ]}
                      >
                        <Input placeholder="Enter your email" />
                      </Form.Item>

                      <Form.Item>
                        <Button
                          block
                          type="primary"
                          htmlType="submit"
                          className='btn-login'
                          style={{marginTop:'55px'}}
                        >
                          CONFIRM
                        </Button>
                      </Form.Item>
                    </Form>

                    <div
                      className="btn-fake"
                      onClick={() => setForgetPass(false)}
                    >
                      Back to Login
                    </div>
                  </div>)

              }
            </Space.Compact>
          </Space>


          <div className={`introduce-banner ${styleLogin ? "move" : ""} p-5`}>
            <div className="introduce-banner-content">
              <img
                src={logo}
                alt="logo worldcraftlogistics"
              />
              <h2 className="mt-4 mb-3">WorldCraft Logistics CMS</h2>
              <p>
                <Icon
                  path={mdiFormatQuoteOpen}
                  size={0.5}
                  style={{ marginBottom: "10px" }}
                />
                Content Management System for logistics staff{" "}
                <Icon
                  path={mdiFormatQuoteClose}
                  size={0.5}
                  style={{ marginBottom: "10px" }}
                />
              </p>
              <p>Welcome!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




