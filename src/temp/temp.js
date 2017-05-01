import React, {Component} from 'react';
import './temp.css';
import XP from '../components/XP/XP';
import Hexagon from '../components/Hexagon/Hexagon';
import badge from '../assets/images/badge.svg';
import trophy from '../assets/images/trophy.svg';
// http://www.flaticon.com/free-icon/scroll_302124#term=papyrus&page=1&position=9
// http://www.flaticon.com/free-icon/shop_345763#term=shop&page=3&position=15
import shop from '../assets/images/shop.svg';

/**
 * This is a temp view in which example designs are added
 **/
class Temp extends Component {
  /**
  * returns the gold bar view
  * @return {object} the view displayed
  **/
  goldBar() {
    return (
      <span>
        <span>1253</span>
        <span><img src={trophy} width='35' alt='trophy' /></span>
      </span>
    );
  }
  /**
  * Render the temp view to the user's screen
  * @return {object} the view displayed
  **/
  render() {
    return (
      <div className='temp-container'>
        <XP level={14} />
        <Hexagon
          bar={true}
          barColor={'#64C7CC'}
          barPercent={30}
          barSize={50}
          image={badge}
          mainColor='#177EC1'
          size={50}>
        </Hexagon>
        <Hexagon
          mainColor='#295'
          image={badge}
          size={50}>
        </Hexagon>
        <Hexagon
          mainColor='#295'
          image={shop}
          size={50}>
        </Hexagon>
        <Hexagon
          mainColor='#295'
          image={trophy}
          content='14'
          size={50}>
        </Hexagon>
      </div>
    );
  }
}

export default Temp;
