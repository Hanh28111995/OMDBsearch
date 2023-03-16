import React, { useEffect, useState } from 'react'
import { Layout, Menu, Image, Space, notification, Avatar, } from "antd";
import Icon from '@mdi/react';
import { mdiBellRing } from '@mdi/js';
import { useSelector } from 'react-redux';

export default function Header(props) {
    const userState = useSelector((state) => state.userReducer)
    const [closeM, setCloseM] = useState(false)
    const [closeR, setCloseR] = useState(false)
    let blurEvent = () => {
        setCloseM(false);
        setCloseR(false);
    }
    let clickEvent = () => {
        setCloseM(false);
    }

    return (
        <Space className='header bg-white' >
            <h4 className='m-0'>{userState.titleHeader}</h4>
            <Space >
                <div style={{ position: 'relative' }} onBlur={blurEvent} onClick={clickEvent} tabIndex={0}>
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
                <div style={{ position: 'relative' }} onBlur={blurEvent} onClick={clickEvent} tabIndex={0}>
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
            </Space>

        </Space>
    )
}
