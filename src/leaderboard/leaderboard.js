import React, {Component} from 'react';
import styled from 'styled-components';

// components
import BackButton from '../components/BackButton/BackButton';
import Hexagon from '../components/Hexagon/Hexagon';
import Smile from '../components/Smile/Smile';

// assets
import photo from '../assets/images/mark.jpg';
// http://www.flaticon.com/free-icon/trophy_321773
import trophy from '../assets/images/trophy.svg';

// modules
import colors from '../modules/colors';

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const Cup = styled.div`{
  height: 50px;
  width: 50px;
  background: url(${trophy}) no-repeat;
  margin-left: 10px;
}`;

const BackButtonContainer = styled.div`{
  display: flex;
  align-items: center;
  align-self: flex-start;
  z-index: 1;
  margin: 10px 0 0 14px;
}`;

const HeaderText = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: ${colors.white};
  margin: 20px 10px 0 0;
`;

const List = styled.div`
  background-color: ${colors.linen};
`;

const Item = styled.div`
  display: flex;
  border-bottom: 1px solid ${colors.red};
  padding: 10px 0;

  div {
    display: flex;
    align-items: center;
  }
`;

const Rank = styled.div`{
  display: flex;
  justify-content: center;
  width: 10%;
  margin: 0 10px;
  font-size: 22px;
  color: ${colors.gray};
  text-align: left;
}`;

const ProfileImage = styled.div`{
  margin-right: 14px;
  width: 10%;

  img {
    border-radius: 50px;
  }
}`;

const XPContainer = styled.div`{
  width: 10%;
}`;

const Username = styled.div` {
  width: 60%;
  margin-left: 10px;
  font-size: 18px;
  overflow-x: hidden;
  margin-right: 5px;
  color: ${colors.gray};
  white-space: nowrap;
}`;

const LeaguePoints = styled.div` {
  font-weight: bold;
  color: ${colors.red};
  margin-right: 20px;
  font-size: 22px;
}`;

 /**
  * This is the leaderboard view
  **/
class Leaderboard extends Component {
  /**
  * The constructor of Leaderboard View
  * @param {object} props props
  *
  * {object} leaderboard The leaderboard that displayed
  **/
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

    /**
    * Render the leaderboard view to the user's screen
    * @return {object} the view displayed
    **/
  render() {
    return (
      <Container>
        <Smile colorUp={colors.red} colorDown={colors.linen} />
        <BackButtonContainer onClick={() => window.location.replace('/')}>
          <BackButton color={colors.white} thickness={4} size={5} />
          <Cup />
        </BackButtonContainer>
        <HeaderText>Leaderboard</HeaderText>
        <List>
          {
            this.state.data.map((item, index) => (
              <Item key={item.name + item.points}>
                <Rank>{index + 1}</Rank>
                <ProfileImage><img src={photo} width='40' alt='t' /></ProfileImage>
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
      </Container>
    );
  }
}

export default Leaderboard;
