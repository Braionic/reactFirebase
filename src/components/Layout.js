import { signOut } from 'firebase/auth'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { auth } from '../config/config'


export default function Layout() {
   async function signout(e){
        e.preventDefault()
        console.log("clicked")
        signOut(auth).then((data)=> console.log(`signedout ${data}`)).catch((err)=> console.log(err.message))
    }
  return (
    <div>
        <div className='navbar'>
            <h1 className='logo'>Firebase</h1>
        <ul className='navlinkscontainer'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink to="/About">About</NavLink></li>
            <li><button onClick={signout}>Signout</button></li>
            
        </ul>
        </div>
        <Outlet />
    </div>
  )
}
