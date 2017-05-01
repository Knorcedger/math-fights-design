import React, {Component} from 'react';
import './welcome.css';
import Button from '../components/Button/Button';
import styled from 'styled-components';
import logo from '../assets/images/sword.svg';
import colors from '../modules/colors';

const Container = styled.div`
  background-color: ${colors.red};
  overflow-x: hidden;
`;
const Logo = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  background: linen;
  width: 25%;
  margin: auto;
  padding: 20px;
  border-radius: 20px;
  margin-top: 20px;
  border: 3px solid darkgray;
  div {
    border-radius: 50%;
    width: 80px;
    background: url(${logo});
    background-size: contain;
  }
`;

const Body = styled.div`
  background-color: linen;
  height: 308px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-bottom: 100px;
  div:nth-child(1) {
    margin-bottom: 20px;
  }
`;

/**
 * This is the initial view that will run and check if the user is already loggd in:
 **/
class Welcome extends Component {
/**
* Render the welcome view to the user's screen
* @return {object} the view displayed
**/
  render() {
    return (
      <Container>
        <Logo>
          <div/>
        </Logo>
        <div className='welcome-full-width-div'>
          <span className='welcome-semi-circle'></span>
        </div>
        <Body>
          <Button
            backgroundColor={colors.blue}
            text='Login with facebook'
            textColor={colors.white}
            width={180}
            onClick={() => {}}>
          </Button>
          <Button
            backgroundColor={colors.red}
            text='Login with email'
            textColor={colors.white}
            width={180}
            onClick={() => {}}>
          </Button>
        </Body>
      </Container>
    );
  }
}

export default Welcome;
