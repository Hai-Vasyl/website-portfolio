import React from "react"
import { NavLink } from "react-router-dom"
import { RiCodeSSlashLine } from "react-icons/ri"
import { FaHome, FaPhoneSquareAlt, FaPortrait, FaThList } from "react-icons/fa"

function Navbar() {
  return (
    <div className='nav'>
      <div className='nav__menu'>
        <NavLink to='/' className='nav__link nav__logo'>
          <RiCodeSSlashLine className='nav__icon' />
          <span className='nav__name'>Hai-Vasyl</span>
        </NavLink>
        <NavLink
          exact
          to='/'
          className='nav__link'
          activeClassName='nav__link--active'
        >
          <FaHome className='nav__icon' />
          <span className='nav__name'>Home</span>
        </NavLink>
        <NavLink
          to='/about'
          className='nav__link'
          activeClassName='nav__link--active'
        >
          <FaPortrait className='nav__icon' />
          <span className='nav__name'>About</span>
        </NavLink>
        <NavLink
          to='/projects'
          className='nav__link'
          activeClassName='nav__link--active'
        >
          <FaThList className='nav__icon' />
          <span className='nav__name'>Projects</span>
        </NavLink>
        <NavLink
          to='/contacts'
          className='nav__link'
          activeClassName='nav__link--active'
        >
          <FaPhoneSquareAlt className='nav__icon' />
          <span className='nav__name'>Contacts</span>
        </NavLink>
      </div>
    </div>
  )
}

export default Navbar
