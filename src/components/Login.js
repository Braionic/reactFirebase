import React, { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/config';
import { redirect } from 'react-router-dom';
export default function Login() {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    function handleemail(e){
        e.preventDefault()
        setemail(e.target.value)
    }
    
    function handlepassword(e){
        e.preventDefault()
        setpassword(e.target.value)
    }
    async function handlesubmit(e){
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password).then((data)=> {
            console.log(data)
            const response = redirect("/host");
            response.body = true; // It's silly, but it worksdf
            return response; 
    }).catch((err)=> console.log(err.message))
    }
  return (
    <div>
        <div className='formcontainer'>
        <h1>Login</h1>
        <form onSubmit={handlesubmit}>
            <input type='email' value={FormData.email} placeholder='Email' name='email' onChange={handleemail} /><br></br>
            <input type='password' value={FormData.password} placeholder='Password' name='password' onChange={handlepassword} />
            <button>Log In</button>
            </form>
        </div>
    </div>
  )
}
