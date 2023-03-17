import React, { useState } from 'react'
import { Layout, Menu, Image, Space, notification, Avatar } from "antd";
import Icon from "@mdi/react";
import { mdiAccount, mdiAccountCash, mdiFileEdit, mdiClockTimeFour, mdiTicketAccount, mdiCalendarMonth, mdiAccountNetwork, mdiAccountSupervisor, mdiLogout } from "@mdi/js";
import { Outlet, useNavigate } from 'react-router-dom';
import { setUserInfor } from '../store/actions/user.action';
import { useDispatch } from 'react-redux';
import lg_logo from '../assets/imgs/Logo__001_no_bg.png'
import sm_logo from '../assets/imgs/Logo_no_bg.png'
import Header from './Header';

const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children, type, disabled) {
    return {
        key,
        icon,
        children,
        label,
        type,
        disabled
    };
}
const items1 = [
    getItem('PERSONAL___', null, <span>___</span>, null, null, true),
    getItem('Information', '/admin/personal_information', <Icon path={mdiAccount} size={1} />),
    getItem('Daily Task', '/tomorrow2', <Icon path={mdiFileEdit} size={1} />),
    getItem('Time Sheet', '/tomorrow3', <Icon path={mdiClockTimeFour} size={1} />),
    getItem('Payroll', '/tomorrow4', <Icon path={mdiAccountCash} size={1} />,),
    getItem('Ticket', '/tomorrow5', <Icon path={mdiTicketAccount} size={1} />,
        [
            getItem('Miss Punch', '/admin/ticket/miss-punch'),
            getItem('Time Off', '/admin/ticket/time-off'),
        ]),

    getItem('DEPARTMENT___', null, <span>___</span>, null, null, true),
    getItem('Calendar', '/tomorrow6', <Icon path={mdiCalendarMonth} size={1} />),
    getItem('TO-CoWorker', '/tomorrow7', <Icon path={mdiAccountNetwork} size={1} />),
    getItem('Manager', '/tomorrow8', <Icon path={mdiAccountSupervisor} size={1} />),

    getItem('GROUP___', null, <span>___</span>, null, null, true),
    getItem('Time Sheet', '/tomorrow9', <Icon path={mdiAccountSupervisor} size={1} />),
    getItem('Daily Task', '/tomorrow10', <Icon path={mdiAccountSupervisor} size={1} />),

    getItem(<hr color='white' />, null, null, null, null, true),
    getItem('Log Out', 'logOut', <Icon path={mdiLogout} size={1} />),



]
const item2 = [
    // getItem('Welcome !', null, <Avatar src="https://admin.worldcraftlogistics.net/img/Avatar/hanhT__2023-03-04-01-23-53-990.jpg" width={100} />,
    //     [
    //         getItem('Change Avatar', null, <i className="fa-solid fa-truck"></i>),
    //         getItem('Change Password', null, <i className="fa-solid fa-equals"></i>),
    //         getItem('Support', null, <i className="fa-solid fa-paste"></i>),
    //     ]
    // ),
    getItem('HR Menu', null, <></>, [
        getItem('User Management', null, '---',),
        getItem('TimeSheet', null, '---',),
        getItem('Injury Report', null, '---',),
        getItem('Emp Starting Infor', null, '---',),
        getItem('Employee Complaint', null, '---',),
        getItem('Incident Report', null, '---',),
        getItem('Lunch Correction', null, '---',),
        getItem('Miss Punch', null, '---',),
        getItem('Time Off', null, '---',),
        getItem('Pay Roll', null, '---',),
        getItem('VTO Request', null, '---',),
        getItem('Notificate', null, '---',),
        getItem('View Log', null, '---',),
    ]),


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
                <Sider
                    collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
                    collapsible={false}
                    onMouseEnter={() => setCollapsed(false)}
                    onMouseLeave={() => setCollapsed(true)}
                >
                    <div className="logo" >
                        <a href="/">
                            <div className='sideBar-icon-sm' >
                                <img src={sm_logo} height={50} alt="" />
                            </div>
                            <div className='sideBar-icon-lg '>
                                <img src={lg_logo} height={50} alt="" />
                            </div>
                            {/* } */}
                        </a>
                    </div>
                    <Menu
                        mode="inline"
                        theme="dark"
                        // inlineCollapsed={collapsed}
                        style={{ backgroundColor: 'transparent' }}
                        items={items1}
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
                <Layout className="site-layout w-100"
                    style={{ paddingLeft: '80px' }}
                >
                    <Space direction='horizontal' align='start' className='special_menu'>

                        <Content
                            style={{
                                margin: '0 0.5rem',
                            }}
                        >
                            <Space direction='vertical'>
                                {/* <Breadcrumb
                                    style={{
                                        margin: '16px 0',
                                    }}
                                >
                                    <Breadcrumb.Item>{ }</Breadcrumb.Item>
                                    <Breadcrumb.Item>{ }</Breadcrumb.Item>
                                </Breadcrumb> */}
                                <Space direction='horizontal'>
                                    {/* <Menu
                                        mode="inline"
                                        items={item2}
                                        theme="light"
                                        className='special-menu w-20'
                                    >
                                    </Menu> */}
                                    <Header />
                                </Space>
                                <Outlet />
                                <Footer>
                                    Ant Design ©2018 Created by Ant UED
                                </Footer>
                            </Space>
                        </Content>
                    </Space>

                </Layout>
            </Layout>
        </div>
    )
}
