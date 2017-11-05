import React from 'react';
import styled from 'styled-components';

// components
import BackButton from '../components/BackButton/BackButton';
import Hexagon from '../components/Hexagon/Hexagon';
import Smile from '../components/Smile/Smile';

// assets
import history from '../assets/images/history.svg';
import profile from '../assets/images/tasos.jpg';
import profile2 from '../assets/images/tasos2.jpg';
import sword from '../assets/images/sword.svg';
import clock from '../assets/images/time.png';
import trophy from '../assets/images/trophy.svg';

// modules
import colors from '../modules/colors';

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const Body = styled.div`
  position: relative;
`;

const InSmile = styled.div`
  width: 100%;
  height: ${props => props.height};
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  background-color: linen;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HistoryIcon = styled.div`
  height: 50px;
  width: 50px;
  background: url(${history}) no-repeat;
  margin-left: 10px;
`;

const BackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px 14px;
  height: 70px;
`;

const HeaderText = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: ${colors.white};
  margin: 20px 10px 0 0;
`;

const GameTile = styled.div`
  width: 90%;
  background-color: ${colors.white};
  border: 2px solid ${colors.gray};
  border-radius: 10px;
  margin-bottom: 20px;
`;

const GameHeader = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.result === 'win' ? colors.blue : colors.red};
  color: ${colors.linen};
  border-radius: 8px 8px 0 0;
  font-size: 22px;
  position: relative;
`;

const GameResult = styled.div`

`;

const GameTime = styled.div`
  font-size: 12px;
  position: absolute;
  right: 10px;
  bottom: 2px;
`;

const Players = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const PlayerInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 40%;
`;

const Name = styled.div`
  display: flex;
  justify-content: ${props => props.who === 'me' ? 'flex-end' : 'flex-start'};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
  padding: 10px;
`;

const ProfileImage = styled.div`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background: url(${props => props.image});
  background-size: contain;
`;

const SwordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

const Sword = styled.div`
  background: url(${sword});
  width: 50px;
  height: 50px;
`;

const Clock = styled.div`
  position: absolute;
  top: 10px;
  opacity: 0.5;
  width: 40px;
  height: 40px;
  background: url(${clock});
  background-size: contain;
`;

/**
 * UserHistory View
 **/
const UserHistory = () => (
  <Container>
    <Smile colorUp={colors.red} colorDown={colors.linen} height='100px' />
    <Body>
      <InSmile height='100px'>
        <BackContainer onClick={() => window.location.replace('/')}>
          <BackButton color={colors.white} thickness={4} size={5} />
          <HistoryIcon />
        </BackContainer>
        <HeaderText>History</HeaderText>
      </InSmile>
      <Content>
        <GameTile>
          <GameHeader result='win'>
            <GameResult>Victory</GameResult>
            <GameTime>3 hours ago</GameTime>
          </GameHeader>
          <Players>
            <PlayerInfo>
              <Name who='opponent'>Leopold</Name>
              <Row>
                <ProfileImage image={profile} />
                <Hexagon
                  text='8'
                  mainColor={colors.blue}
                  size={30}
                />
              </Row>
              <Row>
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
              </Row>
            </PlayerInfo>
            <SwordContainer>
              <Clock></Clock>
              <Sword></Sword>
            </SwordContainer>
            <PlayerInfo>
              <Name who='me'>Knorcedger</Name>
              <Row>
                <Hexagon
                  text='8'
                  mainColor={colors.blue}
                  size={30}
                />
                <ProfileImage image={profile2} />
              </Row>
              <Row>
                <Hexagon
                  bar={true}
                  barColor={colors.green}
                  barPercent={0}
                  barSize={80}
                  barText='1543'
                  image={trophy}
                  mainColor={colors.green}
                  size={30}
                />
              </Row>
            </PlayerInfo>
          </Players>
        </GameTile>
        <GameTile>
          <GameHeader result='loss'>
            <GameResult>Defeat</GameResult>
            <GameTime>1 day ago</GameTime>
          </GameHeader>
          <Players>
            <PlayerInfo>
              <Name who='opponent'>Leopold</Name>
              <Row>
                <ProfileImage image={profile} />
                <Hexagon
                  text='8'
                  mainColor={colors.blue}
                  size={30}
                />
              </Row>
              <Row>
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
              </Row>
            </PlayerInfo>
            <SwordContainer>
              <Sword></Sword>
            </SwordContainer>
            <PlayerInfo>
              <Name who='me'>Knorcedger</Name>
              <Row>
                <Hexagon
                  text='7'
                  mainColor={colors.blue}
                  size={30}
                />
                <ProfileImage image={profile2} />
              </Row>
              <Row>
                <Hexagon
                  bar={true}
                  barColor={colors.green}
                  barPercent={0}
                  barSize={80}
                  barText='1543'
                  image={trophy}
                  mainColor={colors.green}
                  size={30}
                />
              </Row>
            </PlayerInfo>
          </Players>
        </GameTile>
      </Content>
    </Body>
  </Container>
);

export default UserHistory;
