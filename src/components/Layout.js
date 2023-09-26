import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <div className='navbar'>
            <h1 className='logo'>Firebase</h1>
        <ul className='navlinkscontainer'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
        </ul>
        </div>
        <Outlet />
    </div>
  )
}
