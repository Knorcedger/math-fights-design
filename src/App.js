import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import _ from 'lodash';
import './App.css';
import Home from './home/home';
import Leaderboard from './leaderboard/leaderboard';
import Temp from './temp/temp';
import Welcome from './welcome/welcome';
import Login from './login/login';
import PlayGame from './playGame/playGame';
import Tutorial from './tutorial/tutorial';
import GameResult from './gameResult/gameResult';
import Shop from './shop/shop';
import Experience from './experience/experience';
import Experience2 from './experience/experience2';
import AchievementUp from './achievementUp/achievementUp';
import UserProfile from './userProfile/userProfile';
import UserHistory from './userHistory/userHistory';
import Ranks from './ranks/ranks';
import Searching from './searching/searching';
import Social from './social/social';
import Challenge from './challenge/challenge';

const getTip = () => {
  const tips = [
    'The game matches you with players of the same skill level based on your trophies',
    'If you win, you get trophies from your opponent. If he wins, he gets your trophies',
    'Earn more trophies to appear in the Leaderboard and achieve new Ranks',
    'When the answer button turns yellow, you can select a second answer (Second Try)',
    'You have 1 Second Try per game which costs you 1000 gold to use',
    'Use your gems to buy more gold in the Shop to always have a Second Try available',
    'In case of a draw the winner is based on answer time. Click the clock icon to check the times',
    'Green answer button means correct, red is wrong and yellow that you have a Second Try',
    'You have 10 seconds for each question, 8 questions per game and 1 Second Try',
    'Questions contain additions, subtractions, multiplications, divisions and factorials',
    'Play games to earn experience points and achieve higher experience levels',
    'Every time you win a game, you earn an amount of gold'
  ];

  return tips[_.random(0, 11)];
};

class App extends Component {

  constructor() {
    super();

    let openNav = true;
    if (localStorage.getItem('openNav') === 'false') {
      openNav = false;
    }

    this.state = {
      openNav,
      tip: getTip()
    };
  }

  componentDidMount() {
    const self = this;
    window.onkeyup = e => {
      const key = e.keyCode ? e.keyCode : e.which;

      if (key === 219) {
        localStorage.setItem('openNav', true);
        self.setState({openNav: true});
      } else if (key === 221) {
        localStorage.setItem('openNav', false);
        self.setState({openNav: false});
      }
    };

    setInterval(() => {
      this.setState({tip: getTip()});
    }, 6000);
  }

  render() {
    return (
      <Router>
        <div className='app-body'>
          {
            this.state.openNav && (
              <div className='nav collapsed'>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/leaderboard'>Leaderboard</Link></li>
                  <li><Link to='/temp'>Temp</Link></li>
                  <li><Link to='/welcome'>Welcome</Link></li>
                  <li><Link to='/shop'>Shop</Link></li>
                  <li><Link to='/achievementUp'>AchievementUp</Link></li>
                  <li><Link to='/userProfile'>UserProfile</Link></li>
                  <li><Link to='/social'>Social</Link></li>
                  <li><Link to='/ranks'>Ranks</Link></li>
                </ul>
                <ul>
                  <li><Link to='/login'>Login</Link></li>
                  <li><Link to='/playgame'>PlayGame</Link></li>
                  <li><Link to='/tutorial'>Tutorial</Link></li>
                  <li><Link to='/gameresult'>GameResult</Link></li>
                  <li><Link to='/experience'>Experience</Link></li>
                  <li><Link to='/experience2'>Experience2</Link></li>
                  <li><Link to='/userhistory'>UserHistory</Link></li>
                  <li><Link to='/searching'>Searching</Link></li>
                  <li><Link to='/challenge'>Challenge</Link></li>
                </ul>
              </div>
            )
          }
          <Route exact={true} path='/' component={Home} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/temp' component={Temp} />
          <Route path='/welcome' component={Welcome} />
          <Route path='/login' component={Login} />
          <Route path='/playgame' component={PlayGame} />
          <Route path='/tutorial' component={Tutorial} />
          <Route path='/gameresult' component={GameResult} />
          <Route path='/shop' component={Shop} />
          <Route path='/experience' component={Experience} />
          <Route path='/experience2' component={Experience2} />
          <Route path='/achievementUp' component={AchievementUp} />
          <Route path='/userProfile' component={UserProfile} />
          <Route path='/userhistory' component={UserHistory} />
          <Route path='/ranks' component={Ranks} />
          <Route path='/searching' render={() => <Searching tip={this.state.tip} />} />
          <Route path='/social' component={Social} />
          <Route path='/challenge' component={Challenge} />
        </div>
      </Router>
    );
  }
}

export default App;
