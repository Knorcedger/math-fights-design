import React, { Component } from 'react';
import './welcome.css';
import Button from '../components/Button/Button';



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
        <Button
          backgroundColor='#247BA0'
          text='Login with facebook'
          textColor='#FFFFFF'
          width={180}>
        </Button>
        <Button
          backgroundColor='#F25F5C'
          text='Login with email'
          textColor='#FFFFFF'
          width={180}>
        </Button>
        </div>
      </div>
    );
  }
}

export default Welcome;
