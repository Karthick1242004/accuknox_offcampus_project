import React from 'react'
import Na from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'

function Navbar() {
  return (
    <div className={Na.navbar}>
    <div className={Na.nav}>
      <div className={Na.links}>
        <Link className={Na.lk} to='/'>Home </Link>
        <p>  </p>
        <Link className={Na.lk} to='/'> Dashboard V2</Link>
      </div>
      <div className={Na.search}>
      <FontAwesomeIcon className={Na.searchicon} icon={faMagnifyingGlass} />
        <input type='text' placeholder='Search anything'></input>
      </div>
      <div>
      <FontAwesomeIcon className={Na.icon} icon={faBell} />
      </div>
    </div>
    </div>
  )
}

export default Navbar
