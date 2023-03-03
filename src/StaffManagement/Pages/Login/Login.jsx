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
        <div className="block-element text-center">
          <Space align="start">
            <Space.Compact direction="vertical">
              <div className="form-login-1 p-3">
                <div>
                  <div class="auth-brand text-center text-lg-start"></div>
                  <h4 class="mt-0">Sign In</h4>
                  <p class=" mb-4">Enter your user and password.</p>
                </div>
                <Form
                  name="basic"
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
                    <Input placeholder="Enter your user" />
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
                    <Input.Password placeholder="Enter your password" />
                  </Form.Item>

                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                    <a href="">Forget the password</a>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{ width: "100%", backgroundColor: "yellow" }}
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Form>

                <div
                  class="btn-fake"
                  onClick={() => setstyleLogin(!styleLogin)}
                >
                  Login by ID Card
                </div>
              </div>
            </Space.Compact>
            <Space.Compact direction="vertical">
              <div className="form-login-1 p-3">
                <div>
                  <div class="auth-brand text-center text-lg-start"></div>
                  <h4 class="mt-0">Sign In</h4>
                  <p class=" mb-4">Enter your Card ID.</p>
                </div>
                <Form
                  name="basic"
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
                    <Input.Password />
                  </Form.Item>

                  <Form.Item name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                    <a href="">Forget the password</a>
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      style={{
                        width: "100%",
                        backgroundColor: "yellow",
                        marginTop: "50px",
                      }}
                    >
                      Login
                    </Button>
                  </Form.Item>
                </Form>
                <div
                  class="btn-fake"
                  onClick={() => setstyleLogin(!styleLogin)}
                >
                  Login by User
                </div>
              </div>
            </Space.Compact>
          </Space>
          <div className={`introduce-banner ${styleLogin ? "move" : ""}`}>
            <img
              src="https://admin.worldcraftlogistics.net/images/Logo__001.png"
              alt="logo worldcraftlogistics"
            />
            <h2 class="mb-3">WorldCraft Logistics CMS</h2>
            <p class="lead">
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
  );
}
