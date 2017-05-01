import React, {Component, PropTypes} from 'react';
import './home.css';
import Button from '../components/Button/Button';
import Hexagon from '../components/Hexagon/Hexagon';
// import badge from '../assets/images/badge.svg';
import trophy from '../assets/images/trophy.svg';
// http://www.flaticon.com/free-icon/scroll_302124#term=papyrus&page=1&position=9
import history from '../assets/images/history.svg';
// http://www.flaticon.com/free-icon/shop_345763#term=shop&page=3&position=15
import shop from '../assets/images/shop.svg';
// import profile from '../assets/images/profile.svg';
// import badge from '../assets/images/badge.svg';
import coin from '../assets/images/coin.svg';
import diamond from '../assets/images/diamond.svg';
import profile from '../assets/images/mark.jpg';
import leaderboard from '../assets/images/leaderboard.svg';
import styled from 'styled-components';

const Container = styled.div`
  background-color: linen;
  overflow-x: hidden;
`;
const Header = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
`;
const Body = styled.div`
  background-color: #F25F5C;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ProfileArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const ProfileImage = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background: url(${profile});
  background-size: contain;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  top: 30px;
  z-index: 10;
`;
/**
* Home View
**/
class Home extends Component {
  /**
   * Render the home view to the user's screen
   * @return {object} the displayed view
  **/
  render() {
    return (
      <Container>
        <Header>
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
        </Header>
        <ProfileArea>
          <ProfileImage/>
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
        </ProfileArea>
        <Menu>
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
        </Menu>
        <div className='full-width-div'>
          <span className='semi-circle'></span>
        </div>
        <Body>
          <Button
            backgroundColor='#FFE066'
            borderColor='#50514F'
            text='Start Game!'
            textColor='#50514F'
            width={140}
            onClick={() => {}}>
          </Button>
        </Body>
      </Container>
    );
  }
};

Home.contextTypes = {
  history: PropTypes.object
};

export default Home;
