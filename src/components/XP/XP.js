import React, {PropTypes} from 'react';

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
