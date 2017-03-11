import React, { Component } from 'react';
import './home.css';
import Hexagon from '../components/Hexagon/Hexagon';
import badge from '../assets/badge.svg';
import trophy from '../assets/trophy.svg';
import history from '../assets/history.svg'; // http://www.flaticon.com/free-icon/scroll_302124#term=papyrus&page=1&position=9
import shop from '../assets/shop.svg'; // http://www.flaticon.com/free-icon/shop_345763#term=shop&page=3&position=15
import profile from '../assets/profile.svg';

class Leaderboard extends Component {
  render() {
    return (
      <div className='home-container'>
        <span className='xp'>
          <span className='text'>{14}</span>
        </span>
        <div className="circle-div">
          <div className="circle"></div>
        </div>
        <div className="home-menu">
          <Hexagon bg='red'><img src={profile} width='35' alt='profile' /></Hexagon>
          <Hexagon><img src={history} width='34' alt='history' /></Hexagon>
          <Hexagon bg='red'><img src={trophy} width='32' alt='trophy' /></Hexagon>
          <Hexagon><img src={shop} width='32' alt='shop' /></Hexagon>
        </div>
        <div className='full-width-div'>
          <span className='semi-circle'></span>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
