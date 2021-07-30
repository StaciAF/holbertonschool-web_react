import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <>
            <div className="App-body">
                <p className="Body-p">
                    Login to access the full dashboard
                </p>
                <form className="Login-form">
                    <label>Email:
            <input type="text" name="email" />
                    </label>
                    <label>Password:
            <input type="text" name="password" />
                    </label>
                    <button>OK</button>
                </form>
            </div>
            <hr className="HR-red"></hr>
        </>
    );
}

export default Login;