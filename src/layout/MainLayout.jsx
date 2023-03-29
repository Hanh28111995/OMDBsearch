import React, { useState } from 'react'
import { Layout, Menu, Image, Space, notification, Avatar } from "antd";
import Icon from "@mdi/react";
import { mdiAccount, mdiAccountCash, mdiFileEdit, mdiClockTimeFour, mdiTicketAccount, mdiCalendarMonth, mdiAccountNetwork, mdiAccountSupervisor, mdiLogout } from "@mdi/js";
import { Outlet, useNavigate } from 'react-router-dom';
import { setUserInfor } from '../store/actions/user.action';
import { useDispatch } from 'react-redux';
import lg_logo from '../assets/imgs/Logo__001_no_bg.png'
import sm_logo from '../assets/imgs/Logo_no_bg.png'
import Header from './HeaderContent';
import FooterContent from './FooterContent';
import HeaderContent from './HeaderContent';

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
    getItem('Time Sheet', '/admin/timesheet', <Icon path={mdiClockTimeFour} size={1} />),
    getItem('Payroll', '/tomorrow4', <Icon path={mdiAccountCash} size={1} />,),
    getItem('Ticket', '/tomorrow5', <Icon path={mdiTicketAccount} size={1} />,
        [
            getItem('Miss Punch', '/admin/ticket/miss-punch'),
            getItem('Time Off', '/admin/ticket/time-off'),
            getItem('Injury Report', '/admin/ticket/injury'),
            getItem('Incident Report', '/admin/ticket/incident'),

        ]),

    getItem('DEPARTMENT___', null, <span>___</span>, null, null, true),
    getItem('Calendar', '/admin/department/calendar', <Icon path={mdiCalendarMonth} size={1} />),
    getItem('TO-CoWorker', '/tomorrow7', <Icon path={mdiAccountNetwork} size={1} />),
    getItem('Manager', '/tomorrow8', <Icon path={mdiAccountSupervisor} size={1} />),

    getItem('GROUP___', null, <span>___</span>, null, null, true),
    getItem('Time Sheet', '/tomorrow9', <Icon path={mdiAccountSupervisor} size={1} />),
    getItem('Daily Task', '/tomorrow10', <Icon path={mdiAccountSupervisor} size={1} />),

    getItem(<hr color='white' />, null, null, null, null, true),
    getItem('Log Out', 'logOut', <Icon path={mdiLogout} size={1} />),
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
    const [overlayCover, setOverlayCover] = useState(true)
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
                            <div className='sideBar-icon-lg'>
                                <img src={lg_logo} height={50} alt="" />
                            </div>
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
                    {overlayCover &&
                        <div
                            className='overlay_cover_sidevbar'
                            onClick={() => { setOverlayCover(false) }}
                        >
                        </div>
                    }
                </Sider>
                <Layout className="site-layout w-100"
                    style={{ paddingLeft: '90px', paddingRight: '20px' }}
                    onClick={() => { setCollapsed(true); setOverlayCover(true) }}
                >
                    <Content
                        style={{
                            margin: '0 0.5rem',
                        }}
                    >
                        <Header>
                            <HeaderContent />
                        </Header>
                        <Outlet />
                        <Footer className='footer mt-5' style={{ borderRadius: '10px', backgroundColor: '#001529' }}>
                            <FooterContent />
                        </Footer>
                    </Content>

                </Layout>
            </Layout>
        </div >
    )
}
