import React, { useState } from 'react'
import './index.scss'

export default function Support() {
  const [hide, setHide] = useState(false)
  return (
    <div>
      <ul>
        <li className={`btn btn-primary ${hide ? "hide" : ""} `} onClick={() => { setHide(true) }}><a href="change-avatar">Testing</a></li>
      </ul>
    </div>
  )
}
