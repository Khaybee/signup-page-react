import React, { useEffect, useState } from 'react'
import {auth, provider} from "./config";
import {signInWithPopup} from 'firebase/auth';
import {googleLogo} from "./taskimages"


const SignUp = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
        if (passwordsMatch) {
            console.log('Form submitted');
          } else {
            console.error('Passwords do not match');
          }
    }

    
    const handlePasswordChange = (e) => {
        const passwordValue = e.target.value;
        setPass(passwordValue);
        setPasswordsMatch(passwordValue === confirmPass);
    };

    const handleConfirmPasswordChange = (e) => {
        const confirmPasswordValue = e.target.value;
        setConfirmPass(confirmPasswordValue);
        setPasswordsMatch(pass === confirmPasswordValue);
    };

    const [value, setValue] = useState('')

    const handleClick = () => {
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })


  return (
    <div className='auth-form-container signup-container'>
        <h2>Sign Up</h2>
        <form className='signUp-form' onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" id='name' placeholder='Full name' />

            <label htmlFor="username">Username</label>
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id='username' placeholder='Username' />

            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id='email' placeholder='Email Address' />
            
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={handlePasswordChange} type="password" id='password' placeholder='*********' />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input value={confirmPass} onChange={handleConfirmPasswordChange} type="password" id='confirmPassword' placeholder='*********' />
            {passwordsMatch ? null : (
            <div className='error-message'>Passwords do not match</div>
            )}
            <button>SIGN UP</button>
        </form>
        <button className='link-btn signup-btn' onClick={() => props.onFormSwitch('login')}>Already have an account? <span>Login</span></button>
        <button className='withGoogle' onClick={handleClick}><img src={googleLogo} alt="Google Logo" />SignIn with Google</button>
    </div>
  )
}

export default SignUp