import React from 'react'

export default function PanelHeader(props) {
  return (
    <div className='panel_header_content'>
      <div className='panel_header_content_title'><h6>{props.name}</h6></div>
      <div className='panel_header_content_icon' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <div className='ml-3'>15 <i className="fa-solid fa-thumbs-up fa-lg" style={{ color: 'rgb(237, 125, 49)' }}></i></div>
        <div className='ml-3'>5 <i className="fa-solid fa-thumbs-down fa-lg" style={{ color: 'rgb(112, 172, 72)' }}></i></div>
      </div>
    </div>
  )
}
