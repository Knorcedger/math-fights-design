import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Arrow = styled.div`
  border: solid ${props => props.color};
  border-width: 0 ${props => props.thickness}px ${props => props.thickness}px 0;
  display: inline-block;
  padding: ${props => props.size}px;
  transform: rotate(135deg);
`;

const BackButton = ({clickData, color, disabled, onClick, size, thickness}) => (
  <Arrow
    color={color}
    disabled={disabled}
    size={size}
    thickness={thickness}
    onClick={() => onClick(clickData)}
  />
);

BackButton.defaultProps = {
  borderColor: 'black',
  clickData: null,
  disabled: false
};

BackButton.propTypes = {
  /**
   * Data passed on button click
   */
  clickData: PropTypes.any,
  /**
   * Colour of back button
   */
  color: PropTypes.string.isRequired,
  /**
   * Shows if button is disabled or not
   */
  disabled: PropTypes.bool,
  /**
   * On click of the component, the function that will run
   */
  onClick: PropTypes.func,
  /**
   * Size of back button
   */
  size: PropTypes.number.isRequired,
  /**
   * How think the back button is
   */
  thickness: PropTypes.number.isRequired
};

export default BackButton;
