import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import './signup.css'

const SignUp = () => {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  })


  const SignUp = async () =>{
    console.log("SignUp",formData);
    let responseData;
    await fetch('http://localhost:4000/signup',{
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
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input name='username' type="text" value={formData.username} onChange={changeHandler} placeholder='Your Name' />
          <input name='email'  type="email" value={formData.email} onChange={changeHandler} placeholder='Email Address' />
          <input name='password' type="password" value={formData.password} onChange={changeHandler} placeholder='Password' />
        </div>
        <button onClick={()=>{SignUp()}}>Continue</button>
        <p className='loginsignup-login'>Already have an account? <NavLink to='/seller-login' style={{textDecoration:"none", color:"#000"}}><span>Login here</span></NavLink></p>
      </div>

    </div>
  )
}

export default SignUp
