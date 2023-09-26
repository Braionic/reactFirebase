import React, { useState } from 'react'

export default function Login() {
    const [formData, setformData] = useState({
        email: '',
        password: ''
    })

    function handleChange(e){
        e.preventDefault()
        const {name, value} = e.target;
        
       return setformData((oldval)=>{
            return {...oldval, name: value}
        })
        
    }
    console.log(formData)
  return (
    <div>
        <div className='formcontainer'>
        <h1>Login</h1>
            <input type='email' value={FormData.email} placeholder='Email' name='email' onChange={handleChange} /><br></br>
            <input type='password' value={FormData.password} placeholder='Password' name='password' onChange={handleChange} />
            <button>Log In</button>
        </div>
    </div>
  )
}
