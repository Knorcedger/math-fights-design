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
import profile from '../assets/images/mark.jpg';
import leaderboard from '../assets/images/leaderboard.svg';
import styled from 'styled-components';
import colors from '../modules/colors';

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
  background-color: ${colors.red};
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

class Home extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Hexagon
            bar={true}
            barColor={colors.lightBlue}
            barPercent={30}
            barSize={80}
            content={14}
            mainColor={colors.blue}
            size={30}>
          </Hexagon>
          <Hexagon
            bar={true}
            barColor={colors.pink}
            barContent={12632}
            barPercent={0}
            barSize={80}
            image={coin}
            mainColor={colors.red}
            size={30}>
          </Hexagon>
          <Hexagon
            bar={true}
            barColor={colors.gray1}
            barContent={211}
            barPercent={0}
            barSize={80}
            image={diamond}
            mainColor={colors.darkBlue}
            size={30}>
          </Hexagon>
        </Header>
        <ProfileArea>
          <ProfileImage/>
          <Hexagon
            bar={true}
            barColor={colors.gray1}
            barContent={1535}
            barPercent={0}
            barSize={80}
            image={trophy}
            mainColor={colors.gray}
            size={30}>
          </Hexagon>
          </ProfileArea>
        <Menu>
          <Hexagon
            mainColor={colors.lightBlue}
            image={shop}
            size={50}>
          </Hexagon>
          <Hexagon
            mainColor={colors.lightBlue}
            image={leaderboard}
            onClick={() => this.context.history.push('leaderboard')}
            size={50}>
          </Hexagon>
          <Hexagon
            mainColor={colors.lightBlue}
            image={history}
            size={50}>
          </Hexagon>
        </Menu>
        <div className='full-width-div'>
          <span className='semi-circle'></span>
        </div>
        <Body>
          <Button
            backgroundColor={colors.yellow}
            borderColor={colors.gray}
            text='Start Game!'
            textColor={colors.gray}
            width={140}
            onClick={() => console.log('Start Game! clicked')}>
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
