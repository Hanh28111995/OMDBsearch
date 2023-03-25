import React from 'react'
import { useSelector } from 'react-redux'
import Icon from '@mdi/react';
import { mdiMenuOpen } from '@mdi/js';

export default function IconHeaderLeft() {
  const userState = useSelector((state) => state.userReducer)
  return (
    <div >
      <Icon path={mdiMenuOpen} size={1} className='mb-1'/>
      <span className='menu-header-left' >{userState.userPosition}</span>
    </div>
  )
}
