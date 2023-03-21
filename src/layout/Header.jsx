import React, { useState } from 'react'
import { Menu, Space, notification, Avatar } from "antd";
import Icon from '@mdi/react';
import { mdiBellRing } from '@mdi/js';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
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
    const [closeR, setCloseR] = useState(false)
    let blurEvent = () => {
        setCloseM(false);
        setCloseR(false);
    }
    let clickEvent = () => {
        setCloseM(false);
    }

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
            getItem('TimeSheet', '/admin/hr/timesheet', '---',),
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

    return (

        <div className='header d-flex flex-row mr-3' >
            <div className='header-left d-flex flex-row'>
                <Menu
                    mode="horizontal"
                    items={item2}
                    theme="light"
                    onClick={({ key }) => {
                        navigate(key)
                    }}
                    
                >
                </Menu>

            </div>

            <div className='header-right d-flex flex-row bg-white'>
                <div className='d-flex align-items-center'>
                    <h4 className='mb-0 ml-4'>{userState.titleHeader}</h4>
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
                                <a href="#">Xem tất cả thông báo</a>
                            </div>
                            <ul>
                                <li>
                                    <a href="">
                                        <p>Time1</p>
                                        <p>Event1</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="">
                                        <p>Time2</p>
                                        <p>Event2</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div style={{ position: 'relative', display: "flex" }} onBlur={blurEvent} onClick={clickEvent} tabIndex={0}>
                        <div className='menu_acc' data-toggle="collapse" data-target="#demo1">
                            <Avatar src="https://admin.worldcraftlogistics.net/img/Avatar/hanhT__2023-03-04-01-23-53-990.jpg" size={45} />
                            <span className='pl-1'><i className="fa-solid fa-caret-down"></i></span>
                        </div>
                        <div id="demo1" className={`menu_acc_list collapse ${closeM ? "hide" : ""} py-2`}>
                            <ul>
                                <li><a href=""><i className="fa-solid fa-user"></i>Change Avatar</a></li>
                                <li><a href=""><i className="fa-solid fa-lock"></i>Change Password</a></li>
                                <li><a href=""><i className="fa-regular fa-life-ring"></i>Support</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}
