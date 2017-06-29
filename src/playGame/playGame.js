import React from 'react';
import PropTypes from 'prop-types';
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
  background-color: linen;
  overflow-x: hidden;
`;
const Header = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
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
`;

const Name = styled.div`
  padding-left: 10px;
`;

const Question = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  height: 40px;
  font-size: 40px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Body = styled.div`
  background-color: ${colors.red};
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

/**
* Home View
**/
const Home = () => (
  <Container>
    <Header>
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
        <Hexagon
          bar={true}
          barColor={colors.gray1}
          barContent={1535}
          barPercent={0}
          barSize={80}
          image={trophy}
          mainColor={colors.gray}
          size={30}
        />
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
            barColor={colors.gray1}
            barContent={1535}
            barPercent={0}
            barSize={80}
            image={trophy}
            mainColor={colors.gray}
            size={30}
          />
          <Hexagon
            bar={true}
            barColor={colors.gray1}
            barContent={1535}
            barPercent={0}
            barSize={80}
            image={coin}
            mainColor={colors.gray}
            size={30}
          />
        </InfoRow>
        <InfoRow>
          <Hexagon
            bar={true}
            barColor={colors.gray1}
            barContent={23}
            barPercent={0}
            barSize={80}
            mainColor={colors.green}
            size={30}
            text='+'
          />
          <Hexagon
            bar={true}
            barColor={colors.gray1}
            barContent={27}
            barPercent={0}
            barSize={80}
            mainColor={colors.red}
            size={30}
            text='-'
          />
        </InfoRow>
      </MyInfo>
    </Header>
    <Question>
      7 + 4
    </Question>
    <Smile colorUp={colors.linen} colorDown={colors.red} />
    <Body>
      <ButtonRow>
        <Button
          backgroundColor={colors.yellow}
          borderColor={colors.gray}
          text='11'
          textColor={colors.gray}
          width={140}
          onClick={() => {}}
        />
        <Button
          backgroundColor={colors.yellow}
          borderColor={colors.gray}
          text='11'
          textColor={colors.gray}
          width={140}
          onClick={() => {}}
        />
      </ButtonRow>
      <ButtonRow>
        <Button
          backgroundColor={colors.yellow}
          borderColor={colors.gray}
          text='11'
          textColor={colors.gray}
          width={140}
          onClick={() => {}}
        />
        <Button
          backgroundColor={colors.yellow}
          borderColor={colors.gray}
          text='11'
          textColor={colors.gray}
          width={140}
          onClick={() => {}}
        />
      </ButtonRow>
    </Body>
  </Container>
);

Home.contextTypes = {
  history: PropTypes.object
};

export default Home;
