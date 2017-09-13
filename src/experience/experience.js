import React from 'react';
import styled from 'styled-components';

// components
import Smile from '../components/Smile/Smile';

// assets
import shop from '../assets/images/shop.svg';

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
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  background-color: ${colors.red};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.div`
  font-size: 20px;
  color: ${colors.gray};
  margin: 20px 0 0 0;
`;

const HeaderSubText = styled.div`
  font-size: 16px;
  color: ${colors.gray};
  margin: 10px 0 0 0;
`;

const TileList = styled.div`
  width: 90%;
  margin: 10px 0 30px 0;
  display: flex;
  justify-content: space-between;
`;

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.lightBlue};
  border: 2px solid ${colors.darkBlue};
  border-radius: 10px;
  padding: 10px;
  width: 40%;
`;

const Icon = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: url(${props => props.icon}) no-repeat;
`;

const Title = styled.div`
  font-size: 20px;
  color: ${colors.darkBlue};
  margin: 10px 0;
`;

const Age = styled.div`
  font-size: 14px;
  color: ${colors.gray};
`;

 /**
  * This is the leaderboard view
  **/
const Experience = () => (
  <Container>
    <Smile colorUp={colors.linen} colorDown={colors.red} height='120px' />
    <Body>
      <InSmile height='120px'>
        <HeaderText>Choose your math destiny</HeaderText>
        <HeaderSubText>...and the questions difficulty :)</HeaderSubText>
      </InSmile>
      <Content>
        <TileList>
          <Tile>
            <Icon icon={shop} size={80} />
            <Title>Junior</Title>
            <Age>Age &lt; 8</Age>
          </Tile>
          <Tile>
            <Icon icon={shop} size={80} />
            <Title>Senior</Title>
            <Age>Age 8-12</Age>
          </Tile>
        </TileList>
        <TileList>
          <Tile>
            <Icon icon={shop} size={80} />
            <Title>Veteran</Title>
          </Tile>
          <Tile>
            <Icon icon={shop} size={80} />
            <Title>Master</Title>
          </Tile>
        </TileList>
      </Content>
    </Body>
  </Container>
);

export default Experience;
