import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import {
  AiOutlineHome,
  AiOutlineCode,
  AiOutlinePhone,
  AiOutlineSolution,
} from "react-icons/ai"
import { Context } from "../context/context"
import { TOGGLE_DROP_MENU, RESET_MENU } from "../context/menu/menuTypes"

function Navbar() {
  const {
    menu: { drop },
    dispatchMenu,
  } = useContext(Context)

  return (
    <div className='nav'>
      <div className='nav__menu'>
        <NavLink
          to='/'
          className='nav__link nav__logo'
          onClick={() => dispatchMenu({ type: RESET_MENU })}
        >
          <span className='nav__name'>
            <span className='nav__name__active'>V</span>asyl{" "}
            <span className='nav__name__active'>H</span>ai
          </span>
        </NavLink>
        <div
          className={`nav__main-menu ${drop && "nav__main-menu--drop"}`}
          onClick={() => dispatchMenu({ type: RESET_MENU })}
        >
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
        <button
          className={`nav__btn-menu ${drop && "nav__btn-menu--active"}`}
          onClick={() => dispatchMenu({ type: TOGGLE_DROP_MENU })}
        >
          <span className='nav__line'></span>
          <span className='nav__line'></span>
          <span className='nav__line'></span>
        </button>
      </div>
    </div>
  )
}

export default Navbar
