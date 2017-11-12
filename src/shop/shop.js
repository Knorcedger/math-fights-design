import React, {Component} from 'react';
import styled from 'styled-components';

// components
import BackButton from '../components/BackButton/BackButton';
import Button from '../components/Button/Button';
import Smile from '../components/Smile/Smile';

// assets
import shop from '../assets/images/shop.svg';
import pouch from '../assets/images/coins.svg';
import gem from '../assets/images/diamond.svg';
import blockAds from '../assets/images/block-ads.png';
import changeUsername from '../assets/images/change-username.png';
import gemsPouch from '../assets/images/gems-pouch.png';

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

const ShopIcon = styled.div`
  height: 50px;
  width: 50px;
  background: url(${shop}) no-repeat;
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

const Ribbon = styled.div`
  width: 100%;
  font-size: 30px;
  display: flex;
  justify-content: center;
`;

const TileList = styled.div`
  width: 90%;
  margin: 10px 0 30px 0;
  display: flex;
  justify-content: space-between;
`;

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.blue};
  border: 2px solid ${colors.darkBlue};
  border-radius: 10px;
  padding: 10px;
`;

const Title = styled.div`
  font-size: 20px;
  color: ${colors.yellow};
  margin-bottom: 10px;
`;

const Amount = styled.div`
  font-size: 18px;
  color: ${props => colors[props.color]};
`;

const Icon = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-image: url(${props => props.icon});
  background-repeat: no-repeat;
  background-size: ${props => props.size}px;
`;

const Price = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10px;
`;

const Number = styled.div`
  font-size: 18px;
  color: ${colors.white};
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
  padding: 4px 20px 20px 20px;
  position: relative;
`;

const Close = styled.div`
  position: absolute;
  right: 6px;
  top: 6px;
  border-radius: 6px;
  background-color: ${colors.red};
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  border: 2px solid ${colors.gray4}
`;

const ModalText = styled.div`
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

const Input = styled.input`
  border-radius: 4px;
  border: 2px solid ${colors.gray};
  width: 70%;
  padding: 10px;
  margin: 10px 0 40px 0;
`;

 /**
  * This is the leaderboard view
  **/
class Shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: null
    };
  }

  render() {
    return (
      <Container>
        <Smile colorUp={colors.red} colorDown={colors.linen} height='100px' />
        <Body>
          <InSmile height='100px'>
            <BackContainer onClick={() => window.location.replace('/')}>
              <BackButton color={colors.white} thickness={4} size={5} />
              <ShopIcon />
            </BackContainer>
            <HeaderText>Shop</HeaderText>
          </InSmile>
          <Content>
            <Ribbon>Gold</Ribbon>
            <TileList>
              <Tile onClick={() => this.setState({show: 'buyModal'})}>
                <Title>Pouch</Title>
                <Amount color='white'>100</Amount>
                <Icon icon={pouch} size={80} />
                <Price>
                  <Number>1</Number>
                  <Icon icon={gem} size={30} />
                </Price>
              </Tile>
              <Tile onClick={() => this.setState({show: 'buyModal'})}>
                <Title>Pack</Title>
                <Amount color='white'>1200</Amount>
                <Icon icon={pouch} size={80} />
                <Price>
                  <Number>10</Number>
                  <Icon icon={gem} size={30} />
                </Price>
              </Tile>
              <Tile onClick={() => this.setState({show: 'buyModal'})}>
                <Title>Truck</Title>
                <Amount color='white'>15000</Amount>
                <Icon icon={pouch} size={80} />
                <Price>
                  <Number>100</Number>
                  <Icon icon={gem} size={30} />
                </Price>
              </Tile>
            </TileList>
            <Ribbon>Gems</Ribbon>
            <TileList>
              <Tile>
                <Title>Pouch</Title>
                <Amount color='white'>100</Amount>
                <Icon icon={gemsPouch} size={80} />
                <Price>
                  <Number>€ 1</Number>
                </Price>
              </Tile>
              <Tile>
                <Title>Pack</Title>
                <Amount color='white'>500</Amount>
                <Icon icon={pouch} size={80} />
                <Price>
                  <Number>€ 4</Number>
                </Price>
              </Tile>
              <Tile>
                <Title>Truck</Title>
                <Amount color='white'>1000</Amount>
                <Icon icon={pouch} size={80} />
                <Price>
                  <Number>€ 7</Number>
                </Price>
              </Tile>
            </TileList>
            <Ribbon>Game Experience</Ribbon>
            <TileList>
              <Tile>
                <Title>Remove ads</Title>
                <Icon icon={blockAds} size={80} />
                <Price>
                  <Number>350</Number>
                  <Icon icon={gem} size={30} />
                </Price>
              </Tile>
              <Tile onClick={() => this.setState({show: 'changeUsernameModal'})}>
                <Title>New Username</Title>
                <Icon icon={changeUsername} size={80} />
                <Price>
                  <Number>100</Number>
                  <Icon icon={gem} size={30} />
                </Price>
              </Tile>
            </TileList>
          </Content>
        </Body>
        {
          this.state.show === 'buyModal' &&
          <Modal>
            <ModalContent>
              <Ribbon>Buy</Ribbon>
              <Close onClick={() => this.setState({show: null})}>X</Close>
              <ModalText>You are about to buy 1200 gold for 10 gems!</ModalText>
              <ButtonWrapper>
                <Button
                  backgroundColor={colors.green}
                  borderColor={colors.gray}
                  text='Buy'
                  textColor={colors.white}
                  width={120}
                  onClick={() => {}}
                />
              </ButtonWrapper>
            </ModalContent>
          </Modal>
        }
        {
          this.state.show === 'changeUsernameModal' &&
          <Modal>
            <ModalContent>
              <Ribbon>Change Username</Ribbon>
              <Close onClick={() => this.setState({show: null})}>X</Close>
              <ModalText>You are about to change your username for 100 gems!</ModalText>
              <Input />
              <Button
                backgroundColor={colors.green}
                borderColor={colors.gray}
                text='Change'
                textColor={colors.white}
                width={120}
                onClick={() => {}}
              />
            </ModalContent>
          </Modal>
        }
      </Container>
    );
  }
}

export default Shop;
