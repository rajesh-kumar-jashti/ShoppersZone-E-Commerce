import React from 'react'
import "./Navbar.css"
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <h1>SHOPPERS ZONE<span>Admin</span></h1>
        <img src={navProfile} alt="" />
    </div>
  )
}

export default Navbar
