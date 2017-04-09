import React, { Component } from 'react';
import './welcome.css';


class Welcome extends Component {
  render() {
    return (
      <div className='welcome-container'>
        <div className='welcome-logo-container'>
          <div className='welcome-logo'></div>
        </div>
        <div className='welcome-full-width-div'>
          <span className='welcome-semi-circle'></span>
        </div>
        <div className='welcome-body'>
          <div className="welcome-register-button">Login with facebook</div>
          <div className="welcome-login-button">Login with email</div>
        </div>
      </div>
    );
  }
}

export default Welcome;
