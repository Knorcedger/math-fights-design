import React, {PropTypes} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100px;
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
  justify-content: ${props => props.childrenPosition};
`;

const Smile = ({children, childrenPosition, colorDown, colorUp}) => {
  return (
    <Wrapper colorDown={colorDown} >
      <SemiCircle childrenPosition={childrenPosition} colorUp={colorUp} >
        {children}
      </SemiCircle>
    </Wrapper>
  );
};

Smile.defaultProps = {
  childrenPosition: 'center'
};

Smile.propTypes = {
  children: PropTypes.element,
  childrenPosition: PropTypes.oneOf(['center', 'flex-start', 'flex-end', 'space-around', 'space-between']),
  colorDown: PropTypes.string.isRequired,
  colorUp: PropTypes.string.isRequired
};

export default Smile;
