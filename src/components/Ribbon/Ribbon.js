import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../modules/colors';
import cornerLeft from '../../assets/images/ribbon-corner-left.png';
import middleLeft from '../../assets/images/ribbon-middle-left.png';
import middleRight from '../../assets/images/ribbon-middle-right.png';
import cornerRight from '../../assets/images/ribbon-corner-right.png';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
`;

const CornerLeft = styled.div`
  background: url(${cornerLeft}) no-repeat;
  background-size: 20px 50px;
  height: 50px;
  width: 20px;
`;

const MiddleLeft = styled.div`
  background: url(${middleLeft}) repeat-x;
  background-size: 40% 50px;
  height: 50px;
  width: 40%;
`;

const MiddleRight = styled.div`
  background: url(${middleRight}) repeat-x;
  background-size: 40% 50px;
  height: 50px;
  width: 40%;
`;

const CornerRight = styled.div`
  background: url(${cornerRight}) no-repeat;
  background-size: 20px 50px;
  height: 50px;
  width: 20px;
`;

const Text = styled.span`
  position: absolute;
  color: ${colors.darkBlue};
  font-size: ${props => props.fontSize}px;
`;

const Ribbon = ({fontSize, text}) => (
  <Wrapper>
    <CornerLeft />
    <MiddleLeft />
    <Text fontSize={fontSize}>{text}</Text>
    <MiddleRight />
    <CornerRight />
  </Wrapper>
);

Ribbon.defaultProps = {
  fontSize: 32
};

Ribbon.propTypes = {
  fontSize: PropTypes.number,
  /**
   * The ribbon text
   */
  text: PropTypes.string.isRequired
};

export default Ribbon;
