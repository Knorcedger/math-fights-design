/*http://csshexagon.com/*/

import React, {PropTypes} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size * 0.5775}px;
  background-color: ${props => props.mainColor};
  margin: ${props => (props.size * 0.5775) / 2}px 0;
  :active: {
    opacity: 0.5;
  }
  ${props => props.bar && `border-right: ${props.barSize}px solid ${props.barColor};`}
  ${props => props.bar && 'border-bottom-right-radius: 5px;'}
  ${props => props.bar && 'border-top-right-radius: 5px;'}
`;

const Top = styled.div`
  position: absolute;
  left: 0;
  width: 0;
  border-left: ${props => props.size / 2}px solid transparent;
  border-right: ${props => props.size / 2}px solid transparent;
  bottom: 100%;
  border-bottom: ${props => (props.size * 0.5775) / 2}px solid ${props => props.mainColor}
`;

const Bottom = styled.div`
  position: absolute;
  left: 0;
  width: 0;
  border-left: ${props => props.size / 2}px solid transparent;
  border-right: ${props => props.size / 2}px solid transparent;
  top: 100%;
  border-top: ${props => (props.size * 0.5775) / 2}px solid ${props => props.mainColor}
`;

const Bar = styled.span`
  height: 100%;
  width: ${props => props.relativeBarPercent}%;
  background-color: ${props => props.mainColor};
  z-index: 10;
  display: inherit;
  position: relative;
  left: ${props => props.size}px;
  top: -100%
`;

const Image = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Middle = styled.div`
  width: 60%;
  height: 100%;
  margin-left: 20%;
`;

const Hexagon = ({bar, barColor, barContent, barPercent, barSize, clickData, content, image, mainColor, onClick, size}) => {
  // calculate the correct percentage relative to the size
  const relativeBarPercent = (barSize / size) * barPercent;
  const barElement = bar && <Bar {...{relativeBarPercent, mainColor, size}}>{barContent}</Bar>;

  return (
    <Wrapper {...{bar, barColor, barSize, mainColor, size}} onClick={() => onClick(clickData)}>
      <Middle>
        <Top {...{mainColor, size}} />
        <Image image={image}>
          {content}
        </Image>
        <Bottom {...{mainColor, size}} />
      </Middle>
      {barElement}
    </Wrapper>
  );
}

Hexagon.defaultProps = {
  bar: false,
  barColor: 'black',
  barContent: null,
  barPercent: 0,
  barSize: 0,
  clickData: null,
  image: null,
  onClick: null,
  text: null
};

Hexagon.propTypes = {
  /**
   * Display a bar or not
   */
  bar: PropTypes.bool,
  /**
   * Colour of the bar if this one is visible
   */
  barColor: PropTypes.string,
  /**
   * Component to render over the bar
   */
  barContent: PropTypes.element,
  /**
   * Percentage of bar that is full
   */
  barPercent: PropTypes.number,
  /**
   * Width of bar in px
   */
  barSize: PropTypes.number,
  /**
   * Data passed on click of hexagon
   */
  clickData: PropTypes.any,
  /**
   * Image shown inside hegaxon
   */
  image: PropTypes.string,
  /**
   * Color of hexagon
   */
  mainColor: PropTypes.string.isRequired,
  /**
   * On click of the component, the function that will run
   */
  onClick: PropTypes.func,
  /**
   * Size of the hexagon in px
   */
  size: PropTypes.number.isRequired,
  /**
   * Text shown inside hegaxon.
   */
  text: PropTypes.string
};

export default Hexagon;
