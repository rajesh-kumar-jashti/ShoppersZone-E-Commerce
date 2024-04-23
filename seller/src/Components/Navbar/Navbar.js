import React from 'react'
import "./navbar.css"
import navProfile from '../Assets/nav-profile.svg'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavLink to='/' style={{textDecoration:"none", color:"#333"}}><h1>SHOPPERS ZONE<span>Admin</span></h1></NavLink>
        <div>
          {localStorage.getItem('auth-token')
            ?<div className='navbar-logout'>
              <button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
              <NavLink to=''><img src={navProfile} style={{height:'35px'}} alt="" /></NavLink>
            </div> 
            :<NavLink to='/login'><button>Login</button></NavLink>}
        </div>
    </div>
  )
}

export default Navbar
