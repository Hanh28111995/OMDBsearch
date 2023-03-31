import React, { useState } from 'react'
import { Menu, Avatar } from "antd";
import Icon from '@mdi/react';
import { mdiBellRing, mdiMenuOpen } from '@mdi/js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import IconHeaderLeft from './IconHeaderLeft';
import { pathChangeInfor } from '../constants/headerPath';

export default function HeaderContent(props) {
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
    const userState = useSelector((state) => state.userReducer)
    const navigate = useNavigate()
    const [closeM, setCloseM] = useState(false)

    const blurEvent = () => {
        setCloseM(true);
    }
    const clickEvent = () => {
        setCloseM(false);
    }
    const navFunc = (path) => {
        setCloseM(true);
        navigate(path)
    }

    const item2 = [
        // getItem('Welcome !', null, <Avatar src="https://admin.worldcraftlogistics.net/img/Avatar/hanhT__2023-03-04-01-23-53-990.jpg" width={100} />,
        //     [
        //         getItem('Change Avatar', null, <i className="fa-solid fa-truck"></i>),
        //         getItem('Change Password', null, <i className="fa-solid fa-equals"></i>),
        //         getItem('Support', null, <i className="fa-solid fa-paste"></i>),
        //     ]
        // ),
        getItem(<IconHeaderLeft />, null, '', [
            getItem('User Management', '/admin/hr/user-management', '---',),
            getItem('TimeSheet', '/admin/hr/timesheet', '---',),
            getItem('Injury Report', null, 'x--',),
            getItem('Emp Starting Infor', null, 'x--',),
            getItem('Employee Complaint', '/admin/hr/employee-complaint', '---',),
            getItem('Incident Report', null, '---',),
            getItem('Lunch Correction', null, '---',),
            getItem('Miss Punch', '/admin/hr/misspuch-management', '---',),
            getItem('Time Off', '/admin/hr/timeoff-management', '---',),
            getItem('Pay Roll', null, '---',),
            getItem('VTO Request', null, '---',),
            getItem('Notificate', null, '---',),
            getItem('View Log', null, '---',),
        ]),
    ]

    return (

        <div className='header d-flex' >
            <div className='header-left d-flex flex-row'>
                <Menu
                    items={item2}
                    onClick={({ key }) => {
                        navigate(key)
                    }}
                >
                </Menu>

            </div>

            <div className='header-right d-flex flex-row bg-white'>
                <div className='d-flex align-items-center'>
                    <h4>{userState.titleHeader}</h4>
                </div>

                <div className='d-flex align-items-center'>
                    <div style={{ position: 'relative', display: "flex" }} onBlur={blurEvent} onClick={clickEvent} tabIndex={0}>
                        <div className='menu_acc' data-toggle="collapse" data-target="#demo2">
                            <div className='bg-bell'>
                                <Icon path={mdiBellRing} size={1} />
                            </div>
                        </div>
                        <div id="demo2" className={`menu_notificate collapse ${closeM ? "hide" : ""}`}>
                            <div className='pt-3 text-center'>
                                <p>Xem tất cả thông báo</p>
                            </div>
                            <ul>
                                <li>
                                    <p>Time1</p>
                                    <p>Event1</p>
                                </li>
                                <li>
                                    <p>Time2</p>
                                    <p>Event2</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ position: 'relative', display: "flex" }} onBlur={blurEvent} onClick={clickEvent} tabIndex={0}>
                        <div className='menu_acc' data-toggle="collapse" data-target="#demo1">
                            <Avatar src="https://admin.worldcraftlogistics.net/img/Avatar/hanhT__2023-03-04-01-23-53-990.jpg" />
                            <span className='pl-1'><i className="fa-solid fa-caret-down"></i></span>
                        </div>
                        <div id="demo1"
                            className={`menu_acc_list collapse ${closeM ? "hide" : ""} py-2`}>
                            <ul>
                                <li onClick={() => { navFunc(pathChangeInfor.changeAvt) }}><i className="fa-solid fa-user"></i>Change Avatar</li>
                                <li onClick={() => { navFunc(pathChangeInfor.changePassword) }}><i className="fa-solid fa-lock"></i>Change Password</li>
                                <li onClick={() => { navFunc(pathChangeInfor.Idealsupport) }}><i className="fa-regular fa-life-ring"></i>Support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
