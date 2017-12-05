import React from 'react';
import styled from 'styled-components';

// components
import Hexagon from '../components/Hexagon/Hexagon';
import Button from '../components/Button/Button';
import Smile from '../components/Smile/Smile';
import BackButton from '../components/BackButton/BackButton';

// assets
import trophy from '../assets/images/trophy.svg';
import base from '../assets/images/BASE.png';
import hexagon from '../assets/images/HEXAGON.png';
import root from '../assets/images/ROOT.png';
import odds from '../assets/images/ODDS_2.png';

// modules
import colors from '../modules/colors';

const Container = styled.div`
  background-color: linen;
  overflow-x: hidden;
`;

const Body = styled.div`
  height: 100%;
  position: relative;
  top: 100px;
`;

const SmileWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 20;
`;

const InSmile = styled.div`
  width: 100%;
  height: ${props => props.height};
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 30;
  top: 0;
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
  color: ${colors.red};
  margin: 20px 10px 0 0;
  z-index: 1;
`;

const RanksContainer = styled.div`
  background-color: ${colors.red};
  height: 1200px;
  overflow-y: scroll;
`;

const Rank = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: ${props => props.width}%;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: {props => props.align === 'center' && 'center' || 'flex-start'};
  flex-direction: column;
`;

const Title = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: ${colors.white};
  margin-bottom: 20px;
`;

const RankImage = styled.div`
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 300px;
  width: 100%;
`;

/**
 * Ranks View
 */
const Ranks = () => (
  <Container>
    <SmileWrapper>
      <Smile colorUp={colors.linen} colorDown={colors.red} height='100px' />
    </SmileWrapper>
    <Body>
      <InSmile height='100px'>
        <BackContainer onClick={() => window.location.replace('/')}>
          <BackButton color={colors.red} thickness={4} size={5} />
        </BackContainer>
        <HeaderText>Ranks</HeaderText>
      </InSmile>
      <RanksContainer>
        <Rank>
          <Wrapper width={65} align='center'>
            <RankImage image={base} />
          </Wrapper>
          <Wrapper width={35} align='left'>
            <Title>Rank 1</Title>
            <Hexagon
              bar={true}
              barColor={colors.green}
              barPercent={0}
              barSize={80}
              barText='0+'
              mainColor={colors.green}
              image={trophy}
              size={30}
            />
          </Wrapper>
        </Rank>
        <Rank>
          <Wrapper width={65}>
            <RankImage image={hexagon} />
          </Wrapper>
          <Wrapper width={35}>
            <Title>Rank 2</Title>
            <Hexagon
              bar={true}
              barColor={colors.green}
              barPercent={0}
              barSize={80}
              barText='300+'
              mainColor={colors.green}
              image={trophy}
              size={30}
            />
          </Wrapper>
        </Rank>
        <Rank>
          <Wrapper width={65}>
            <RankImage image={root} />
          </Wrapper>
          <Wrapper width={35}>
            <Title>Rank 3</Title>
            <Hexagon
              bar={true}
              barColor={colors.green}
              barPercent={0}
              barSize={80}
              barText='600+'
              mainColor={colors.green}
              image={trophy}
              size={30}
            />
          </Wrapper>
        </Rank>
        <Rank>
          <Wrapper width={65}>
            <RankImage image={odds} />
          </Wrapper>
          <Wrapper width={35}>
            <Title>Rank 4</Title>
            <Hexagon
              bar={true}
              barColor={colors.green}
              barPercent={0}
              barSize={80}
              barText='900+'
              mainColor={colors.green}
              image={trophy}
              size={30}
            />
          </Wrapper>
        </Rank>
      </RanksContainer>
    </Body>
  </Container>
);

export default Ranks;
