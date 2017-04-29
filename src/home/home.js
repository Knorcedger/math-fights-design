import React, { Component, PropTypes } from 'react';
import './home.css';
import Button from '../components/Button/Button';
import Hexagon from '../components/Hexagon/Hexagon';
// import badge from '../assets/images/badge.svg';
import trophy from '../assets/images/trophy.svg';
import history from '../assets/images/history.svg'; // http://www.flaticon.com/free-icon/scroll_302124#term=papyrus&page=1&position=9
import shop from '../assets/images/shop.svg'; // http://www.flaticon.com/free-icon/shop_345763#term=shop&page=3&position=15
// import profile from '../assets/images/profile.svg';
// import badge from '../assets/images/badge.svg';
import coin from '../assets/images/coin.svg';
import diamond from '../assets/images/diamond.svg';
import leaderboard from '../assets/images/leaderboard.svg';

class Home extends Component {
  render() {
    return (
      <div className='home-container'>
        <div className='home-header'>
          <Hexagon
            bar={true}
            barColor='#64C7CC'
            barPercent={30}
            barSize={80}
            content={14}
            mainColor='#177EC1'
            size={30}>
          </Hexagon>
          <Hexagon
            bar={true}
            barColor='#f7c4bc'
            barContent={12632}
            barPercent={0}
            barSize={80}
            image={coin}
            mainColor='#F25F5C'
            size={30}>
          </Hexagon>
          <Hexagon
            bar={true}
            barColor='#c3c7cc'
            barContent={211}
            barPercent={0}
            barSize={80}
            image={diamond}
            mainColor='#456990'
            size={30}>
          </Hexagon>
        </div>
        <div className='home-profile-image-container'>
          <div className='home-profile-image'></div>
          <Hexagon
            bar={true}
            barColor='#c7c0b8'
            barContent={1535}
            barPercent={0}
            barSize={80}
            image={trophy}
            mainColor='#50514F'
            size={30}>
          </Hexagon>
        </div>
        <div className='home-menu'>
          <Hexagon
            mainColor='#64C7CC'
            image={shop}
            size={50}>
          </Hexagon>
          <Hexagon
            mainColor='#64C7CC'
            image={leaderboard}
            onClick={() => this.context.history.push('leaderboard')}
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
          <Button
            backgroundColor='#FFE066'
            borderColor='#50514F'
            text='Start Game!'
            textColor='#50514F'
            width={140}>
          </Button>
        </div>
      </div>
    );
  }
};

Home.contextTypes = {
  history: PropTypes.object
};

export default Home;
