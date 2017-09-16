import React from 'react';
import styled from 'styled-components';

// components
import Button from '../components/Button/Button';
import Hexagon from '../components/Hexagon/Hexagon';
import Smile from '../components/Smile/Smile';

// assets
import coin from '../assets/images/coin.svg';
import diamond from '../assets/images/diamond.svg';
import logo from '../assets/images/logo.png';
import rays from '../assets/images/rays.png';

// modules
import colors from '../modules/colors';

const Container = styled.div`
  background-color: ${colors.red};
  overflow-x: hidden;
`;

const Body = styled.div`
  position: relative;
`;

const InSmile = styled.div`
  width: 100%;
  height: ${props => props.height};
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  background-color: linen;
  background-image: url(${rays});
  background-repeat: no-repeat;
  background-position: center;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 10vh;
  padding-bottom: 20px;
`;

const Header = styled.div`
  font-size: 40px;
  color: ${colors.white};
  margin-top: 20px;
`;

const Info = styled.div`
  font-size: 30px;
  color: ${colors.darkBlue};
  margin-bottom: 50px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
`;

const Logo = styled.div`
  background: url(${logo});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
`;

const RewardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 50px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 140px;
  margin-top: 80px;
`;

/**
 * This is the initial view that will run and check if the user is already loggd in:
 */
const AchievementUp = () => (
  <Container>
    <Smile colorUp={colors.red} colorDown={colors.linen} height='120px' />
    <Body>
      <InSmile height='120px'>
        <Header>Congratulations</Header>
      </InSmile>
      <Content>
        <Info>500 Wins</Info>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <RewardContainer>
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
          <Hexagon
            bar={true}
            barColor={colors.green}
            barPercent={0}
            barSize={80}
            barText='+10'
            image={diamond}
            mainColor={colors.green}
            size={30}
          />
        </RewardContainer>
        <ButtonWrapper>
          <Button
            backgroundColor={colors.blue}
            text='OK!'
            textColor={colors.white}
            width={180}
            onClick={() => {}}
          />
        </ButtonWrapper>
      </Content>
    </Body>
  </Container>
);

export default AchievementUp;
