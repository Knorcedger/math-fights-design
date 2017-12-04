import React from 'react';
import styled from 'styled-components';

// components
import Hexagon from '../components/Hexagon/Hexagon';
import Button from '../components/Button/Button';

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

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  height: 80px;
  width: 100%;
  z-index: 10;
  background-color: ${colors.linen};
  border-top: 2px solid ${colors.gray4};
  display: flex;
  justify-content: center;
  align-items: center;
`;

/**
 * Ranks View
 */
const Ranks = () => (
  <Container>
    <Body>
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
      <Footer>
        <Button
          backgroundColor={colors.blue}
          borderColor={colors.darkBlue}
          onClick={() => window.location.replace('/home')}
          text='Close'
          textColor={colors.white}
          width={140}
        />
      </Footer>
    </Body>
  </Container>
);

export default Ranks;
