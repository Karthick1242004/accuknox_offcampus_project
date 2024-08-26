import React from 'react'
import He from './Header.module.css'

function Header() {
  return (
    <div  className={He.head}>
      <div>
        <h2>CNAPP Dashboard</h2>
      </div>
      <div className={He.buttons}>
        <div>
          <button className={He.bt1}> Add Widget + </button>
        </div>
        <div>
          <button className={He.bt2}> + </button>
        </div>
        
        <div>
          <button className={He.bt4}> Last 2 days </button>
        </div>
      </div>
    </div>
  )
}

export default Header
