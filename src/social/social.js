import React, {Component} from 'react';
import styled from 'styled-components';

// components
import Hexagon from '../components/Hexagon/Hexagon';
import Smile from '../components/Smile/Smile';
import BackButton from '../components/BackButton/BackButton';
import Ribbon from '../components/Ribbon/Ribbon';

// assets
import badge from '../assets/images/badge.svg';
import social from '../assets/images/social.svg';
import user from '../assets/images/user.svg';
import photo from '../assets/images/tasos.jpg';

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
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  background-color: ${colors.linen};
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;

  > :nth-child(1), > :nth-child(3) {
    margin-bottom: 20px;
  }

  > :nth-child(3) {
    margin-top: 30px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const BackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px 14px;
  height: 70px;
`;

const MainIcon = styled.div`
  height: 50px;
  width: 50px;
  background: url(${user}) no-repeat;
  margin-left: 10px;
`;

const HeaderText = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: ${colors.white};
  margin: 20px 10px 0 0;
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
  background: url(${photo});
  background-size: contain;
  border: 2px solid ${colors.white};
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 0px;
  width: 180px;
  height: 80px;
`;

const List = styled.div`
  width: 100%;
  background-color: ${colors.linen};
`;

const Item = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.red};
  padding: 8px 0;
`;

const Rank = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 10%;
  margin: 0 10px;
  font-size: 22px;
  color: ${colors.gray};
  text-align: left;
`;

const UserImage = styled.div`
  margin-right: 14px;
  width: 10%;
  display: flex;
  align-items: center;

  img {
    border-radius: 50px;
  }
`;

const XPContainer = styled.div`
  width: 10%;
  align-self: center;
`;

const Username = styled.div`
  width: 60%;
  align-self: center;
  margin-left: 10px;
  font-size: 18px;
  overflow-x: hidden;
  margin-right: 5px;
  color: ${colors.gray};
  white-space: nowrap;
`;

const LeaguePoints = styled.div`
  font-weight: bold;
  display: flex;
  align-self: center;
  color: ${colors.red};
  margin: 4px 20px 0 0;
  font-size: 22px;
`;

const FreePromo = styled.div`
  color: #F25F5C;
`;

/**
 * UserProfile View
 */
class Social extends Component {
  constructor(props) {
    super(props);

    const data = [];
    for (let i = 0; i < 2; i++) {
      data.push({
        name: `Marios${Math.floor(Math.random() * 2017)}`,
        points: 1500 - i,
        xp: Math.floor(Math.random() * (20 - 10)) + 10
      });
    }

    this.state = {data};
  }

  render() {
    return (
      <Container>
        <Smile colorUp={colors.red} colorDown={colors.linen} height='260px' width='140%' />
        <Body>
          <InSmile height='260px'>
            <Header>
              <BackContainer onClick={() => window.location.replace('/')}>
                <BackButton color={colors.white} thickness={4} size={5} />
                <MainIcon />
              </BackContainer>
              <ProfileArea>
                <ProfileImage />
              </ProfileArea>
              <HeaderText>Profile</HeaderText>
            </Header>
            <Menu>
              <Hexagon
                image={badge}
                mainColor={colors.gray3}
                onClick={() => window.location.replace('/shop')}
                size={50}
              />
              <Hexagon
                image={social}
                mainColor={colors.blue}
                onClick={() => window.location.replace('/social')}
                size={50}
              />
            </Menu>
          </InSmile>
          <Content>
            <FreePromo>Play with your friends NOW for FREE!</FreePromo>
            <Ribbon text='Online Friends' />
            <List>
              {
                this.state.data.map((item, index) => (
                  <Item key={item.name + item.points}>
                    <Rank>{index + 1}</Rank>
                    <UserImage><img src={photo} width='40' alt='t' /></UserImage>
                    <XPContainer>
                      <Hexagon
                        mainColor={colors.blue}
                        size={30}
                        text={item.xp.toString()}
                      />
                    </XPContainer>
                    <Username>{item.name}</Username>
                    <LeaguePoints>{item.points}</LeaguePoints>
                  </Item>
                ))
              }
            </List>
            <Ribbon text='All Friends' />
            <List>
              {
                this.state.data.map((item, index) => (
                  <Item key={item.name + item.points}>
                    <Rank>{index + 1}</Rank>
                    <UserImage><img src={photo} width='40' alt='t' /></UserImage>
                    <XPContainer>
                      <Hexagon
                        mainColor={colors.blue}
                        size={30}
                        text={item.xp.toString()}
                      />
                    </XPContainer>
                    <Username>{item.name}</Username>
                    <LeaguePoints>{item.points}</LeaguePoints>
                  </Item>
                ))
              }
            </List>
          </Content>
        </Body>
      </Container>
    );
  }
}

export default Social;
