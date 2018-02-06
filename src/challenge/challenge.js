import React, {Component} from 'react';
import styled from 'styled-components';

// components
import BackButton from '../components/BackButton/BackButton';
import Hexagon from '../components/Hexagon/Hexagon';
import Smile from '../components/Smile/Smile';
import Button from '../components/Button/Button';
import Fight from '../components/Fight/Fight';

// assets
import profile from '../assets/images/tasos.jpg';
import profile2 from '../assets/images/tasos2.jpg';
// http://www.flaticon.com/free-icon/trophy_321773
import trophy from '../assets/images/trophy.svg';

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
  justify-content: space-between;
`;

const Content = styled.div`
  background-color: linen;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Cup = styled.div`
  height: 50px;
  width: 50px;
  background: url(${trophy}) no-repeat;
  margin-left: 10px;
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
  color: ${colors.white};
  margin: 20px 10px 0 0;
`;

const List = styled.div`
  width: 100%;
  background-color: ${colors.linen};
`;

const Item = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.red};
  padding: 8px 0;
`;

const Rank = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 10%;
  margin: 0 10px;
  font-size: 22px;
  color: ${colors.gray};
  text-align: left;
`;

const ProfileImage2 = styled.div`
  margin-right: 14px;
  width: 10%;
  display: flex;
  align-items: center;

  img {
    border-radius: 50px;
  }
`;

const XPContainer = styled.div`
  width: 10%;
  align-self: center;
`;

const Username = styled.div`
  width: 60%;
  align-self: center;
  margin-left: 10px;
  font-size: 18px;
  overflow-x: hidden;
  margin-right: 5px;
  color: ${colors.gray};
  white-space: nowrap;
`;

const LeaguePoints = styled.div`
  font-weight: bold;
  display: flex;
  align-self: center;
  color: ${colors.red};
  margin: 4px 20px 0 0;
  font-size: 22px;
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${colors.gray4};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: ${colors.linen};
  width: 80%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 20px 20px;
  position: relative;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: space-around;
  justify-content: space-around;
`;

/**
 * The challenge modal, can appear in any view except PlayGame
 */
class Challenge extends Component {
  constructor(props) {
    super(props);

    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push({
        name: `Marios${Math.floor(Math.random() * 2017)}`,
        points: 1500 - i,
        xp: Math.floor(Math.random() * (20 - 10)) + 10
      });
    }

    this.state = {data};
  }

  render() {
    return (
      <Container>
        <Smile colorUp={colors.red} colorDown={colors.linen} height='100px' />
        <Body>
          <InSmile height='100px'>
            <BackContainer onClick={() => window.location.replace('/')}>
              <BackButton color={colors.white} thickness={4} size={5} />
              <Cup />
            </BackContainer>
            <HeaderText>Leaderboard</HeaderText>
          </InSmile>
          <Content>
            <List>
              {
                this.state.data.map((item, index) => (
                  <Item key={item.name + item.points}>
                    <Rank>{index + 1}</Rank>
                    <ProfileImage2><img src={profile} width='40' alt='t' /></ProfileImage2>
                    <XPContainer>
                      <Hexagon
                        mainColor={colors.blue}
                        size={30}
                        text={item.xp.toString()}
                      />
                    </XPContainer>
                    <Username>{item.name}</Username>
                    <LeaguePoints>{item.points}</LeaguePoints>
                  </Item>
                ))
              }
            </List>
          </Content>
        </Body>
        <Modal>
          <ModalContent>
            <Fight
              headerBackgroundColor={colors.blue}
              showClock={false}
              title='Friendly Challenge'
              user1Image={profile}
              user1Name='Knorcedger'
              user1Trophies={1535}
              user2Image={profile2}
              user2Name='Leopold'
              user2Trophies={1543}
            />
            <ButtonWrapper>
              <Button
                backgroundColor={colors.red}
                borderColor={colors.gray}
                text='Reject'
                textColor={colors.white}
                width={80}
                onClick={() => {}}
              />
              <Button
                backgroundColor={colors.green}
                borderColor={colors.gray}
                text='Accept'
                textColor={colors.white}
                width={80}
                onClick={() => {}}
              />
            </ButtonWrapper>
          </ModalContent>
        </Modal>
      </Container>
    );
  }
}

export default Challenge;
