import React, {Component} from 'react';
import Smile from '../components/Smile/Smile';
import XP from '../components/XP/XP';
import photo from '../assets/images/mark.jpg';
// http://www.flaticon.com/free-icon/trophy_321773
import trophy from '../assets/images/trophy.svg';
import colors from '../modules/colors';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${colors.red};
  overflow: hidden;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  font-size: 18px;
  margin-top: 20px;
`;

const Cup = styled.div`{
  height: 50px;
  width: 50px;
  background: url(${trophy}) no-repeat;
}`;

const LeaderboardText = styled.div`
  font-size: 22px;
  color: white;
  top: 15px;
  position: relative;
`;

const Body = styled.div`
  background-color: linen;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin-bottom: 15px;
  }
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
  div {
    display: flex;
    align-items: center;
  }
  div:nth-child(1) {
    width: 10%;
    justify-content: flex-end;
    margin-right: 10px;
    margin-left: 10px;
    font-size: 22px;
  }
  div:nth-child(2) {
    margin-right: 10px;
    width: 10%;
    img {
      border-radius: 7px;
    }
  }
  div:nth-child(3) {
    width: 10%;
  }
  div:nth-child(4) {
    width: 60%;
    margin-left: 10px;
    font-size: 18px;
    overflow-x: hidden;
    margin-right: 5px;
  }
  div:nth-child(5) {
    font-weight: bold;
    color: ${colors.red};
    margin-right: 20px;
    font-size: 22px;
  }
`;
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
        <Header>
        </Header>
        <div>Back</div>
        <Smile childrenPosition='space-around' colorUp={colors.red} colorDown={colors.linen}>
          <Cup/>
          <LeaderboardText> Leaderboard </LeaderboardText>
        </Smile>
        <Body>
          <List>
            {
                this.state.data.map((item, index) => {
                  return (
                    <Item>
                      <div>{index + 1}</div>
                      <div> <img src={photo} width='40' alt='t' /></div>
                      <div> <XP level={item.xp} /></div>
                      <div>{item.name}</div>
                      <div>{item.points}</div>
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
