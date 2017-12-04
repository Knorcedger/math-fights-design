import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../modules/colors';

const Tile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.lightBlue};
  border: 2px solid ${colors.darkBlue};
  border-radius: 10px;
  padding: 10px;
  width: 40%;
`;

const Icon = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: url(${props => props.icon}) no-repeat;
`;

const Title = styled.div`
  font-size: 20px;
  color: ${colors.darkBlue};
  margin: 10px 0;
`;

const Age = styled.div`
  font-size: 14px;
  color: ${colors.gray};
`;

const Ribbon = ({age, icon, iconSize, title}) => (
  <Tile>
    <Icon icon={icon} size={iconSize} />
    <Title>{title}</Title>
    <Age>{age}</Age>
  </Tile>
);

Ribbon.defaultProps = {
  age: null
};

Ribbon.propTypes = {
  /**
   * The player age
   */
  age: PropTypes.string,
  /**
   * The player representative icon
   */
  icon: PropTypes.any.isRequired,
  /**
   * The player icon size
   */
  iconSize: PropTypes.number.isRequired,
  /**
   * The player experience title
   */
  title: PropTypes.string.isRequired
};

export default Ribbon;
