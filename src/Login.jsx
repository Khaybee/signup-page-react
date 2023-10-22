import React, { useEffect, useState } from 'react';
import {signInWithPopup} from 'firebase/auth';
import {auth, provider} from "./config";
import {googleLogo} from "./taskimages"


const Login = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }

    const [value, setValue] = useState('')

    const handleClick = () => {
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=> {
        setValue(localStorage.getItem('email'))
    })


  return (
    <div className='auth-form-container'>
        <h2>Login</h2>
        <form className='login-form' onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id='username' placeholder='Username' />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' placeholder='Email Address' />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id='password' placeholder='*********' />
            <div className='checkboxFlex'>
                <div>
                <input type="checkbox" id='myCheckbox'  />
                <label for="myCheckbox" className='myCheckbox'> Remember Me</label>
                </div >
                <div className='forgotPass'>Forgot password?</div>
            </div>
            <button type='submit'>LOGIN</button>
        </form>
        <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Don't have an account? <span>Sign Up</span></button>
        <button className='withGoogle' onClick={handleClick}><img src={googleLogo} alt="Google Logo" />SignIn with Google</button>
    </div>
  )
}

export default Login