import React from 'react'
import Navbar from '../Navbar/Navbar'
import Admin from '../Admin/Admin'
import './head.css'

const Head = () => {
  return (
    <div>
      <Navbar/>
      <div style={{display:"flex"}}>
        <Admin/>
        <div className='main'>
          <h1>Welcome to Seller Page</h1>
          <p>Manage Your Products</p>
        </div>
      </div>
    </div>
  )
}

export default Head
