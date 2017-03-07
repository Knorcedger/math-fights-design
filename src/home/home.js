import React, { Component } from 'react';
import './home.css';
import XP from '../components/XP/XP';
import Hexagon from '../components/Hexagon/Hexagon';
import badge from '../assets/badge.svg';
import trophy from '../assets/trophy.svg';

class Leaderboard extends Component {
  render() {
    return (
      <div className='home-container'>
        <XP level={14} />
        <Hexagon><img src={badge} width='35' alt='badge' /></Hexagon>
        <Hexagon bg='red'><img src={trophy} width='35' alt='trophy' /></Hexagon>
      </div>
    );
  }
}

export default Leaderboard;
