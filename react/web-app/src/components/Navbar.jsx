import React from 'react'
import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <NavLink to="/" className={({isActive})=>isActive?"active":""}>Home</NavLink>
      <NavLink to="/contact" className={({isActive})=>isActive?"active":""}>Contact</NavLink>
    </div>
  )
}

export default Navbar;
