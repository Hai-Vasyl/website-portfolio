import React from "react"
import { NavLink } from "react-router-dom"
import { RiCodeSSlashLine } from "react-icons/ri"
import {
  AiOutlineHome,
  AiOutlineCode,
  AiOutlinePhone,
  AiOutlineSolution,
} from "react-icons/ai"

function Navbar() {
  return (
    <div className='nav'>
      <div className='nav__menu'>
        <NavLink to='/' className='nav__link nav__logo'>
          <RiCodeSSlashLine className='nav__icon' />
          <span className='nav__name'>Hai-Vasyl</span>
        </NavLink>
        <div className='nav__main-menu'>
          <NavLink
            exact
            to='/'
            className='nav__link'
            activeClassName='nav__link--active'
          >
            <AiOutlineHome className='nav__icon' />
            <span className='nav__name'>Home</span>
          </NavLink>
          <NavLink
            to='/about'
            className='nav__link'
            activeClassName='nav__link--active'
          >
            <AiOutlineSolution className='nav__icon' />
            <span className='nav__name'>About</span>
          </NavLink>
          <NavLink
            to='/projects'
            className='nav__link'
            activeClassName='nav__link--active'
          >
            <AiOutlineCode className='nav__icon' />
            <span className='nav__name'>Projects</span>
          </NavLink>
          <NavLink
            to='/contacts'
            className='nav__link'
            activeClassName='nav__link--active'
          >
            <AiOutlinePhone className='nav__icon' />
            <span className='nav__name'>Contacts</span>
          </NavLink>
        </div>
        <button className='nav__btn-menu'>
          <span className='nav__line'></span>
          <span className='nav__line'></span>
          <span className='nav__line'></span>
        </button>
      </div>
    </div>
  )
}

export default Navbar
