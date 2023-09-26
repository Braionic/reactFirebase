import React, { useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../config/config';
export default function Signup() {
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
       
        createUserWithEmailAndPassword(auth, email, password ).then((data)=> console.log(data.user)).catch((err)=> console.log(err.message))
     }
     const provider = new GoogleAuthProvider();
     async function handlegoogle(e){
        e.preventDefault()
        await signInWithPopup(auth, provider).then((data)=> console.log(data)).catch((err)=> console.log(err.message))
     }
  return (
    <div>
        

    <div className='formcontainer'>
    <h1>SignUp</h1>
    <form onSubmit={handlesubmit}>
        <input type='email' value={FormData.email} placeholder='Email' name='email' onChange={handleemail} required/><br></br>
        <input type='password' value={FormData.password} placeholder='Password' name='password' onChange={handlepassword} required/>
        <button>Sign Up</button>|<button onClick={handlegoogle}>Signu uaing google</button>
        </form>
    </div>
</div>
  )
}
