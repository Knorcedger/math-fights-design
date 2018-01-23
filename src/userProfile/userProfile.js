import React from 'react';
import styled from 'styled-components';

// components
import Hexagon from '../components/Hexagon/Hexagon';
import Smile from '../components/Smile/Smile';
import BackButton from '../components/BackButton/BackButton';
import Ribbon from '../components/Ribbon/Ribbon';

// assets
import badge from '../assets/images/badge.svg';
import trophy from '../assets/images/trophy.svg';
import trophyShadow from '../assets/images/trophy-shadow.png';
import profile from '../assets/images/tasos.jpg';
import social from '../assets/images/social.svg';
import diamond from '../assets/images/diamond.svg';
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

  > :nth-child(1) {
    margin-bottom: 20px;
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
  background: url(${profile});
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

const Tile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.lightBlue};
  border: 2px solid ${colors.darkBlue};
  border-radius: 10px;
  padding: 10px;
  width: 90%;
  height: 40px;
  margin-bottom: 20px;
`;

const HexagonContainer = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  font-size: 18px;
  color: ${colors.white};
`;

const Title = styled.div``;

const Amount = styled.div``;

/**
 * UserProfile View
 */
const UserProfile = () => (
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
            mainColor={colors.blue}
            onClick={() => window.location.replace('/shop')}
            size={50}
          />
          <Hexagon
            image={social}
            mainColor={colors.gray3}
            onClick={() => window.location.replace('/leaderboard')}
            size={50}
          />
        </Menu>
      </InSmile>
      <Content>
        <Ribbon text='Achievements' />
        <Tile>
          <HexagonContainer>
            <Hexagon
              mainColor={colors.blue}
              image={trophy}
              size={30}
            />
            <Hexagon
              mainColor={colors.blue}
              image={trophy}
              size={30}
            />
            <Hexagon
              bar={true}
              barColor={colors.gray}
              barPercent={30}
              barSize={50}
              barText='50'
              mainColor={colors.blue}
              image={diamond}
              size={30}
            />
          </HexagonContainer>
          <Info>
            <Title>Wins</Title>
            <Amount>513</Amount>
          </Info>
        </Tile>
        <Tile>
          <HexagonContainer>
            <Hexagon
              mainColor={colors.blue}
              image={trophy}
              size={30}
            />
            <Hexagon
              bar={true}
              barColor={colors.gray}
              barPercent={30}
              barSize={50}
              barText='150'
              mainColor={colors.blue}
              image={diamond}
              size={30}
            />
            <Hexagon
              mainColor={colors.blue}
              image={trophyShadow}
              size={30}
            />
          </HexagonContainer>
          <Info>
            <Title>Correct Answers</Title>
            <Amount>10243</Amount>
          </Info>
        </Tile>
        <Tile>
          <HexagonContainer>
            <Hexagon
              bar={true}
              barColor={colors.gray}
              barPercent={30}
              barSize={50}
              barText='50'
              mainColor={colors.blue}
              image={diamond}
              size={30}
            />
            <Hexagon
              mainColor={colors.blue}
              image={trophyShadow}
              size={30}
            />
            <Hexagon
              mainColor={colors.blue}
              image={trophyShadow}
              size={30}
            />
          </HexagonContainer>
          <Info>
            <Title>XP</Title>
            <Amount>14</Amount>
          </Info>
        </Tile>
        <Tile>
          <HexagonContainer>
            <Hexagon
              mainColor={colors.blue}
              image={trophy}
              size={30}
            />
            <Hexagon
              mainColor={colors.blue}
              image={trophy}
              size={30}
            />
            <Hexagon
              mainColor={colors.blue}
              image={trophy}
              size={30}
            />
          </HexagonContainer>
          <Info>
            <Title>Trophies</Title>
            <Amount>1243</Amount>
          </Info>
        </Tile>
      </Content>
    </Body>
  </Container>
);

export default UserProfile;
