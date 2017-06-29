import React from 'react';
import PropTypes from 'prop-types';

import './XP.css';

const XP = ({level}) => (
  <span className='xp'>
    <span className='level'>{level}</span>
  </span>
);

XP.propTypes = {
  level: PropTypes.number.isRequired
};

export default XP;
