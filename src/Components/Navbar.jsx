import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between py-3 md:px-20 px-5">
        <div>
          Router Prac
        </div>
        <nav className="flex ">
          <ul className="flex gap-3">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/services">Services</NavLink>
          </ul>
        </nav>
        <div></div>
      </div>
    </>
  )
}

export default Navbar