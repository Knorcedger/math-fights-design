import React, {PropTypes} from 'react';
import classNames from 'classnames';
classNames('foo', 'bar'); // => 'foo bar'

import './Hexagon.css';

const Hexagon = ({bg, children}) => {
  const classes = classNames({
    'hexagon': true,
    [`${bg}`]: bg
  });
  return (
    <span className={classes}>
      <span className='content'>{children}</span>
    </span>
  );
}

Hexagon.props = {
  bg: PropTypes.string
};

export default Hexagon;
