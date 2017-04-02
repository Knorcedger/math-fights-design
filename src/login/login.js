import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  render() {
    return (
      <div className='login-container'>
        <div className='login-logo-container'>
          <div className='login-logo'></div>
        </div>
        <div className='login-full-width-div'>
          <span className='login-semi-circle'></span>
        </div>
        <div className='login-body'>
          <div className='login-tabs'>
            <div className='login-tab'>Login</div>
            <div className='register-tab'>Register</div>
          </div>
          <div className='login-box'>
            <input className='login-username' placeholder='Username'></input>
            <input placeholder='Passowrd'></input>
          </div>
        </div>
        <div className='login-footer'>
        </div>
      </div>
    );
  }
}

export default Login;
