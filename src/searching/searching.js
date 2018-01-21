import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import Button from '../components/Button/Button';

// assets
import root from '../assets/images/ROOT.png';

// modules
import colors from '../modules/colors';

const Container = styled.div`
  background-color: linen;
  overflow-x: hidden;
`;

const Body = styled.div`
  height: 600px;
  width: 100%;
  background-color: ${colors.gray2};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Looking = styled.div`
  color: ${colors.red};
  font-size: 30px;
  background-color: ${colors.gray};
  border-radius: 20px;
  padding: 10px;
  width: 90%;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  background: url(${root});
  background-size: contain;
  margin-top: 120px;
`;

const Tip = styled.div`
  width: 90%;
  height: 40px;
  background-color: ${colors.lightBlue};
  border: 3px solid ${colors.blue};
  border-radius: 20px;
  color: ${colors.gray};
  padding: 10px;
  font-size: 14px;
`;

const Strong = styled.span`
  font-size: 20px;
`;

const Searching = ({tip}) => (
  <Container>
    <Body>
      <Looking>Searching for opponent...</Looking>
      <Logo />
      <Button
        backgroundColor={colors.red}
        borderColor={colors.gray}
        text='Cancel'
        textColor={colors.white}
        width={140}
        onClick={() => {}}
      />
      <Tip><Strong>Tip</Strong>: {tip}</Tip>
    </Body>
  </Container>
);

Searching.propTypes = {
  tip: PropTypes.string.isRequired
};

export default Searching;
