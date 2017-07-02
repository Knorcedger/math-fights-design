import React, {Component} from 'react';
import styled from 'styled-components';

// components
import Button from '../components/Button/Button';
import Smile from '../components/Smile/Smile';

// assets
import logo from '../assets/images/logo.png';

// modules
import colors from '../modules/colors';

const Container = styled.div`
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
`;

const Logo = styled.div`
  width: 140px;
  height: 140px;
  background: url(${logo});
  background-size: contain;
  margin-top: 20px;
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
  `}
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  align-items: center;

  input {
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
        <Smile colorUp={colors.red} colorDown={colors.linen} height='240px' />
        <Body>
          <InSmile height='240px'>
            <Logo />
          </InSmile>
          <Content>
            <Tabs>
              <Tab
                activeTab={this.state.activeTab}
                type='register'
                onClick={() => this.setState({activeTab: 'register'})}
              >
                Register
              </Tab>
              <Tab
                activeTab={this.state.activeTab}
                type='login'
                onClick={() => this.setState({activeTab: 'login'})}
              >
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

                      onClick={() => {}}
                    />
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
                      size='large'
                      onClick={() => {}}
                    />
                  </InputContainer>
                )
            }
          </Content>
        </Body>
      </Container>
    );
  }
}

export default Login;
