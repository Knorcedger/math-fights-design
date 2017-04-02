import React, { Component } from 'react';
import './welcome.css';
import Hexagon from '../components/Hexagon/Hexagon';
// import badge from '../assets/badge.svg';
import trophy from '../assets/trophy.svg';
import history from '../assets/history.svg'; // http://www.flaticon.com/free-icon/scroll_302124#term=papyrus&page=1&position=9
import shop from '../assets/shop.svg'; // http://www.flaticon.com/free-icon/shop_345763#term=shop&page=3&position=15
// import profile from '../assets/profile.svg';
import badge from '../assets/badge.svg';

class Leaderboard extends Component {
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
        <div className='welcome-footer'>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
