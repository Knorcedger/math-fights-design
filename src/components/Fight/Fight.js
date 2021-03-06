import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// components
import Hexagon from '../Hexagon/Hexagon';

// modules
import colors from '../../modules/colors';

// assets
import sword from '../../assets/images/sword.svg';
import clock from '../../assets/images/time.png';
import trophy from '../../assets/images/trophy.svg';

const Wrapper = styled.div`
  width: 90%;
  background-color: ${colors.white};
  border: 2px solid ${colors.gray};
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => props.color};
  color: ${colors.linen};
  border-radius: 8px 8px 0 0;
  font-size: 22px;
  position: relative;
  padding: 4px;
`;

const Title = styled.div`

`;

const Time = styled.div`
  font-size: 12px;
  position: absolute;
  right: 10px;
  bottom: 2px;
`;

const Players = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const PlayerInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 40%;
`;

const Name = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: ${props => props.multi ? 'space-around' : 'center'};
  align-items: center;
  margin-top: 0px;
  padding: 10px 0;
`;

const ProfileImage = styled.div`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background: url(${props => props.image});
  background-size: contain;
`;

const SwordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

const Sword = styled.div`
  background: url(${sword});
  width: 50px;
  height: 50px;
`;

const Clock = styled.div`
  position: absolute;
  top: 10px;
  opacity: 0.5;
  width: 40px;
  height: 40px;
  background: url(${clock});
  background-size: contain;
`;

const TrophiesWrapper = styled.div`
  margin-top: 0px;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

const Fight = ({
  headerBackgroundColor,
  onClockClick,
  showClock,
  time,
  title,
  user1Image,
  user1Name,
  user1Score,
  user1Trophies,
  user2Image,
  user2Name,
  user2Score,
  user2Trophies
}) => (
  <Wrapper>
    <Header color={headerBackgroundColor}>
      <Title>{title}</Title>
      {
        time !== null && (
          <Time>{time}</Time>
        )
      }
    </Header>
    <Players>
      <PlayerInfo>
        <Name>{user1Name}</Name>
        <ProfileWrapper multi={user1Score}>
          <ProfileImage image={user1Image} />
          {
            user1Score !== null && (
              <Hexagon
                text={user1Score.toString()}
                mainColor={colors.blue}
                size={30}
              />
            )
          }
        </ProfileWrapper>
        <TrophiesWrapper>
          <Hexagon
            bar={true}
            barColor={colors.green}
            barPercent={0}
            barSize={50}
            barText={user1Trophies.toString()}
            image={trophy}
            mainColor={colors.green}
            size={30}
          />
        </TrophiesWrapper>
      </PlayerInfo>
      <SwordContainer>
        {
          showClock && <Clock onClick={onClockClick} />
        }
        <Sword />
      </SwordContainer>
      <PlayerInfo>
        <Name>{user2Name}</Name>
        <ProfileWrapper multi={user2Score}>
          {
            user2Score && (
              <Hexagon
                text={user2Score.toString()}
                mainColor={colors.blue}
                size={30}
              />
            )
          }
          <ProfileImage image={user2Image} />
        </ProfileWrapper>
        <TrophiesWrapper>
          <Hexagon
            bar={true}
            barColor={colors.green}
            barPercent={0}
            barSize={50}
            barText={user2Trophies.toString()}
            image={trophy}
            mainColor={colors.green}
            size={30}
          />
        </TrophiesWrapper>
      </PlayerInfo>
    </Players>
  </Wrapper>
);

Fight.defaultProps = {
  onClockClick: null,
  showClock: false,
  time: null,
  user1Score: null,
  user2Score: null
};

Fight.propTypes = {
  /**
   * The title background color
   */
  headerBackgroundColor: PropTypes.string.isRequired,
  onClockClick: PropTypes.func,
  showClock: PropTypes.bool,
  time: PropTypes.string,
  /**
   * The title text
   */
  title: PropTypes.string.isRequired,
  user1Image: PropTypes.string.isRequired,
  user1Name: PropTypes.string.isRequired,
  user1Score: PropTypes.number,
  user1Trophies: PropTypes.number.isRequired,
  user2Image: PropTypes.string.isRequired,
  user2Name: PropTypes.string.isRequired,
  user2Score: PropTypes.number,
  user2Trophies: PropTypes.number.isRequired
};

export default Fight;
