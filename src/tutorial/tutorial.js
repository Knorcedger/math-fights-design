import React from 'react';
import styled from 'styled-components';

// components
// import Button from '../components/Button/Button';
// import Smile from '../components/Smile/Smile';

// modules
import colors from '../modules/colors';

const Container = styled.div`
  background-color: ${colors.red};
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  background-color: ${colors.linen};
  border-radius: 50%;
  width: 200px;
  height: 200px;
`;

const Question = styled.div`
  font-size: 40px;
`;

/**
* Tutorial View
**/
const Tutorial = () => (
  <Container>
    <Circle>
      <Question>
        7 + 4
      </Question>
    </Circle>
  </Container>
);

export default Tutorial;
