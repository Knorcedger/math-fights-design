import React, {PropTypes} from 'react';
import styled from 'styled-components';

const Arrow = styled.div`
  border: solid ${props => props.color};
  border-width: 0 ${props => props.size}px ${props => props.size}px 0;
  display: inline-block;
  padding: ${props => props.size}px;
  transform: rotate(135deg);
`;

const BackButton = props => {
  return (
    <Arrow {...props} onClick={() => props.onClick(props.clickData)}></Arrow>
  );
};

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
  color: PropTypes.string,
  /**
   * Shows if button is disabled or not
   */
  disabled: PropTypes.bool,
  /**
   * On click of the component, the function that will run
   */
  onClick: PropTypes.func.isRequired,
  /**
   * Size of back button
   */
  size: PropTypes.number.isRequired,
  /**
   * How think the back button is
   */
  weigth: PropTypes.number.isRequired
};

export default BackButton;
