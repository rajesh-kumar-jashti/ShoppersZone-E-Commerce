import React from 'react'
import { useState } from 'react'
import './login.css'
import { NavLink } from 'react-router-dom'

const Login = () => {


  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })

  const Login = async ()=>{
    console.log("Login",formData);
    let responseData;
    await fetch('http://localhost:4000/seller-login',{
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>responseData=data)
    if(responseData.success){
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/admin');
    }
    else{
      alert(responseData.errors);
    }
  }

  const changeHandler = (e) =>{
    setFormData({...formData, [e.target.name]:e.target.value})
  }

    return (
      <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Login</h1>
          <div className="loginsignup-fields">
            <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
            <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
          </div>
          <button onClick={()=>{Login()}}>Continue</button>
          :<p className='loginsignup-login'>Create an account? <NavLink to='/seller-signup' style={{textDecoration:"none", color:"#000"}}><span>Click here</span></NavLink></p>
        </div>
  
      </div>
    )
}

export default Login
