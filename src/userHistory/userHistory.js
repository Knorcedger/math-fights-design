import React from 'react';
import styled from 'styled-components';

// components
import BackButton from '../components/BackButton/BackButton';
import Smile from '../components/Smile/Smile';
import Fight from '../components/Fight/Fight';

// assets
import history from '../assets/images/history.svg';
import profile from '../assets/images/tasos.jpg';
import profile2 from '../assets/images/tasos2.jpg';

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

const HistoryIcon = styled.div`
  height: 50px;
  width: 50px;
  background: url(${history}) no-repeat;
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

const UserHistory = () => (
  <Container>
    <Smile colorUp={colors.red} colorDown={colors.linen} height='100px' />
    <Body>
      <InSmile height='100px'>
        <BackContainer onClick={() => window.location.replace('/')}>
          <BackButton color={colors.white} thickness={4} size={5} />
          <HistoryIcon />
        </BackContainer>
        <HeaderText>History</HeaderText>
      </InSmile>
      <Content>
        <Fight
          headerBackgroundColor={colors.green}
          showClock={true}
          time='3 hours ago'
          title='Victory'
          user1Image={profile}
          user1Name='Knorcedger'
          user1Score={8}
          user1Trophies={1535}
          user2Image={profile2}
          user2Name='Leopold'
          user2Score={8}
          user2Trophies={1543}
        />
        <Fight
          headerBackgroundColor={colors.red}
          showClock={false}
          time='1 day ago'
          title='Defeat'
          user1Image={profile}
          user1Name='Knorcedger'
          user1Score={7}
          user1Trophies={1562}
          user2Image={profile2}
          user2Name='Leopold'
          user2Score={8}
          user2Trophies={1546}
        />
      </Content>
    </Body>
  </Container>
);

export default UserHistory;
