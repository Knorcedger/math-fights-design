import React, { Component } from 'react';
import './App.css';
import Home from './home/home';
import Leaderboard from './leaderboard/leaderboard';
import Temp from './temp/temp';
import Welcome from './welcome/welcome';
import Login from './login/login';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App-body">
          <div className="App-links">
            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/leaderboard'>Leaderboard</Link></li>
              <li><Link to='/temp'>Temp</Link></li>
              <li><Link to='/welcome'>Welcome</Link></li>
            </ul>
            <ul>
              <li><Link to='/login'>Login</Link></li>
            </ul>
          </div>
          <hr/>
          <Route exact path='/' component={Home} />
          <Route path='/leaderboard' component={Leaderboard} />
          <Route path='/temp' component={Temp} />
          <Route path='/welcome' component={Welcome} />
          <Route path='/login' component={Login} />
        </div>
      </Router>
    );
  }
};

export default App;
