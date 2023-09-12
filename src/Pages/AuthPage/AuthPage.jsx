import { useState } from 'react';

import LoginForm from "../../Components/LoginForm/LoginForm"
import SignUpForm  from "../../Components/SignUpForm/SignUpForm"

import './AuthPage.css';

export default function AuthPage({ setUser }) {
    const [toggle, setToggle] = useState(true);
    const buttonText = toggle ? 'Sign Up' : 'Log In';
    const _handleToggle = () => {
        setToggle(!toggle);
    }

    return (
        <main >
            {toggle ? <h2>LoginForm</h2> : <h2>SignUpForm</h2> }
            {/* <h1>AuthPage</h1> */}
            <div className='auth-page' >
                <div className='padding'>
                    {toggle ? <LoginForm setUser={setUser}/> : <SignUpForm setUser={setUser} />}
                </div> 
                <div className='padding'>
                    <button className='position' onClick={ _handleToggle }>{ buttonText }</button>
                </div>           

            </div>
        </main>
    )
};