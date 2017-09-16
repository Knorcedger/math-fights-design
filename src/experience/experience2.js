import React from 'react';
import styled from 'styled-components';

// components
import BackButton from '../components/BackButton/BackButton';
import Button from '../components/Button/Button';
import ExperienceTile from '../components/ExperienceTile/ExperienceTile';
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
  background-color: ${colors.linen};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const BackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin: 0 0 20px 30px;
  width: 100%;
  height: 70px;
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

const NameTitle = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border-radius: 4px;
  border: 2px solid ${colors.gray};
  width: 100%;
  padding: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
`;

 /**
  * This is the leaderboard view
  **/
const Experience = () => (
  <Container>
    <Smile colorUp={colors.red} colorDown={colors.linen} height='400px' />
    <Body>
      <InSmile height='400px'>
        <BackContainer onClick={() => window.location.replace('/')}>
          <BackButton color={colors.white} thickness={4} size={5} />
        </BackContainer>
        <ExperienceTile
          title='Junior'
          age='Age &lt; 8'
          icon={shop}
          iconSize={80}
        />
      </InSmile>
      <Content>
        <NameContainer>
          <NameTitle>Your Username</NameTitle>
          <Input placeholder='Username' />
        </NameContainer>
        <ButtonContainer>
          <Button
            backgroundColor={colors.red}
            borderColor={colors.gray}
            text='Back'
            textColor={colors.white}
            width={100}
            onClick={() => {}}
          />
          <Button
            backgroundColor={colors.green}
            borderColor={colors.gray}
            text='Save'
            textColor={colors.white}
            width={100}
            onClick={() => {}}
          />
        </ButtonContainer>
      </Content>
    </Body>
  </Container>
);

export default Experience;
