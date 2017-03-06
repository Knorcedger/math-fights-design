import React, { Component } from 'react';
import './home.css';
import XP from '../components/XP/XP';
// import photo from '../leaderboard/mark.jpg';

class Leaderboard extends Component {
  render() {
    return (
      <div className='container'>
        <XP level={14} />
      </div>
    );
  }
}

export default Leaderboard;
