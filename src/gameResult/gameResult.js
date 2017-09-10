import React from 'react';
import styled from 'styled-components';

// components
import Button from '../components/Button/Button';
import Hexagon from '../components/Hexagon/Hexagon';
import Smile from '../components/Smile/Smile';

// assets
import trophy from '../assets/images/trophy.svg';
import coin from '../assets/images/coin.svg';
import profile from '../assets/images/tasos.jpg';
import profile2 from '../assets/images/tasos2.jpg';
import clock from '../assets/images/time.png';

// modules
import colors from '../modules/colors';

const Container = styled.div`
`;

const Body = styled.div`
  position: relative;
  overflow-x: hidden;
`;

const InSmile = styled.div`
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 0 10px;
  overflow-x: hidden;
`;

const Content = styled.div`
  background-color: ${colors.linen};
  height: 600px;
  display: flex;
  flex-direction: column;
  min-height: 10vh;
`;

const Result = styled.div`
  font-size: 50px;
  color: ${colors.linen};
  margin-top: 14px;
`;

const PlayerInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const OpponentInfo = styled.div`
  width: 50%;
`;

const MyInfo = styled.div`
  width: 50%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`;

const ClockImage = styled.div`
  position: absolute;
  top: 160px;
  opacity: 0.5;
  width: 40px;
  height: 40px;
  background: url(${clock});
  background-size: contain;
`;

const ProfileImage = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background: url(${props => props.image});
  background-size: contain;
`;

const OpponentName = styled.div`
  font-size: 20px;
  text-align: left;
  padding-left: 10px;
`;

const MyName = styled.div`
  font-size: 20px;
  text-align: right;
  padding-right: 10px;
`;

const Rewards = styled.div`
  background-color: ${colors.gray1};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 10px 20px;
  width: 80%;
  align-self: center;
`;

const RewardList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    margin-top: 30px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  color: ${colors.white}
`;

const ButtonArea = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

/**
 * PlayGame View
 **/
const GameResult = () => (
  <Container>
    <Smile colorUp={colors.blue} colorDown={colors.linen} height='120px' />
    <Body>
      <InSmile height='120px'>
        <Result>Victory</Result>
        <ClockImage />
      </InSmile>
      <Content>
        <PlayerInfo>
          <OpponentInfo>
            <OpponentName>Leopold</OpponentName>
            <Row>
              <ProfileImage image={profile} />
              <Hexagon
                text='8'
                mainColor={colors.blue}
                size={30}
              />
            </Row>
          </OpponentInfo>
          <MyInfo>
            <MyName>Knorcedger</MyName>
            <Row>
              <Hexagon
                text='8'
                mainColor={colors.blue}
                size={30}
              />
              <ProfileImage image={profile2} />
            </Row>
          </MyInfo>
        </PlayerInfo>
        <Rewards>
          <Title>Rewards</Title>
          <RewardList>
            <Hexagon
              bar={true}
              barColor={colors.lightBlue}
              barPercent={30}
              barSize={80}
              barText='+12'
              mainColor={colors.blue}
              size={30}
              text='14'
            />
            <Hexagon
              bar={true}
              barColor={colors.green}
              barPercent={0}
              barSize={80}
              barText='+28'
              image={trophy}
              mainColor={colors.green}
              size={30}
            />
            <Hexagon
              bar={true}
              barColor={colors.green}
              barPercent={0}
              barSize={80}
              barText='+34'
              image={coin}
              mainColor={colors.green}
              size={30}
            />
          </RewardList>
        </Rewards>
        <ButtonArea>
          <Button
            backgroundColor={colors.green}
            borderColor={colors.gray}
            text='OK'
            textColor={colors.linen}
            width={140}
            onClick={() => {}}
          />
        </ButtonArea>
      </Content>
    </Body>
  </Container>
);

export default GameResult;
