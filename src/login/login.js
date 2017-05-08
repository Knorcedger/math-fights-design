import React, {Component} from 'react';
import styled from 'styled-components';
import logo from '../assets/images/sword.svg';
import Button from '../components/Button/Button';
import Smile from '../components/Smile/Smile';
import colors from '../modules/colors';

const Container = styled.div`
  background-color: ${colors.red};
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
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin-top: 20px;
  }
`;

const Tabs = styled.div`
  width: 70%;
  height: 30px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
`;

const Tab = styled.div`
  text-align: center;
  font-size: 22px;
  ${props => props.activeTab === props.type && `
    border-bottom: 2px solid black;
    margin-bottom: -20px;
  `}
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  align-items: center;
  input:nth-child(1) {
    margin-bottom: 20px;
  }
`;

const Input = styled.input`
  border-radius: 4px;
  border: 1px solid ${colors.gray1};
  width: 70%;
  padding: 10px;
`;

/**
* User Login View
**/
class Login extends Component {
  /**
  * The constructor of UserLogin View
  * @param {object} props props
  **/
  constructor() {
    super();

    this.state = {
      /**
       * The tab that is active {register or login}
       * @type {String}
       */
      activeTab: 'register'
    };
  }
  /**
   * Render the login/register view to the user's screen
   * @return {object} the view displayed
  **/
  render() {
    return (
      <Container>
        <Logo>
          <div/>
        </Logo>
        <Smile colorUp={colors.red} colorDown={colors.linen} />
        <Body>
          <Tabs>
            <Tab
              activeTab={this.state.activeTab}
              type='register'
              onClick={() => this.setState({activeTab: 'register'})}>
              Register
            </Tab>
            <Tab
              activeTab={this.state.activeTab}
              type='login'
              onClick={() => this.setState({activeTab: 'login'})}>
              Login
            </Tab>
          </Tabs>
          {
            this.state.activeTab === 'login'
            ? (
              <InputContainer>
                <Input placeholder='Email' />
                <Input placeholder='Password' />
                <Button
                  backgroundColor={colors.red}
                  text='Login'
                  textColor={colors.white}
                  width={180}
                  onClick={() => {}}>
                </Button>
              </InputContainer>
            )
            : (
              <InputContainer>
                <Input placeholder='Email' />
                <Input placeholder='Password' />
                <Button
                  backgroundColor={colors.lightBlue}
                  text='Register'
                  textColor={colors.white}
                  width={180}
                  onClick={() => {}}>
                </Button>
              </InputContainer>
            )
          }
        </Body>
      </Container>
    );
  }
}

export default Login;
