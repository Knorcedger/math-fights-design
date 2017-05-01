import React, { Component } from 'react';
import './temp.css';
import XP from '../components/XP/XP';
import Hexagon from '../components/Hexagon/Hexagon';
import badge from '../assets/images/badge.svg';
import trophy from '../assets/images/trophy.svg';
// import history from '../assets/images/history.svg'; // http://www.flaticon.com/free-icon/scroll_302124#term=papyrus&page=1&position=9
import shop from '../assets/images/shop.svg'; // http://www.flaticon.com/free-icon/shop_345763#term=shop&page=3&position=15
// import profile from '../assets/images/profile.svg';
import colors from '../modules/colors';

class Temp extends Component {

  goldBar() {
    return (
      <span>
        <span>1253</span>
        <span><img src={trophy} width='35' alt='trophy' /></span>
      </span>
    );
  }

  render() {
    return (
      <div className='temp-container'>
        <XP level={14} />
        <Hexagon
          bar={true}
          barColor={colors.lightBlue}
          barPercent={30}
          barSize={50}
          image={badge}
          mainColor='colors.blue'
          size={50}>
        </Hexagon>
        <Hexagon
          mainColor={colors.green}
          image={badge}
          size={50}>
        </Hexagon>
        <Hexagon
          mainColor={colors.green}
          image={shop}
          size={50}>
        </Hexagon>
        <Hexagon
          mainColor={colors.green}
          image={trophy}
          content='14'
          size={50}>
        </Hexagon>
      </div>
    );
  }
}

export default Temp;
