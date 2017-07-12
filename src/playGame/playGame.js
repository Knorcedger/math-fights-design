import React from 'react';
import styled from 'styled-components';

// components
import Button from '../components/Button/Button';
import Hexagon from '../components/Hexagon/Hexagon';
import Smile from '../components/Smile/Smile';

// assets
import trophy from '../assets/images/trophy.svg';
import coin from '../assets/images/coin.svg';

// modules
import colors from '../modules/colors';

const Container = styled.div`
`;

const Body = styled.div`
  overflow-x: hidden;
  position: relative;
`;

const InSmile = styled.div`
  height: ${props => props.height};
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
`;

const Content = styled.div`
  background-color: ${colors.red};
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
`;

const OpponentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const InfoRowEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
`;

const Name = styled.div`
  padding-left: 10px;
`;

const ContentBackground = styled.div`
  background-color: ${colors.gray3};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
`;

const Question = styled.div`
  display: flex;
  justify-content: center;
  font-size: 40px;
  color: ${colors.white}
`;

const ButtonArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: space-between;
  flex-direction: column;
  width: 100%;

  > div {
    margin-top: 10px;
  }
`;

/**
* PlayGame View
**/
const PlayGame = () => (
  <Container>
    <Smile colorUp={colors.linen} colorDown={colors.red} height='240px' />
    <Body>
      <InSmile height='240px'>
        <OpponentInfo>
          <InfoRow>
            <Hexagon
              mainColor={colors.blue}
              size={30}
              text='14'
            />
            <Name>
              Leopold
            </Name>
          </InfoRow>
          <InfoRow>
            <Hexagon
              bar={true}
              barColor={colors.green}
              barContent={1535}
              barPercent={0}
              barSize={80}
              barText='1535'
              image={trophy}
              mainColor={colors.green}
              size={30}
            />
          </InfoRow>
          <InfoRowEnd>
            <Hexagon
              mainColor={colors.red}
              size={30}
              text='-28'
            />
          </InfoRowEnd>
        </OpponentInfo>
        <MyInfo>
          <InfoRow>
            <Hexagon
              mainColor={colors.blue}
              size={30}
              text='14'
            />
            <Name>
              Knorcedger
            </Name>
          </InfoRow>
          <InfoRow>
            <Hexagon
              bar={true}
              barColor={colors.darkRed}
              barPercent={0}
              barSize={80}
              barText='12632'
              image={coin}
              mainColor={colors.darkRed}
              size={30}
            />
          </InfoRow>
          <InfoRow>
            <Hexagon
              mainColor={colors.green}
              size={30}
              text='+22'
            />
          </InfoRow>
        </MyInfo>
      </InSmile>
      <Content>
        <ContentBackground>
          <Question>
            7 + 4
          </Question>
          <ButtonArea>
            <Button
              backgroundColor={colors.linen}
              borderColor={colors.gray}
              text='11'
              textColor={colors.gray}
              width={180}
              onClick={() => {}}
            />
            <Button
              backgroundColor={colors.linen}
              borderColor={colors.gray}
              text='11'
              textColor={colors.gray}
              width={180}
              onClick={() => {}}
            />
            <Button
              backgroundColor={colors.linen}
              borderColor={colors.gray}
              text='11'
              textColor={colors.gray}
              width={180}
              onClick={() => {}}
            />
            <Button
              backgroundColor={colors.linen}
              borderColor={colors.gray}
              text='11'
              textColor={colors.gray}
              width={180}
              onClick={() => {}}
            />
          </ButtonArea>
        </ContentBackground>
      </Content>
    </Body>
  </Container>
);

export default PlayGame;
