import React, { Component } from 'react';
import './temp.css';
import XP from '../components/XP/XP';
import Hexagon from '../components/Hexagon/Hexagon';
import badge from '../assets/badge.svg';
import trophy from '../assets/trophy.svg';
// import history from '../assets/history.svg'; // http://www.flaticon.com/free-icon/scroll_302124#term=papyrus&page=1&position=9
// import shop from '../assets/shop.svg'; // http://www.flaticon.com/free-icon/shop_345763#term=shop&page=3&position=15
// import profile from '../assets/profile.svg';

class Temp extends Component {
  render() {
    return (
      <div className='temp-container'>
        <XP level={14} />
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
          barColor={'#247BA0'}
          barPercent={30}
          barSize={50}
          mainColor='#64C7CC'
          size={50}>
          <img src={badge} width='35' alt='badge' />
        </Hexagon>
        <Hexagon mainColor='#FF5151' size={50}><img src={trophy} width='35' alt='trophy' /></Hexagon>
      </div>
    );
  }
}

export default Temp;
