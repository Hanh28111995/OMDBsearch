import React, { useEffect, useState } from 'react'
import logo from '../../../src/assets/imgs/body_img.jpg'

export default function InjuryBodyParts(props) {
  useEffect(() => {
    console.log(props)
  }, [props.listInjuryPart])
  return (
    <div className='mainZone mx-auto'>
      <img src={logo} alt="" />
      <div className='injuryZone'>
        {
          props.listInjuryPart.map((item, index) => {
            return (
              <div key={index} className={item}>
                <i className='fa fa-circle text-danger-glow blink'></i>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
