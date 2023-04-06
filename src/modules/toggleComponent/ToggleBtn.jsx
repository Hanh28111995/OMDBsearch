import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './index.scss'
import { setToggleDarkLight } from '../../store/actions/user.action'


export default function ToggleBtn() {
    const dispatch = useDispatch()
    const userState = useSelector((state) => state.userReducer)
    const [toggle, setToggle] = useState(userState.toggleDarkLight)
    const toggleAction = (e) => {
        dispatch(setToggleDarkLight(e.target.checked))
        setToggle(e.target.checked)
    }
    return (
        <div className='bg-bell' onChange={(e) => toggleAction(e)}>
            <div className="wrapper-position">
                <div className="wrapper">
                    <label className="theme-switch" htmlFor="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <div className="mode-container">
                            {toggle && <i className="fa-regular fa-sun gg-sun"></i>}
                            {!toggle && <i className="fa-regular fa-moon gg-moon"></i>}
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}
