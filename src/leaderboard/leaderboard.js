import React, { Component } from 'react';
import './leaderboard.css';
import XP from '../components/XP/XP';
import photo from '../assets/mark.jpg';
// http://www.flaticon.com/free-icon/trophy_321773
import trophy from '../assets/trophy.svg';

class Leaderboard extends Component {
  constructor(props) {
    super(props);

    let data = [];
    for (let i = 0; i < 20; i++) {
      data.push({
        name: 'Marios' + Math.floor(Math.random() * 2017),
        points: 1500 - i,
        xp: Math.floor(Math.random() * (20 - 10)) + 10
      });
    }

    this.state = {data: data};
  }
  render() {
    return (
      <div className='Leaderboard-container'>
         <div className='header'>
            <div className='title'>Leaderboard</div>
            <div className='details'>
              <img src={trophy} alt='trophy' />
              <span className='text'>Top Math Masters</span>
            </div>
         </div>
         <div className='list'>
            {
              this.state.data.map((item, index) => {
                return (
                  <div className='item' key={item.name}>
                    <span className='rank'>{index + 1}</span>
                    <span className='photo'>
                      <img src={photo} width='30' alt='t' />
                    </span>
                    <XP level={item.xp} />
                    <span className='name'>{item.name}</span>
                    <span className='points'>{item.points}</span>
                  </div>
                );
              })
            }
         </div>
      </div>
    );
  }
}

export default Leaderboard;
