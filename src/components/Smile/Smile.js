import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  left: ${props => props.left};
  width: ${props => props.width};
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

const Smile = ({colorDown, colorUp, height, width}) => {
  const left = `-${((parseInt(width, 10) - 100) / 2).toString()}%`;

  return (
    <Wrapper colorDown={colorDown} height={height} width={width} left={left}>
      <SemiCircle colorUp={colorUp} />
    </Wrapper>
  );
};

Smile.defaultProps = {
  width: '100%'
};

Smile.propTypes = {
  colorDown: PropTypes.string.isRequired,
  colorUp: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string
};

export default Smile;
