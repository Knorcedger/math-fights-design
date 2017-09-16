import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
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

class App extends Component {

  constructor() {
    super();

    let openNav = true;
    if (localStorage.getItem('openNav') === 'false') {
      openNav = false;
    }

    this.state = {
      openNav
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
                </ul>
                <ul>
                  <li><Link to='/login'>Login</Link></li>
                  <li><Link to='/playgame'>PlayGame</Link></li>
                  <li><Link to='/tutorial'>Tutorial</Link></li>
                  <li><Link to='/gameresult'>GameResult</Link></li>
                  <li><Link to='/experience'>Experience</Link></li>
                  <li><Link to='/experience2'>Experience2</Link></li>
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
        </div>
      </Router>
    );
  }
}

export default App;
