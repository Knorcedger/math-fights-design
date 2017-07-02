import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: ${props => props.height};
  background: ${props => props.colorDown};
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

const Smile = ({colorDown, colorUp, height}) => (
  <Wrapper colorDown={colorDown} height={height}>
    <SemiCircle colorUp={colorUp} />
  </Wrapper>
);

Smile.propTypes = {
  colorDown: PropTypes.string.isRequired,
  colorUp: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired
};

export default Smile;
