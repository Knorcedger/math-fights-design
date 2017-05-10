import React, {Component} from 'react';
import Smile from '../components/Smile/Smile';
import BackButton from '../components/BackButton/BackButton';
import Hexagon from '../components/Hexagon/Hexagon';
import photo from '../assets/images/mark.jpg';
// http://www.flaticon.com/free-icon/trophy_321773
import trophy from '../assets/images/trophy.svg';
import colors from '../modules/colors';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${colors.red};
  overflow: hidden;
`;

const Cup = styled.div`{
  height: 50px;
  width: 50px;
  background: url(${trophy}) no-repeat;
  margin-left: 10px;
}`;

const BackButtonContainer = styled.div`{
  position: relative;
  top: 35px;
  z-index: 1;
  margin-left: 10px;
}`;

const LeaderboardText = styled.div`
  font-size: 22px;
  color: white;
  top: 15px;
  position: relative;
`;

const Body = styled.div`
  background: linen;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const List = styled.div`
  justify-content: space-between;
  width: 96%;
  margin-left: 2%;
`;
const Item = styled.div`
  display: flex;
  border-bottom: 1px;
  border-color: ${colors.red};
  border-bottom-style: solid;
  padding: 10px 0;

  div {
    display: flex;
    align-items: center;
  }
`;

const Rank = styled.div`{
  width: 10%;
  justify-content: flex-end;
  margin-right: 10px;
  margin-left: 10px;
  font-size: 22px;
}`;

const ProfileImage = styled.div`{
  margin-right: 10px;
  width: 10%;
  img {
    border-radius: 7px;
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

    let data = [];
    for (let i = 0; i < 20; i++) {
      data.push({
        name: 'Marios' + Math.floor(Math.random() * 2017),
        points: 1500 - i,
        xp: Math.floor(Math.random() * (20 - 10)) + 10
      });
    }

    this.state = {data: data};
  }

    /**
    * Render the leaderboard view to the user's screen
    * @return {object} the view displayed
    **/
  render() {
    return (
      <Container>
        <BackButtonContainer>
          <BackButton color='white' weigth={4} size={5}/>
        </BackButtonContainer>
        <Smile childrenPosition='space-around' colorUp={colors.red} colorDown={colors.linen}>
          <Cup/>
          <LeaderboardText>Leaderboard</LeaderboardText>
        </Smile>
        <Body>
          <List>
            {
              this.state.data.map((item, index) => {
                return (
                  <Item>
                    <Rank>{index + 1}</Rank>
                    <ProfileImage><img src={photo} width='40' alt='t' /></ProfileImage>
                    <XPContainer>
                      <Hexagon
                        mainColor={colors.blue}
                        size={30}
                        text={item.xp.toString()}>
                      </Hexagon>
                    </XPContainer>
                    <Username>{item.name}</Username>
                    <LeaguePoints>{item.points}</LeaguePoints>
                  </Item>
                );
              })
            }
          </List>
        </Body>
      </Container>
    );
  }
}

export default Leaderboard;
