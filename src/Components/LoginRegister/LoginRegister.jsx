import React from 'react'
import './LoginRegister.css';
const LoginRegister = () => {
    return (
        <div className = 'wrapper'>
            <div className = "form-box login">
                <form action = "">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" 
                        placeholder = 'Username' required/>
                    </div>

                    <div className="input-box">
                        <input type="password" 
                        placeholder ='Password' required/>
                    </div>

                </form>

            </div> 
        </div>
    )
};
export default LoginRegister;