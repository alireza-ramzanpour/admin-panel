import React, { useRef } from "react";
import '../style.css'
import { useNavigate } from "react-router-dom";

function Login() {
    const users = JSON.parse(localStorage.getItem('users'))
    const txtUsername = useRef()
    const txtPassword = useRef()
    const navigate = useNavigate()
    return (
        <div className="loginBox">
            <div className="loginBox-content">
                <input type="text" placeholder="Username" className="txtInput" ref={txtUsername} /> <br />
                <input type="password" placeholder="Password" className="txtInput" ref={txtPassword} /> <br />
                <input type="button" className="loginBtn" value='Login' onClick={() => {
                    const findUser = users.find(user => user.username === txtUsername.current.value && user.password === txtPassword.current.value);
                    if (findUser) {
                        navigate('/');
                        localStorage.setItem('username', txtUsername.current.value);
                    } else {
                        alert('Invalid username or password');
                    }
                }} />
            </div>
        </div>
    );
}

export default Login;
