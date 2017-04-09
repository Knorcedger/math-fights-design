import React, { Component } from 'react';
import classNames from 'classnames';
import './login.css';

class Login extends Component {

  constructor() {
    super();

    this.state = {
      activeTab: 'login'
    };
  }

  render() {
    const loginClasses = classNames('tab', 'login', {active: this.state.activeTab === 'login'});
    const registerClasses = classNames('tab', 'login', {active: this.state.activeTab === 'register'});
    return (
      <div className='login-container'>
        <div className='login-logo-container'>
          <div className='login-logo'></div>
        </div>
        <div className='login-full-width-div'>
          <span className='login-semi-circle'></span>
        </div>
        <div className='login-body'>
          <div className='tabs'>
            <div className={loginClasses} onClick={() => this.setState({activeTab: 'login'})}>Login</div>
            <div className={registerClasses} onClick={() => this.setState({activeTab: 'register'})}>Register</div>
          </div>
          {
            this.state.activeTab === 'login'
            ?
              (<div className='login box'>
                <input name='login-username' className='username' placeholder='Username'></input>
                <input name='login-password' placeholder='Password'></input>
                <button>Login</button>
              </div>)
            :
              (<div className='register box'>
                <input name='register-username' className='username' placeholder='Username'></input>
                <input name='register-password' placeholder='Password'></input>
                <button>Register</button>
              </div>)
          }
        </div>
      </div>
    );
  }
}

export default Login;
