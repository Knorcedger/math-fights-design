import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// modules
import colors from '../../modules/colors';

// assets
import add from '../../assets/images/plus.svg';

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

const Bar = styled.div`
  width: ${props => props.width}%;
  height: 100%;
  z-index: 10;
  position: relative;
  left: ${props => props.size}px;
  top: -100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const BarBackground = styled.div`
  position: absolute;
  left: 0;
  width: ${props => props.relativeBarPercent}%;
  height: 100%;
  background-color: ${props => props.mainColor};
`;

const BarText = styled.div`
  position: absolute;
  left: 0;
  font-size: 13px;
  font-weight: bold;
  color: ${colors.white};
  margin: 1px 0 0 2px;
`;

const BarIcon = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${add});
  background-size: cover;
`;

const Image = styled.div`
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.textColor};
`;

const Middle = styled.div`
  width: 60%;
  height: 100%;
  margin-left: 20%;
`;

const Hexagon = ({
  bar,
  barColor,
  barIcon,
  barPercent,
  barSize,
  barText,
  clickData,
  image,
  mainColor,
  onBarIconClick,
  onClick,
  size,
  text,
  textColor
}) => {
  // calculate the correct percentage relative to the size
  const relativeBarPercent = (barSize / size) * barPercent;

  // construct the bar
  let barElement;
  let barBackgroundElement;
  let barTextElement;
  let barIconElement;
  if (bar) {
    barBackgroundElement = barPercent !== 0 && <BarBackground {...{relativeBarPercent, mainColor, size}} />;
    barTextElement = barText && <BarText>{barText}</BarText>;
    barIconElement = barIcon && <BarIcon barIcon={barIcon} onClick={onBarIconClick || null} />;

    // we need barWidth set only when the bar has Icon to position the Icon correctly
    const barWidth = barIconElement && (barSize / size) * 110;

    barElement = (
      <Bar size={size} width={barWidth}>
        {barBackgroundElement}
        {barTextElement}
        {barIconElement}
      </Bar>
    );
  }

  let content;

  if (text) {
    content = <Text textColor={textColor}>{text}</Text>;
  } else if (image) {
    content = <Image image={image} />;
  }

  return (
    <Wrapper {...{bar, barColor, barSize, mainColor, size}} onClick={() => onClick && onClick(clickData)}>
      <Middle>
        <Edge placement='top' {...{mainColor, size}} />
        {content}
        <Edge placement='bottom' {...{mainColor, size}} />
      </Middle>
      {barElement}
    </Wrapper>
  );
};

Hexagon.defaultProps = {
  bar: false,
  barColor: 'black',
  barIcon: null,
  barPercent: 0,
  barSize: 0,
  barText: null,
  clickData: null,
  image: null,
  onBarIconClick: null,
  onClick: null,
  text: null,
  textColor: 'white'
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
   * Display an icon on the bar end
   */
  barIcon: PropTypes.oneOf(['add']),
  /**
   * Percentage of bar that is full
   */
  barPercent: PropTypes.number,
  /**
   * Width of bar in px
   */
  barSize: PropTypes.number,
  /**
   * Text to render over the bar
   */
  barText: PropTypes.string,
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
   * On click on the bar icon
   */
  onBarIconClick: PropTypes.func,
  /**
   * On click of the component, the function that will run
   */
  onClick: PropTypes.func,
  /**
   * Size of the hexagon in px
   */
  size: PropTypes.number.isRequired,
  /**
   * Text displayed inside hegaxon.
   */
  text: PropTypes.string,
  /**
   * The color of the text displayed inside the hexagon
   */
  textColor: PropTypes.string
};

export default Hexagon;
