'use client'

import { Navbar } from 'flowbite-react'

function Component() {
  return (
    <Navbar fluid>
      <Navbar.Collapse>
        <Navbar.Link href='#' active>
          Home
        </Navbar.Link>
        <Navbar.Link href='#'>About</Navbar.Link>
        <Navbar.Link href='#'>Services</Navbar.Link>
        <Navbar.Link href='#'>Pricing</Navbar.Link>
        <Navbar.Link href='#'>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Component
