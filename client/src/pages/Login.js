import React from 'react'
import { fetcher } from '../helpers/fetcher';
import { useNavigate } from 'react-router-dom';
// import LoginError from "../components/error/login_error";
import { useState, useEffect } from 'react';

export const Login = () => {
    const navigate = useNavigate();
    const [login_err, setLogin_err] = useState(false)

    const sendLogin = async e => {
        e.preventDefault();

        var user = {
            email: e.target.email.value,
            pass: e.target.pass.value
        };

        await fetcher("http://localhost:5000/login", "POST", user).then((res) => {
            if (res.validation === true) {
                let user = res.user
                setLogin_err(false)
                localStorage.setItem("user", JSON.stringify(res.user));
                navigate(`/fridge/${user}`);
            } else {
                setLogin_err(true)
            }
        });
    }
    return (
        <div>
            <div className="login-header">
                <div className="login-container">
                    <img className="logo-center" src="http://localhost:3000/login.png" width="250" alt="" />
                    <h1>frescoo</h1>
                    <h2>Welcome back!</h2>
                </div>
            </div>
            <div className='form-container'>
                <form onSubmit={sendLogin}>
                    <div>
                        <label>Email</label>
                        <input type="text" name="email" required />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="pass" required />
                    </div>
                    {login_err ? <div className="error-message">There must be an error with your credentials</div> : ""}
                    <input type="submit" value="Login" />
                </form>
            </div>
        </div>
    )
}

