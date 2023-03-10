import React, { useState } from 'react'
import { Breadcrumb, Layout, Menu, Image, Space, notification } from "antd";
import { LogoutOutlined, } from "@ant-design/icons";
import Icon from "@mdi/react";
import { mdiAccount, mdiAccountCash, mdiFileEdit, mdiClockTimeFour, mdiTicketAccount, mdiCalendarMonth, mdiAccountNetwork, mdiAccountSupervisor } from "@mdi/js";
import { Outlet, useNavigate } from 'react-router-dom';
import { setUserInfor } from '../store/actions/user.action';
import { useDispatch } from 'react-redux';
const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}
const items = [
    getItem('PERSONAL'),
    getItem('Information', '/admin/personal_information', <Icon path={mdiAccount} size={1} />),
    getItem('Daily Task', '/tomorrow2', <Icon path={mdiFileEdit} size={1} />),
    getItem('Time Sheet', '/tomorrow3', <Icon path={mdiClockTimeFour} size={1} />),
    getItem('Payroll', '/tomorrow4', <Icon path={mdiAccountCash} size={1} />),
    getItem('Ticket', '/tomorrow5', <Icon path={mdiTicketAccount} size={1} />, 
    [
        getItem('Miss Punch', '/admin/ticket/miss-punch'),
        getItem('Time Off', '/admin/ticket/time-off'),
    ]),
    getItem('DEPARTMENT'),
    getItem('Calendar', '/tomorrow6', <Icon path={mdiCalendarMonth} size={1} />),
    getItem('TO-CoWorker', '/tomorrow7', <Icon path={mdiAccountNetwork} size={1} />),
    getItem('Manager', '/tomorrow8', <Icon path={mdiAccountSupervisor} size={1} />),
    getItem('Log Out', 'logOut', <LogoutOutlined />),


    // getItem('User Management', '/project-management/user', <TeamOutlined />),
]


export default function MainLayout() {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("WLC_LOGIN");
        dispatch(setUserInfor(null));
        navigate('/login');
    }
    const [collapsed, setCollapsed] = useState(true);

    return (
        <div className='layOut_wrapper'>
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} collapsible>
                    <div className="logo" >
                        <a href="/">

                            {collapsed &&
                                <div className="sideBar-icon-sm">
                                    <img src="https://admin.worldcraftlogistics.net/images/Logo_no_bg.png" height={50} alt="" />
                                </div>
                            }
                            {!collapsed &&
                                <div className="sideBar-icon-lg">
                                    <img src="https://admin.worldcraftlogistics.net/images/Logo__001_no_bg.png" height={50} alt="" />
                                </div>
                            }
                        </a>
                    </div>
                    <Menu
                        mode="inline"
                        theme="dark"
                        // inlineCollapsed={collapsed}
                        style={{ backgroundColor: 'transparent' }}
                        items={items}
                        onClick={({ key }) => {
                            if (key === 'logOut') {
                                handleLogout();
                            }
                            else {
                                navigate(key)
                            }
                        }}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Space direction="vertical">
                        <Content
                            style={{
                                margin: '0 0.5rem',
                            }}
                        >
                            <Breadcrumb
                                style={{
                                    margin: '16px 0',
                                }}
                            >
                                <Breadcrumb.Item>{ }</Breadcrumb.Item>
                                <Breadcrumb.Item>{ }</Breadcrumb.Item>
                            </Breadcrumb>
                            <Outlet />
                            <Footer
                                style={{
                                    textAlign: 'center',
                                }}
                            >
                                Ant Design ©2018 Created by Ant UED
                            </Footer>
                        </Content>
                    </Space>

                </Layout>
            </Layout>
        </div>
    )
}
