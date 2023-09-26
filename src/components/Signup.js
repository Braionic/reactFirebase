import React from 'react'

export default function Signup() {
  return (
    <div>
        

    <div className='formcontainer'>
    <h1>SignUp</h1>
        <input type='email' value={FormData.email} placeholder='Email' name='email' /><br></br>
        <input type='password' value={FormData.password} placeholder='Password' name='password' />
        <button>Sign Up</button>
    </div>
</div>
  )
}
