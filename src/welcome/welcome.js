import React from 'react';
import styled from 'styled-components';

// components
import Button from '../components/Button/Button';
import Smile from '../components/Smile/Smile';

// assets
import logo from '../assets/images/logo.png';

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
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 10vh;

  div:nth-child(1) {
    margin-bottom: 20px;
  }
`;

const Logo = styled.div`
  width: 140px;
  height: 140px;
  background: url(${logo});
  background-size: contain;
  margin-top: 20px;
`;

/**
 * This is the initial view that will run and check if the user is already loggd in:
 */
const Welcome = () => (
  <Container>
    <Smile colorUp={colors.red} colorDown={colors.linen} height='240px' />
    <Body>
      <InSmile height='240px'>
        <Logo />
      </InSmile>
      <Content>
        <Button
          backgroundColor={colors.blue}
          text='Login with facebook'
          textColor={colors.white}
          width={180}
          onClick={() => {}}
        />
        <Button
          backgroundColor={colors.red}
          text='Login with email'
          textColor={colors.white}
          width={180}
          onClick={() => {}}
        />
      </Content>
    </Body>
  </Container>
);

export default Welcome;
