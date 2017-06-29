import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Text = styled.div`
    width: ${props => props.width}px;
    background-color: ${props => (props.disabled ? 'gray' : props.backgroundColor)};
    font-size: 20px;
    font-weight: bold;
    color: ${props => props.textColor};
    text-align: center;
    padding: 17px 20px;
    ${props => props.borderColor && `border: 3px solid ${props.borderColor}`};
    border-radius: 30px;
`;

const Button = ({backgroundColor, borderColor, clickData, disabled, onClick, text, textColor, width}) => (
  <Text
    backgroundColor={backgroundColor}
    borderColor={borderColor}
    disabled={disabled}
    textColor={textColor}
    width={width}
    onClick={() => onClick(clickData)}
  >{text}</Text>
);

Button.defaultProps = {
  borderColor: null,
  clickData: null,
  disabled: false
};

Button.propTypes = {
  /**
   * Colour of background
   */
  backgroundColor: PropTypes.string.isRequired,
  /**
   * Colour of border
   */
  borderColor: PropTypes.string,
  /**
   * Data passed on button click
   */
  clickData: PropTypes.any,
  /**
   * Shows if button is disabled or not
   */
  disabled: PropTypes.bool,
  /**
   * On click of the component, the function that will run
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Text shown in the button
   */
  text: PropTypes.string.isRequired,
  /**
   * Colour of text of button
   */
  textColor: PropTypes.string.isRequired,
  /**
   * Width of button
   */
  width: PropTypes.number.isRequired
};

export default Button;
