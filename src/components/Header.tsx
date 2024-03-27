'use client'
import { NavLink } from 'react-router-dom'
import { Navbar } from 'flowbite-react'

function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/admin'>Admin</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
