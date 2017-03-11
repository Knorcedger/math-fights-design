/*http://csshexagon.com/*/

import React, {PropTypes} from 'react';
import {StyleSheet, css} from 'aphrodite';

const getHexagonStyle = (size, mainColor, barSize, barColor) => {
  return StyleSheet.create({
    hexagon: {
      position: 'relative',
      width: size,
      height: size * 0.5775,
      backgroundColor: mainColor,
      margin: `${(size * 0.5775) / 2}px 0`,
      ':before': {
        content: '""',
        position: 'absolute',
        width: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        bottom: '100%',
        borderBottom: `${(size * 0.5775) / 2}px solid ${mainColor}`
      },
      ':after': {
        content: '""',
        position: 'absolute',
        width: 0,
        borderLeft: `${size / 2}px solid transparent`,
        borderRight: `${size / 2}px solid transparent`,
        top: '100%',
        borderTop: `${(size * 0.5775) / 2}px solid ${mainColor}`
      }
    },
    bar: {
      borderRight: `${barSize}px solid ${barColor}`,
      borderBottomRightRadius: 5,
      borderTopRightRadius: 5
    }
  });
};

const getBarStyle = (barPercent, mainColor, size) => {
  return StyleSheet.create({
    bar: {
      height: '100%',
      width: barPercent + '%',
      backgroundColor: mainColor,
      zIndex: 10,
      display: 'inherit',
      position: 'relative',
      left: size
    }
  });
};

const styles = StyleSheet.create({
  content: {
    zIndex: 100,
    position: 'absolute',
    top: -2,
    left: 7
  }
});

const Hexagon = ({bar, barColor, barPercent, barSize, mainColor, size, children}) => {
  const hexagonStyle = getHexagonStyle(size, mainColor, barSize, barColor);
  const classes = css(
    hexagonStyle.hexagon,
    bar && hexagonStyle.bar,
  );

  // calculate the correct percent relative to the size
  const relativeBarPercent = (barSize / size) * barPercent;
  const barElement = bar ? (<span className={css(getBarStyle(relativeBarPercent, mainColor, size).bar)}></span>) : '';

  return (
    <span className={classes}>
      <span className={css(styles.content)}>{children}</span>
      {barElement}
    </span>
  );
}

Hexagon.props = {
  bar: PropTypes.bool,
  barColor: PropTypes.string,
  barPercent: PropTypes.number,
  barSize: PropTypes.number,
  mainColor: PropTypes.string,
  size: PropTypes.number
};

export default Hexagon;
