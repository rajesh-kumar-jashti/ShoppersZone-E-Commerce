import React from 'react'
import './main.css'
import {NavLink} from 'react-router-dom'

const Main = () => {
  return (
    <div className="App">
      <div className='app-main'>
        <p>SHOPPERS ZONE</p>
        <h1>Want To be a Patner?</h1>
        <div className="app-button">
          <div className='app-button-login'>  
            <NavLink to='/seller-login'><button>Login</button></NavLink>
          </div>
          <div className="app-button-signup">
            <NavLink to='/seller-signup'><button>Sign Up</button></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
