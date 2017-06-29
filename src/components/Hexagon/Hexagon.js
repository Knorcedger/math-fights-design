import React from 'react';
import PropTypes from 'prop-types';
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
  ${props => props.bar && `
    border-right: ${props.barSize}px solid ${props.barColor};
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  `}
`;

const Edge = styled.div`
  position: absolute;
  left: 0;
  width: 0;
  border-left: ${props => props.size / 2}px solid transparent;
  border-right: ${props => props.size / 2}px solid transparent;
  ${props => {
    const borderStyle = `${(props.size * 0.5775) / 2}px solid ${props.mainColor}`;
    return props.placement === 'top'
      ? `border-top: ${borderStyle}; top: 100%;`
      : `border-bottom: ${borderStyle}; bottom: 100%;`;
  }};
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

const Hexagon = ({
  bar,
  barColor,
  barContent,
  barPercent,
  barSize,
  clickData,
  image,
  mainColor,
  onClick,
  size,
  text
}) => {
  // calculate the correct percentage relative to the size
  const relativeBarPercent = (barSize / size) * barPercent;
  const barElement = bar && <Bar {...{relativeBarPercent, mainColor, size}}>{barContent}</Bar>;

  return (
    <Wrapper {...{bar, barColor, barSize, mainColor, size}} onClick={() => onClick(clickData)}>
      <Middle>
        <Edge placement='top' {...{mainColor, size}} />
        <Image image={image}>
          {text}
        </Image>
        <Edge placement='bottom' {...{mainColor, size}} />
      </Middle>
      {barElement}
    </Wrapper>
  );
};

Hexagon.defaultProps = {
  bar: false,
  barColor: 'black',
  barContent: null,
  barPercent: 0,
  barSize: 0,
  clickData: null,
  image: null,
  onClick: () => {},
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
  barContent: PropTypes.number,
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
