import React from 'react';
import styled from 'styled-components';

// components
import Button from '../components/Button/Button';
import Hexagon from '../components/Hexagon/Hexagon';
import Smile from '../components/Smile/Smile';

// assets
// import badge from '../assets/images/badge.svg';
import trophy from '../assets/images/trophy.svg';
// http://www.flaticon.com/free-icon/scroll_302124#term=papyrus&page=1&position=9
import history from '../assets/images/history.svg';
// http://www.flaticon.com/free-icon/shop_345763#term=shop&page=3&position=15
import shop from '../assets/images/basket.svg';
// import profile from '../assets/images/profile.svg';
// import badge from '../assets/images/badge.svg';
import coin from '../assets/images/coin.svg';
import diamond from '../assets/images/diamond.svg';
import profile from '../assets/images/tasos.jpg';
import leaderboard from '../assets/images/leaderboard.svg';
import logo from '../assets/images/logo.png';
import user from '../assets/images/user.svg';

// modules
import colors from '../modules/colors';

const Container = styled.div`
  background-color: linen;
  overflow-x: hidden;
`;

const Body = styled.div`
  position: relative;
`;

const InSmile = styled.div`
  width: 100%;
  height: ${props => props.height};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const Content = styled.div`
  background-color: ${colors.red};
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

const Header = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const ProfileArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
`;

const ProfileImage = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: relative;
  left: calc(50% - 50px);
  background: url(${profile});
  background-size: contain;
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
  height: 80px;

  > :nth-child(2), > :nth-child(3) {
    align-self: flex-end;
  }
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  background: url(${logo});
  background-size: contain;
`;

const ButtonWrapper = styled.div`
  position: relative;
`;

const Warning = styled.div`
  position: absolute;
  top: -10px;
  right: 0;
  border-radius: 6px;
  background-color: ${colors.blue};
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  border: 2px solid ${colors.gray4}
`;

/**
 * Home View
 */
const Home = () => (
  <Container>
    <Smile colorUp={colors.linen} colorDown={colors.red} height='360px' width='140%' />
    <Body>
      <InSmile height='320px'>
        <Header>
          <Hexagon
            bar={true}
            barColor={colors.lightBlue}
            barPercent={30}
            barSize={80}
            mainColor={colors.blue}
            size={30}
            text='14'
          />
          <Hexagon
            bar={true}
            barColor={colors.green}
            barPercent={0}
            barSize={80}
            barText='1535'
            image={trophy}
            mainColor={colors.green}
            size={30}
          />
          <Hexagon
            bar={true}
            barColor={colors.darkRed}
            barIcon='add'
            barPercent={0}
            barSize={80}
            barText='12632'
            image={coin}
            mainColor={colors.darkRed}
            onBarIconClick={() => window.location.replace('/shop')}
            size={30}
          />
        </Header>
        <ProfileArea>
          <ProfileImage />
          <Hexagon
            bar={true}
            barColor={colors.darkRed}
            barIcon='add'
            barPercent={0}
            barSize={80}
            barText='211'
            image={diamond}
            mainColor={colors.darkRed}
            onBarIconClick={() => window.location.replace('/shop')}
            size={30}
          />
        </ProfileArea>
        <Menu>
          <Hexagon
            image={user}
            mainColor={colors.blue}
            onClick={() => window.location.replace('/userProfile')}
            size={50}
          />
          <Hexagon
            image={shop}
            mainColor={colors.blue}
            onClick={() => window.location.replace('/shop')}
            size={50}
          />
          <Hexagon
            image={leaderboard}
            mainColor={colors.blue}
            onClick={() => window.location.replace('/leaderboard')}
            size={50}
          />
          <Hexagon
            image={history}
            mainColor={colors.blue}
            onClick={() => window.location.replace('/history')}
            size={50}
          />
        </Menu>
      </InSmile>
      <Content>
        <Logo />
        <ButtonWrapper>
          <Button
            backgroundColor={colors.yellow}
            borderColor={colors.gray}
            text='Start Game!'
            textColor={colors.gray}
            width={140}
            onClick={() => {}}
          />
          <Warning>!</Warning>
        </ButtonWrapper>
      </Content>
    </Body>
  </Container>
);

export default Home;
