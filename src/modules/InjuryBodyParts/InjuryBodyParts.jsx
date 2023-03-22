import React from 'react'
import logo from '../../../src/assets/imgs/body_img.jpg'
import './index.scss'


export default function InjuryBodyParts() {
  return (
   <div className='mainZone'>
    <img src={logo} alt="" />
    <div className='injuryZone'></div>
   </div>
  )
}
