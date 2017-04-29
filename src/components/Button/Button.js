/*http://cssbutton.com/*/

import React, {PropTypes} from 'react';
import {StyleSheet, css} from 'aphrodite';

const getButtonStyle = (backgroundColor, borderColor, textColor, width) => {
  return StyleSheet.create({
    button: {
      height: '40px',
      width: width,
      backgroundColor: backgroundColor,
      fontSize: '20px',
      fontWeight: 'bold',
      color: textColor,
      textAlign: 'center',
      paddingTop: '17px',
      paddingLeft: '20px',
      paddingRight: '20px',
      borderRadius: '30px',
      marginBottom: '20px',
      borderWidth: 3,
      borderStyle: 'solid',
      borderColor: borderColor,
    }
  });
};


const Button = ({backgroundColor, borderColor, clickData, onClick, text, textColor, width}) => {
  const buttonStyle = getButtonStyle(backgroundColor, borderColor, textColor, width);
  return (
    <div onClick={() => onClick(clickData)}>
      <div className={css(buttonStyle.button)}> {text}</div>
    </div>
  );
}

Button.props = {
  /**
   * Colour of background
   */
  backgroundColor: PropTypes.string,
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
  onClick: PropTypes.func,
  /**
   * Text shown in the button
   */
  text: PropTypes.string,
  /**
   * Colour of text of button
   */
  textColor: PropTypes.string,
  /**
   * Width of button
   */
  width: PropTypes.number
};

export default Button;
