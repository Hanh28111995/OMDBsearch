import React from 'react'
import { useSelector } from 'react-redux'

export default function TimesheetExp() {
  const userState = useSelector((state) => state.userReducer)
  return (
    <>
      <div>{userState.userFocus}</div>
      <div>{userState.startDateEndDateFocus.dateStart}</div>
      <div>{userState.startDateEndDateFocus.dateEnd}</div>
    </>
  )
}
