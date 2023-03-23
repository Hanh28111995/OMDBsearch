import React from 'react'

export default function PanelHeader(props) {
  return (
    <div style={{ display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
        <div>{props.name}</div>
        <div style={{ display:'flex',flexDirection:'row', justifyContent:'space-between'}}>
            <div className='mr-3'>15 <i className="fa-solid fa-thumbs-up"></i></div>    
            <div className='mr-3'>15 <i className="fa-solid fa-thumbs-down"></i></div>    
        </div>
    </div>
  )
}
