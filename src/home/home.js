import React, { Component } from 'react';
import './home.css';
import '../common/xp.css';
// import photo from '../leaderboard/mark.jpg';

class Leaderboard extends Component {
  render() {
    return (
      <div className='container'>
        <span className='xp'>
          <span className='text'>{14}</span>
        </span>
        <div className='full-width-div'>
        <span className='semi-circle'></span>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
