import React, {Component} from 'react';
// import Button from '../components/Button/Button';
// import Smile from '../components/Smile/Smile';
import styled from 'styled-components';
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
class Tutorial extends Component {
  /**
   * Render the tutorial view to the user's screen
   * @return {object} the displayed view
  **/
  render() {
    return (
      <Container>
        <Circle>
          <Question>
            7 + 4
          </Question>
        </Circle>
      </Container>
    );
  }
};

export default Tutorial;
