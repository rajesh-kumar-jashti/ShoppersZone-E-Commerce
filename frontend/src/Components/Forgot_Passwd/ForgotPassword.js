import React from 'react'
import { useState } from 'react'
import './forgotPassword.css'

const ForgotPassword = () => {

    const [formData, setFormData] = useState({
        newPassword: "",
        confirmPassword: ""
      })

    const UpdatePassword = async () =>{
        console.log("SignUp",formData);
        let responseData;
        await fetch('http://localhost:4000//update-password',{
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data)
        if(responseData.success){
          localStorage.setItem('auth-token', responseData.token);
          window.location.replace('/');
        }
        else{
          alert(responseData.errors);
        }
      }
    
      const changeHandler = (e) =>{
        setFormData({...formData, [e.target.name]:e.target.value})
      }

  return (
    <div className='forgot-pwd'>
        <div className="fgpwd-inputs">
            <input name='newpassword' value={formData.newPassword} onChange={changeHandler} type="password" placeholder='Enter New Password'/>
            <input name='confirmpassword' value={formData.confirmPassword} onChange={changeHandler} type="password" placeholder='Confirm Password'/>
        </div>  
        <div className='fgpwd-button'>
            <button onClick={()=>{UpdatePassword()}}>Submit</button>
        </div>    
    </div>
  )
}

export default ForgotPassword
