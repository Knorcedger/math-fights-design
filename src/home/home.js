import React, { Component } from 'react';
import './home.css';
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
      <div className='home-container'>
        <div className='home-header'>
          <Hexagon
            bar={true}
            barColor={'#64C7CC'}
            barPercent={30}
            barSize={50}
            mainColor='#177EC1'
            size={30}>
            14
          </Hexagon>
          <Hexagon
            bar={true}
            barColor={'#64C7CC'}
            barPercent={30}
            barSize={50}
            mainColor='#F25F5C'
            size={30}>
            Gems
          </Hexagon>
          <Hexagon
            bar={true}
            barColor={'#64C7CC'}
            barPercent={30}
            barSize={50}
            mainColor='#F25F5C'
            size={30}>
            Gold
          </Hexagon>
        </div>
        <div className='home-profile-image-container'>
          <div className='home-profile-image'></div>
        </div>
        <div className='home-menu'>
          <Hexagon
            mainColor='#64C7CC'
            image={badge}
            size={50}>
          </Hexagon>
          <Hexagon
            mainColor='#64C7CC'
            image={shop}
            size={50}>
          </Hexagon>
          <Hexagon
            mainColor='#64C7CC'
            image={trophy}
            size={50}>
          </Hexagon>
          <Hexagon
            mainColor='#64C7CC'
            image={history}
            size={50}>
          </Hexagon>
        </div>
        <div className='full-width-div'>
          <span className='semi-circle'></span>
        </div>
        <div className='body'>
          <div className="play-button">Start Game!</div>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
