import React, {Component} from 'react';
import Smile from '../components/Smile/Smile';
import XP from '../components/XP/XP';
import photo from '../assets/images/mark.jpg';
// http://www.flaticon.com/free-icon/trophy_321773
import trophy from '../assets/images/trophy.svg';
import colors from '../modules/colors';
import styled from 'styled-components';
import logo from '../assets/images/sword.svg';

const Container = styled.div`
  background-color: ${colors.red};
  overflow: hidden;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    margin-top: 20px;
  }
`;
const List = styled.div`
  justify-content: space-between;
  width: 100%;
`;
const Item = styled.div`
  display: flex;
  div:nth-child(1) {
    width: 10%;
    display: flex;
    justify-content: flex-end;
    align-self: center;
    padding-right: 5px;
    font-size: 22px;
  }
  div:nth-child(2) {
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
  }
  div:nth-child(5) {
    font-weight: bold;
    color: ${colors.red};
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
      <Logo>
        <div/>
      </Logo>
      <Smile colorUp={colors.red} colorDown={colors.linen} />
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
