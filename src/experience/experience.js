import React from 'react';
import styled from 'styled-components';

// components
import Smile from '../components/Smile/Smile';
import ExperienceTile from '../components/ExperienceTile/ExperienceTile';

// assets
import shop from '../assets/images/shop.svg';

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
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  background-color: ${colors.red};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.div`
  font-size: 20px;
  color: ${colors.gray};
  margin: 20px 0 0 0;
`;

const HeaderSubText = styled.div`
  font-size: 16px;
  color: ${colors.gray};
  margin: 10px 0 0 0;
`;

const TileList = styled.div`
  width: 90%;
  margin: 10px 0 30px 0;
  display: flex;
  justify-content: space-between;
`;

 /**
  * This is the Experience view
  **/
const Experience = () => (
  <Container>
    <Smile colorUp={colors.linen} colorDown={colors.red} height='120px' />
    <Body>
      <InSmile height='120px'>
        <HeaderText>Choose your math destiny</HeaderText>
        <HeaderSubText>...and the questions difficulty :)</HeaderSubText>
      </InSmile>
      <Content>
        <TileList>
          <ExperienceTile
            title='Junior'
            age='Age &lt; 8'
            icon={shop}
            iconSize={80}
          />
          <ExperienceTile
            title='Senior'
            age='Age 8-12'
            icon={shop}
            iconSize={80}
          />
        </TileList>
        <TileList>
          <ExperienceTile
            title='Veteran'
            age='Age irrelevant'
            icon={shop}
            iconSize={80}
          />
          <ExperienceTile
            title='Master'
            age='Space Age'
            icon={shop}
            iconSize={80}
          />
        </TileList>
      </Content>
    </Body>
  </Container>
);

export default Experience;
