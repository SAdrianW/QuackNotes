import { useState } from 'react';
import LoginForm from "../../Components/LoginForm/LoginForm"
import SignUpForm  from "../../Components/SignUpForm/SignUpForm"

export default function AuthPage({ setUser }) {
    const [toggle, setToggle] = useState(true);
    const buttonText = toggle ? 'Sign Up' : 'Log In';
    const _handleToggle = () => {
            setToggle(!toggle);
    }

    return (
        <main>
            <h1>AuthPage</h1>
            <div>
                {toggle ? <LoginForm setUser={setUser}/> : <SignUpForm setUser={setUser} />}
                <button onClick={ _handleToggle }>{ buttonText }</button>
            </div>            
        </main>
    )
};