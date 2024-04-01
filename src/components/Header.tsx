'use client'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'flowbite-react'

function Header() {
  return (
    <Navbar fluid rounded className='navbar'>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink to='/' className='nav-link'>
          Home
        </NavLink>
        <NavLink to='/about' className='nav-link'>
          About
        </NavLink>
        <NavLink to='/admin' className='nav-link'>
          Admin
        </NavLink>
        <NavLink to='/login' className='nav-link'>
          Login
        </NavLink>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
