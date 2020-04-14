import React from 'react';
import LoginFormContainer from '../login-form';

const LoginPage = () => {
    return (
        <div className="login-page"> 
            <h1 className="title login-page-title text-center">Login</h1>
            <LoginFormContainer />
        </div>

    );
}

export default LoginPage;