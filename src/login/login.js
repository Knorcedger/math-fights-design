import React, { Component } from 'react';
import classNames from 'classnames';
import './login.css';
import styled from 'styled-components';
import logo from '../assets/images/sword.svg';
import Button from '../components/Button/Button';
import Smile from '../components/Smile/Smile';
import colors from '../modules/colors';

const Container = styled.div`
  background-color: ${colors.red};
  overflow-x: hidden;
`;
const Logo = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  background: linen;
  width: 25%;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
  margin-top: 20px;
  border: 3px solid darkgray;
  div {
    border-radius: 50%;
    width: 80px;
    background: url(${logo});
    background-size: contain;
  }
`;

const Body = styled.div`
  background-color: linen;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin-top: 20px;
  }
`;

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
      <Container>
      <Logo>
        <div/>
      </Logo>
        <Smile colorUp={colors.red} colorDown={colors.linen} />
        <Body>
          <div className='tabs'>
            <div className={loginClasses} onClick={() => this.setState({activeTab: 'login'})}>Login</div>
            <div className={registerClasses} onClick={() => this.setState({activeTab: 'register'})}>Register</div>
          </div>
          {
            this.state.activeTab === 'login'
            ? (<div className='login box'>
                <input name='login-username' className='username' placeholder='Username'></input>
                <input name='login-password' placeholder='Password'></input>
                <Button
                  backgroundColor={colors.blue}
                  text='Login'
                  textColor={colors.white}
                  width={180}
                  onClick={() => {}}>
                </Button>
              </div>)
            : (<div className='register box'>
                <input name='register-username' className='username' placeholder='Username'></input>
                <input name='register-password' placeholder='Password'></input>
                <Button
                  backgroundColor={colors.blue}
                  text='Register'
                  textColor={colors.white}
                  width={180}
                  onClick={() => {}}>
                </Button>
              </div>)
          }
        </Body>
      </Container>
    );
  }
}

export default Login;
