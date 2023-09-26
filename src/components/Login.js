import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/config';
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
    async function handlesubmit(e){
        e.preventDefault()
        signInWithEmailAndPassword(auth, formData.email, formData.password).then((data)=> console.log(data)).catch((err)=> console.log(err.message))
    }
    console.log(formData)
  return (
    <div>
        <div className='formcontainer'>
        <h1>Login</h1>
        <form onSubmit={handlesubmit}>
            <input type='email' value={FormData.email} placeholder='Email' name='email' onChange={handleChange} /><br></br>
            <input type='password' value={FormData.password} placeholder='Password' name='password' onChange={handleChange} />
            <button>Log In</button>
            </form>
        </div>
    </div>
  )
}
