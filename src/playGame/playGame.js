import React, {Component, PropTypes} from 'react';
import Button from '../components/Button/Button';
import Hexagon from '../components/Hexagon/Hexagon';
import Smile from '../components/Smile/Smile';
import trophy from '../assets/images/trophy.svg';
import coin from '../assets/images/coin.svg';
import styled from 'styled-components';
import colors from '../modules/colors';

const Container = styled.div`
  background-color: linen;
  overflow-x: hidden;
`;
const Header = styled.div`
  padding: 10px 10px;
  display: flex;
  justify-content: space-between;
`;

const OpponentInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const MyInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  padding-left: 10px;
`;

const Question = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  height: 40px;
  font-size: 40px;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Body = styled.div`
  background-color: ${colors.red};
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

/**
* Home View
**/
class Home extends Component {
  /**
   * Render the home view to the user's screen
   * @return {object} the displayed view
  **/
  render() {
    return (
      <Container>
        <Header>
          <OpponentInfo>
            <InfoRow>
              <Hexagon
              mainColor={colors.blue}
              size={30}
              text='14'>
              </Hexagon>
              <Name>
                Leopold
              </Name>
            </InfoRow>
            <Hexagon
              bar={true}
              barColor={colors.gray1}
              barContent={1535}
              barPercent={0}
              barSize={80}
              image={trophy}
              mainColor={colors.gray}
              size={30}>
            </Hexagon>
          </OpponentInfo>
          <MyInfo>
            <InfoRow>
              <Hexagon
                mainColor={colors.blue}
                size={30}
                text='14'>
              </Hexagon>
              <Name>
                Knorcedger
              </Name>
            </InfoRow>
            <InfoRow>
              <Hexagon
                bar={true}
                barColor={colors.gray1}
                barContent={1535}
                barPercent={0}
                barSize={80}
                image={trophy}
                mainColor={colors.gray}
                size={30}>
              </Hexagon>
              <Hexagon
                bar={true}
                barColor={colors.gray1}
                barContent={1535}
                barPercent={0}
                barSize={80}
                image={coin}
                mainColor={colors.gray}
                size={30}>
              </Hexagon>
            </InfoRow>
            <InfoRow>
              <Hexagon
                bar={true}
                barColor={colors.gray1}
                barContent={23}
                barPercent={0}
                barSize={80}
                mainColor={colors.green}
                size={30}
                text='+'>
              </Hexagon>
              <Hexagon
                bar={true}
                barColor={colors.gray1}
                barContent={27}
                barPercent={0}
                barSize={80}
                mainColor={colors.red}
                size={30}
                text='-'>
              </Hexagon>
            </InfoRow>
          </MyInfo>
        </Header>
        <Question>
          7 + 4
        </Question>
        <Smile colorUp={colors.linen} colorDown={colors.red} />
        <Body>
          <ButtonRow>
            <Button
              backgroundColor={colors.yellow}
              borderColor={colors.gray}
              text='11'
              textColor={colors.gray}
              width={140}
              onClick={() => {}}>
            </Button>
            <Button
              backgroundColor={colors.yellow}
              borderColor={colors.gray}
              text='11'
              textColor={colors.gray}
              width={140}
              onClick={() => {}}>
            </Button>
          </ButtonRow>
          <ButtonRow>
            <Button
              backgroundColor={colors.yellow}
              borderColor={colors.gray}
              text='11'
              textColor={colors.gray}
              width={140}
              onClick={() => {}}>
            </Button>
            <Button
              backgroundColor={colors.yellow}
              borderColor={colors.gray}
              text='11'
              textColor={colors.gray}
              width={140}
              onClick={() => {}}>
            </Button>
          </ButtonRow>
        </Body>
      </Container>
    );
  }
};

Home.contextTypes = {
  history: PropTypes.object
};

export default Home;
