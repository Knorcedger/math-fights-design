import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100px;
  background: ${props => props.colorDown};
  z-index: -1;
`;

const SemiCircle = styled.div`
  display: flex;
  background: ${props => props.colorUp};
  width: 134%;
  height: 80%;
  border-radius: 50% / 100%;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom: 0;
  position: relative;
  left: -17%;
`;

const Smile = ({colorDown, colorUp}) => (
  <Wrapper colorDown={colorDown} >
    <SemiCircle colorUp={colorUp} />
  </Wrapper>
);

Smile.propTypes = {
  colorDown: PropTypes.string.isRequired,
  colorUp: PropTypes.string.isRequired
};

export default Smile;
