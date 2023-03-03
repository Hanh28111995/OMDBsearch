import React, { useState } from "react";
import { Button, Space, Form, Input, Checkbox } from "antd";
import "./login.scss";
import Icon from "@mdi/react";
import { mdiFormatQuoteClose, mdiFormatQuoteOpen } from "@mdi/js";

export default function Login() {
  const [forgetPass, setForgetPass] = useState(false);
  const [styleLogin, setstyleLogin] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="wrapper">
      <div className="login-bg">
        <div className="block-element text-center py-5 px-3">
          <Space align="start">
            <Space.Compact direction="vertical">
              <div className="form-login-1 p-3">
                <div>
                  <h4 className="mt-0">Sign In</h4>
                  <p className=" mb-4">Enter your user and password.</p>
                </div>
                <Form
                  name="basic1"
                  labelCol={{ span: 7 }}
                  initialValues={{
                    remember: false,
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
                    <a href="#" className="fpw">Forget the password</a>
                  </Space>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%" }}
                      className='btn-login'
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Form>

                <div
                  className="btn-fake"
                  onClick={() => setstyleLogin(!styleLogin)}
                >
                  Login by ID Card
                </div>
              </div>
            </Space.Compact>
            <Space.Compact direction="vertical">
              <div className="form-login-1 p-3">
                <div>
                  <h4 className="mt-0">Sign In</h4>
                  <p className=" mb-4">Enter your Card ID.</p>
                </div>
                <Form
                  name="basic2"
                  labelCol={{ span: 7 }}
                  initialValues={{
                    remember: false,
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
                    <Input.Password placeholder="Enter your ID"  autoComplete='new-password'/>
                  </Form.Item>

                  <Space align="horizontal" style={{ alignItems: 'baseline' }}>
                    <Form.Item name="remember" valuePropName="checked">
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <a href="#" className="fpw">Forget the password</a>
                  </Space>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{
                        width: "100%", marginTop: "57px",
                      }}
                      className='btn-login'
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Form>
                <div
                  className="btn-fake"
                  onClick={() => setstyleLogin(!styleLogin)}
                >
                  Login by User
                </div>
              </div>
            </Space.Compact>
          </Space>

          {forgetPass &&
            <div className='fpw-banner'>
              <div>
                <h4 className="mt-0">Forgot Password</h4>
                <p className=" mb-4">Enter your user and email.</p>
              </div>
              <Form
                name="basic"
                labelCol={{ span: 5 }}
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
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                    className='btn-login'
                  >
                    CONFIRM
                  </Button>
                </Form.Item>
              </Form>

              <div
                className="btn-fake"
              >
                Back to Login
              </div>
            </div>
          }

          { !forgetPass &&
          <div className={`introduce-banner ${styleLogin ? "move" : ""} p-5`}>
            <div className="introduce-banner-content">
              <img
                src="https://admin.worldcraftlogistics.net/images/Logo__001_no_bg.png"
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
          }
        </div>

      </div>
    </div>
  );
}
