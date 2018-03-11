import React from 'react';
import styled from 'styled-components';

// components
import Smile from '../components/Smile/Smile';
import BackButton from '../components/BackButton/BackButton';
import Ribbon from '../components/Ribbon/Ribbon';
import Button from '../components/Button/Button';

// assets
import photo from '../assets/images/tasos.jpg';
import gem from '../assets/images/diamond.svg';
import holidays from '../assets/images/holidays.svg';
import horse from '../assets/images/horse.svg';
import happy from '../assets/images/happy.svg';
import warrior from '../assets/images/warrior.svg';
import mask from '../assets/images/mask.svg';
import bow from '../assets/images/bow.svg';
import spear from '../assets/images/spear.svg';
import weapon from '../assets/images/weapon.svg';
import hanger from '../assets/images/hanger.svg';

// modules
import colors from '../modules/colors';

const Container = styled.div`
  background-color: linen;
  overflow-x: hidden;
`;

const Body = styled.div`
  position: relative;
`;

const InSmile = styled.div`
  width: 100%;
  height: ${props => props.height};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  background-color: ${colors.linen};
  height: 4=800px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 20px;

  > :nth-child(1), > :nth-child(3) {
    margin-bottom: 20px;
  }

  > :nth-child(3) {
    margin-top: 30px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 70px;
`;

const BackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 20px 14px;
  height: 70px;
`;

const MainIcon = styled.div`
  height: 50px;
  width: 50px;
  background: url(${hanger}) no-repeat;
  margin-left: 10px;
`;

const HeaderText = styled.div`
  font-size: 26px;
  font-weight: bold;
  color: ${colors.white};
  margin: 20px 10px 0 0;
`;

const Subheader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 96%;
`;

const ProfileArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
`;

const ProfileImage = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  position: relative;
  left: calc(50% - 50px);
  background: url(${photo});
  background-size: contain;
  border: 2px solid ${colors.white};
`;

const Extension = styled.div`
  background: url(${bow});
  position: absolute;
  bottom: -10%;
  right: -20%;
  width: 70px;
  height: 70px;
`;

const TileList = styled.div`
  width: 90%;
  margin: 10px 0 0 0;
  display: flex;
  justify-content: space-between;
`;

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.darkBlue};
  border: 2px solid ${colors.gray};
  border-radius: 10px;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  color: ${colors.yellow};
  margin-bottom: 10px;
`;

const Icon = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-size: ${props => props.size}px;
  ${props => props.circle && 'border-radius: 50%;'}
`;

const Price = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
  border: 2px solid ${colors.gray};
  border-radius: 20px;
  padding: 6px 2px;
  background-color: ${colors.green};
`;

const Number = styled.div`
  font-size: 18px;
  color: ${colors.white};
`;

/**
 * UserProfile View
 */
const Wardrobe = () => (
  <Container>
    <Smile colorUp={colors.red} colorDown={colors.linen} height='260px' width='140%' />
    <Body>
      <InSmile height='260px'>
        <Header>
          <BackContainer onClick={() => window.location.replace('/')}>
            <BackButton color={colors.white} thickness={4} size={5} />
            <MainIcon />
          </BackContainer>
          <HeaderText>Wardrobe</HeaderText>
        </Header>
        <Subheader>
          <Button
            backgroundColor={colors.yellow}
            borderColor={colors.gray}
            text='Reset'
            textColor={colors.gray}
            width={50}
            onClick={() => {}}
          />
          <ProfileArea>
            <ProfileImage />
            <Extension />
          </ProfileArea>
          <Button
            backgroundColor={colors.green}
            borderColor={colors.gray}
            text='Save'
            textColor={colors.white}
            width={50}
            onClick={() => {}}
          />
        </Subheader>
      </InSmile>
      <Content>
        <Ribbon text='Icons' />
        <TileList>
          <Tile onClick={() => this.setState({show: 'buyModal'})}>
            <Title>Profile</Title>
            <Icon icon={photo} size={80} circle={true} />
            <Price>
              <Number>FREE</Number>
            </Price>
          </Tile>
          <Tile onClick={() => this.setState({show: 'buyModal'})}>
            <Title>Experience</Title>
            <Icon icon={holidays} size={80} />
            <Price>
              <Number>FREE</Number>
            </Price>
          </Tile>
          <Tile onClick={() => this.setState({show: 'buyModal'})}>
            <Title>Horse</Title>
            <Icon icon={horse} size={80} />
            <Price>
              <Number>40</Number>
              <Icon icon={gem} size={24} />
            </Price>
          </Tile>
        </TileList>
        <TileList>
          <Tile onClick={() => this.setState({show: 'buyModal'})}>
            <Title>Baby</Title>
            <Icon icon={happy} size={80} />
            <Price>
              <Number>35</Number>
              <Icon icon={gem} size={24} />
            </Price>
          </Tile>
          <Tile onClick={() => this.setState({show: 'buyModal'})}>
            <Title>Warrior</Title>
            <Icon icon={warrior} size={80} />
            <Price>
              <Number>60</Number>
              <Icon icon={gem} size={24} />
            </Price>
          </Tile>
          <Tile onClick={() => this.setState({show: 'buyModal'})}>
            <Title>Fighter</Title>
            <Icon icon={mask} size={80} />
            <Price>
              <Number>50</Number>
              <Icon icon={gem} size={24} />
            </Price>
          </Tile>
        </TileList>
        <Ribbon text='Extensions' />
        <TileList>
          <Tile onClick={() => this.setState({show: 'buyModal'})}>
            <Title>Bow</Title>
            <Icon icon={bow} size={80} />
            <Price>
              <Number>30</Number>
              <Icon icon={gem} size={24} />
            </Price>
          </Tile>
          <Tile onClick={() => this.setState({show: 'buyModal'})}>
            <Title>Spear</Title>
            <Icon icon={spear} size={80} />
            <Price>
              <Number>20</Number>
              <Icon icon={gem} size={24} />
            </Price>
          </Tile>
          <Tile onClick={() => this.setState({show: 'buyModal'})}>
            <Title>Weapon</Title>
            <Icon icon={weapon} size={80} />
            <Price>
              <Number>25</Number>
              <Icon icon={gem} size={24} />
            </Price>
          </Tile>
        </TileList>
      </Content>
    </Body>
  </Container>
);

export default Wardrobe;
